import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../../services/auth/auth.service';

import { EventManagementService } from './../../../../services/event-management-service/event-management.service';
import { EventType } from './../../../../controllers/events/event-type';
import { EventStatus } from './../../../../controllers/events/event-status';
import { EventFrequency } from './../../../../controllers/events/event-frequency';

@Component({
  selector: 'app-event-static-data',
  templateUrl: './event-static-data.component.html',
  styleUrls: ['./event-static-data.component.scss']
})
export class EventStaticDataComponent implements OnInit {

  color1: string = '#1847D1';
  color2: string = '#1976D2';
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  faPalette = faPalette;

  errorMessage: string;

  eventStatuses: any[];
  eventTypes: any[];
  eventFrequencies: any[];

  eventType: EventType = new EventType();

  eventTypesForm: FormGroup;
  eventStatusForm: FormGroup;
  eventFrequencyForm: FormGroup;

  constructor(public auth: AuthService,
              private eventManagementService: EventManagementService) { }

  ngOnInit() {
    this.eventTypesForm = new FormGroup({
      eventTypeName: new FormControl('', Validators.required),
      eventTypeDescription: new FormControl('', Validators.required),
      primaryColor: new FormControl(''),
      secondaryColor: new FormControl('')
    });

    this.eventStatusForm = new FormGroup({
      eventStatusName: new FormControl('', Validators.required),
      eventStatusDescription: new FormControl('', Validators.required)
    });

    this.eventFrequencyForm = new FormGroup({
      eventFrequencyName: new FormControl('', Validators.required),
      eventFrequencyDescription: new FormControl('', Validators.required)
    });

    if (this.auth.isAuthenticated()) {
      this.getEventStatuses();
      this.getEventTypes();
      this.getEventFrequencies();
    }
  }

  getEventStatuses() {
    this.eventManagementService.getEventStatuses()
    .subscribe(
      (results: any[]) => {
        this.eventStatuses = results
        console.log(this.eventStatuses)
      },
      (error) => console.log(error)
    );
  }

  getEventTypes() {
    this.eventManagementService.getEventTypes()
    .subscribe(
      (results: any[]) => {
        this.eventTypes = results
        console.log(this.eventTypes)
      },
      (error) => console.log(error)
    );
  }

  getEventFrequencies() {
    this.eventManagementService.getEventFrequency()
    .subscribe(
      (results: any[]) => {
        this.eventFrequencies = results
        console.log(this.eventFrequencies)
      },
      (error) => console.log(error)
    );
  }

  addNewEventType() {
    console.log("inside addNewEventType");
    this.eventType.event_type_name = this.eventTypesForm.controls['eventTypeName'].value;
    this.eventType.event_type_description = this.eventTypesForm.controls['eventTypeDescription'].value;
    this.eventType.primary_color = this.color1;
    this.eventType.secondary_color = this.color2;

    console.log(this.eventType);
  }

  addNewReservationService() {
    console.log("inside addNewReservationService");
  }

  addNewStatusCode() {
    console.log("inside addNewStatusCode");
  }
}
