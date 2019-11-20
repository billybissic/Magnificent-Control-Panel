import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ContactTime } from './../../controllers/reservation/contact-time';
import { ReservationStatus } from './../../controllers/reservation/reservation-status';
import { ReservationType } from './../../controllers/reservation/reservation-type';

import { Reservation} from '../../controllers/reservation/reservation';

@Injectable()
export class ReservationService {


  constructor(private http:Http) { }

  serverUrl = environment.reservationService;

  getReservations(): Observable<Reservation[]> {
    let url = this.serverUrl + "getInquiries";
    return this.http.get(url)
        .map((response: any) => response.json())
        .catch(error => Observable.throw(error.json()));
  }

  getAllReservations() {
    let url = this.serverUrl + "getInquiries";
    return this.http.get(url)
      .map(
          (response: any) => {
            const data = response.json();
            return data;
          }
      );
  }

  getContactTimes() {
    let url = this.serverUrl + "getContactTimes";
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getInquiryTypes() {
    let url = this.serverUrl + "getInquiryTypes";
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getInquiryStatuses() {
    let url = this.serverUrl + "getInquiryStatuses";
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getReservationsCount() {
    let url = this.serverUrl + "getReservationsCount";
    return this.http.get(url)
      .map(
          (response: any) => {
            const data = response.json();
            return data;
          }
      )
  }

  addContactTime(contactTime: ContactTime): Observable<any>{
    let url = this.serverUrl + "createContactTime";
    console.log(contactTime);
    return this.http.post(url, contactTime)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  addReservationType(reservationType: ReservationType): Observable<any>{
    let url = this.serverUrl + "createInquiryType";
    console.log(reservationType);
    return this.http.post(url, reservationType)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  addReservationStatus(reservationStatus: ReservationStatus): Observable<any>{
    let url = this.serverUrl + "createInquiryStatus";
    console.log(reservationStatus);
    return this.http.post(url, reservationStatus)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  deleteContactTime(contactTimeId: number): Promise<void> {
    const url = `${this.serverUrl}deleteContactTime/${contactTimeId}`;

    console.log(url);
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise)
  }

  deleteReservation(id: number): Promise<void> {
    const url = `${this.serverUrl}deleteInquiry/${id}`;

    console.log(url);
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise)
  }

  /*deleteContactTime(contactTimeId: number): Observable<any>{
    let url = this.serverUrl + "deleteContactTime";
    console.log(contactTimeId);
    return this.http.post(url, {
      params: {
        contact_time_id: contactTimeId
      }
    }).map(this.extractData)
      .catch(this.handleErrorObservable);
  }*/

  deleteReservationType(reservationTypeId: number): Promise<void> {
    const url = `${this.serverUrl}deleteInquiryType/${reservationTypeId}`;

    console.log(url);

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise)
  }
  /*deleteReservationType(reservationTypeId: number): Observable<any>{
    let url = this.serverUrl + "deleteInquiryType";
    console.log(reservationTypeId);
    return this.http.post(url, {
      params: {
        inquiry_type_id: reservationTypeId
      }
    }).map(this.extractData)
    .catch(this.handleErrorObservable);
  }*/

  deleteReservationStatus(reservationStatusId: number): Promise<void> {
    const url = `${this.serverUrl}deleteInquiryStatus/${reservationStatusId}`;

    console.log(url);

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise)
  }
  /*deleteReservationStatus(reservationStatusId: number): Observable<any>{
    const body = '?inquiry_status_id=' + reservationStatusId;
    let url = this.serverUrl + "deleteInquiryStatus";

    console.log(url);
    console.log(body);

    return this.http.post(url, body)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }*/

  extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || {};
  }

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  handleErrorPromise ( error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error)
  }
}
