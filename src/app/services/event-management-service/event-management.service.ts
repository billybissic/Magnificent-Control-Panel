import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { EventStatus } from './../../controllers/events/event-status';
import { EventType } from './../../controllers/events/event-type';
import { EventFrequency } from './../../controllers/events/event-frequency';
import { CalendarEvent } from './../../controllers/events/calendar-event.interface';
import { Router } from '@angular/router';

@Injectable()

export class EventManagementService {

  constructor(private http:Http,
              private router:Router) { }

  mongoUrl = environment.calendarEventService;
  mysqlUrl = environment.eventManagementService;

  getEvents() {
    let url = this.mongoUrl + "getCalendarEvents";
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getEventByPartialDate(partialDate: string) {
    let url = this.mongoUrl + "getEventsByPartialDate?date=" + partialDate;
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getEventStatuses() {
    let url = this.mysqlUrl + "getEventStatuses";
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getEventTypes() {
    let url = this.mysqlUrl + "getEventTypes";
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getEventFrequency() {
    let url = this.mysqlUrl + "getEventFrequency";
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  addEvent(calendarEvent: CalendarEvent): Observable<any>{
    let url = this.mongoUrl + "addCalendarEvent";
    console.log(calendarEvent);
    return this.http.post(url, calendarEvent)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  addFlyer(image: FormData): Observable<any>{
    let url = this.mongoUrl + "uploadFlyer";
    console.log(image);
    return this.http.post(url, image)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  addEventStatus(eventStatus: EventStatus): Observable<any>{
    let url = this.mysqlUrl + "addEventStatus";
    console.log(eventStatus);
    return this.http.post(url, eventStatus)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  addEventType(eventType: EventType): Observable<any> {
    let url = this.mysqlUrl + "addEventType";
    console.log(eventType);
    return this.http.post(url, eventType)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  addEventFrequency(eventFrequency: EventFrequency): Observable<any> {
    let url = this.mysqlUrl + "addEventFrequency";
    console.log(eventFrequency);
    return this.http.post(url, eventFrequency)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  deleteEvent(eventId: string) {
    const url = `${this.mongoUrl}deleteCalendarEvent/${eventId}`;

    console.log(url);

    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  deleteEventFlyer(eventFlyerName: string) {
    let url = this.mongoUrl + 'removeEventFlyer';
    console.log(eventFlyerName);
    return this.http.post(url, eventFlyerName)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  deleteEventStatus(eventStatusId: number) {
    const url = `${this.mysqlUrl}deleteEventStatus/${eventStatusId}`;

    console.log(url);

    return this.http.delete(url)
      .toPromise()
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  deleteEventType(eventTypeId: number) {
    const url = `${this.mysqlUrl}deleteEventType/${eventTypeId}`;

    console.log(url);

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise)
  }

  deleteEventFrequency(eventFrequencyId: number) {
    const url = `${this.mysqlUrl}deleteEventFrequency/${eventFrequencyId}`;

    console.log(url);

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise)
  }

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
