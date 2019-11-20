import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from './../../../environments/environment';

import { EmploymentPositionType } from '../../controllers/shared-static-data/employment-position-type.interface';
import { EmploymentPositionStatus } from '../../controllers/shared-static-data/employment-position-status.interface';
import { EmploymentArrangementType } from '../../controllers/shared-static-data/employment-arrangement-type.interface';
import { EmploymentApplicationType } from '../../controllers/shared-static-data/employment-application-type.interface';
import { VolunteerPositionType } from '../../controllers/shared-static-data/volunteer-position-type.interface';

@Injectable()
export class SharedStaticDataService {

  constructor(private http:Http) { }

  serverUrl = environment.staticSharedDataService;

  getAllEmploymentPositionTypes(): Observable<EmploymentPositionType[]> {
    let url = this.serverUrl + 'getPositionTypes';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  addNewEmploymentPositionType(employmentPositionType: EmploymentApplicationType): Observable<any> {
    let url = this.serverUrl + 'savePositionType';
    console.log(employmentPositionType);
    return this.http.post(url, employmentPositionType)
      .map(SharedStaticDataService.extractData)
      .catch(SharedStaticDataService.handleErrorObservable);
  }

  deleteEmploymentPositionType(id: number): Observable<any> {
    let url = `${this.serverUrl}deletePositionType/${id}`;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getAllEmploymentPositionStatuses(): Observable<EmploymentPositionStatus[]> {
    let url = this.serverUrl + 'getPositionStatuses';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  addNewEmploymentPositionStatus(employmentPositionStatus: EmploymentPositionStatus): Observable<any> {
    let url = this.serverUrl + 'savePositionStatus';
    console.log(employmentPositionStatus);
    return this.http.post(url, employmentPositionStatus)
      .map(SharedStaticDataService.extractData)
      .catch(SharedStaticDataService.handleErrorObservable);
  }

  deleteEmpoymentPositionStatus(id: number): Observable<any> {
    let url = `${this.serverUrl}deletePositionStatus/${id}`;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getAllEmploymentArrangementTypes(): Observable<EmploymentArrangementType[]> {
    let url = this.serverUrl + 'getArrangementTypes';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  addNewEmploymentArrangementType(employmentArrangementType: EmploymentArrangementType): Observable<any> {
    let url = this.serverUrl + 'saveArrangementType';
    console.log(employmentArrangementType);
    return this.http.post(url, employmentArrangementType)
      .map(SharedStaticDataService.extractData)
      .catch(SharedStaticDataService.handleErrorObservable);
  }

  deleteEmploymentArrangementType(id: number): Observable<any> {
    let url = `${this.serverUrl}deleteArrangementType/${id}`;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getAllEmploymentApplicationTypes(): Observable<EmploymentApplicationType[]> {
    let url = this.serverUrl + 'getApplicationTypes';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  addNewEmploymentApplicationType(employmentApplicationType: EmploymentApplicationType): Observable<any> {
    let url = this.serverUrl + 'saveApplicationType';
    console.log(employmentApplicationType);
    return this.http.post(url, employmentApplicationType)
      .map(SharedStaticDataService.extractData)
      .catch(SharedStaticDataService.handleErrorObservable);
  }

  deleteEmploymentApplicationType(id: number): Observable<any> {
    let url = `${this.serverUrl}deleteApplicationType/${id}`;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getAllVolunteerPositionTypes(): Observable<VolunteerPositionType[]> {
    let url = this.serverUrl + 'getVolunteerPositions';
    console.log(url);
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  addNewVolunteerPositionType(volunteerPositionType: VolunteerPositionType): Observable<any> {
    let url = this.serverUrl + 'saveVolunteerPosition';
    console.log(volunteerPositionType);
    return this.http.post(url, volunteerPositionType)
      .map(SharedStaticDataService.extractData)
      .catch(SharedStaticDataService.handleErrorObservable);
  }

  deleteVolunteerPositionType(id: number): Observable<any> {
    let url = `${this.serverUrl}deleteVolunteerPosition/${id}`;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  static extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || {};
  }

  static handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
