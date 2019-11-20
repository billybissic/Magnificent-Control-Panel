import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { ReservationType } from './../../../controllers/reservation/reservation-type';
import { ReservationStatus } from './../../../controllers/reservation/reservation-status';
import { ContactTime } from './../../../controllers/reservation/contact-time';

import { ReservationService } from './../../../services/reservation-service/reservation.service';

@Component({
  selector: 'app-reservations-form-manager',
  templateUrl: './reservations-form-manager.component.html',
  styleUrls: ['./reservations-form-manager.component.scss'],
  providers: [FormBuilder]
})
export class ReservationsFormManagerComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  errorMessage: string;

  reservationType: ReservationType = new ReservationType();
  reservationStatus: ReservationStatus = new ReservationStatus();
  contactTime: ContactTime = new ContactTime();

  reservationStatuses: any[];
  reservationTypes: any[];
  contactTimes: any[];

  contactTimesForm: FormGroup;
  reservationServicesForm: FormGroup;
  reservationStatusesForm: FormGroup;

  constructor(public auth: AuthService,
              private reservationService: ReservationService) { }

  ngOnInit()
  {
    if (this.auth.isAuthenticated()) {
      this.getInquiryStatus();
      this.getInquiryTypes();
      this.getContactTimes();
    }

    this.contactTimesForm = new FormGroup({
      contactTimeName: new FormControl('', Validators.required),
      contactTimeDescription: new FormControl('', Validators.required)
    });

    this.reservationServicesForm = new FormGroup({
      reservationServiceName: new FormControl('', Validators.required),
      reservationServiceDescription: new FormControl('', Validators.required)
    });

    this.reservationStatusesForm = new FormGroup({
      reservationStatusName: new FormControl('', Validators.required),
      reservationStatusDescription: new FormControl('', Validators.required)
    });
  }

  resetContactModel() {
    this.contactTimesForm.setValue({contactTimeName: '',
                                    contactTimeDescription: ''});
    this.contactTimesForm.markAsUntouched;
    this.contactTimesForm.markAsPristine;
  }

  resetReservationServicesModel() {
    this.reservationServicesForm.setValue({reservationServiceName: '',
                                           reservationServiceDescription: ''});
      this.reservationServicesForm.markAsUntouched;
      this.reservationServicesForm.markAsPristine;
  }

  resetReservationStatusModel() {
    this.reservationStatusesForm.setValue({reservationStatusName: '',
                                           reservationStatusDescription: ''});
      this.reservationStatusesForm.markAsUntouched;
      this.reservationStatusesForm.markAsPristine;
  }

  getContactTimes() {
    this.reservationService.getContactTimes()
    .subscribe(
      (results: any[]) => {
        this.contactTimes = results
        console.log(this.contactTimes)
      },
      (error) => console.log(error)
    );
  }

  getInquiryStatus() {
    this.reservationService.getInquiryStatuses()
      .subscribe(
        (results: any[]) => {
          this.reservationStatuses = results
          console.log(this.reservationStatuses)
        },
        (error) => console.log(error)
    );
  }

  getInquiryTypes() {
    this.reservationService.getInquiryTypes()
      .subscribe(
        (results: any[]) => {
          this.reservationTypes = results
          console.log(this.reservationTypes)
        },
        (error) => console.log(error)
    );
  }

  addNewStatusCode() {
    this.reservationStatus.inquiry_status_name = this.reservationStatusesForm.controls['reservationStatusName'].value;
    this.reservationStatus.inquiry_status_description = this.reservationStatusesForm.controls['reservationStatusDescription'].value;

    this.reservationService.addReservationStatus(this.reservationStatus)
      .subscribe(response => {
      }, error => this.errorMessage = <any>error);

    this.resetReservationStatusModel();
    location.reload();
    //this.getInquiryStatus();
  }

  addNewReservationService() {
    this.reservationType.inquiry_type_name = this.reservationServicesForm.controls['reservationServiceName'].value;
    this.reservationType.inquiry_type_description = this.reservationServicesForm.controls['reservationServiceDescription'].value;

    this.reservationService.addReservationType(this.reservationType)
      .subscribe(response => {
      }, error => this.errorMessage = <any>error);

    this.resetReservationServicesModel();
    //this.getInquiryTypes();
    location.reload();
  }

  addNewContactTimes() {
    this.contactTime.contact_timeframe = this.contactTimesForm.controls['contactTimeName'].value;
    this.contactTime.contact_timeframe_description = this.contactTimesForm.controls['contactTimeDescription'].value;

    this.reservationService.addContactTime(this.contactTime)
      .subscribe(response => {
      }, error => this.errorMessage = <any>error);

    this.resetContactModel();
    //this.getContactTimes();
    location.reload();
  }

  deleteStatusCode(reservationsStatusId: number) {
    this.reservationService.deleteReservationStatus(reservationsStatusId)
      .then();
  }
  /*deleteStatusCode(reservationStatusId: number) {
    this.reservationService.deleteReservationStatus(reservationStatusId)
      .subscribe((res: any) => {},
      error => this.errorMessage = error);
    //location.reload();
  }*/

  deleteContactTime(contactTimeId: number) {
    this.reservationService.deleteContactTime(contactTimeId)
      .then();
  }

  deleteReservationService(serviceTypeId: number) {
    this.reservationService.deleteReservationType(serviceTypeId)
      .then();
  }
}
