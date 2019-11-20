import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from './../../../environments/environment';

import { OpenPositionInterface } from '../../controllers/employee/open-position.interface';
import { StaffMember } from '../../controllers/employee/staff-member.interface';
import { EntertainerAudition } from '../../controllers/employee/entertainer-audition.interface';
import { EntertainerApplication } from '../../controllers/employee/entertainer-application.interface';
import { BartenderApplication } from '../../controllers/employee/bartender-application.interface';
import {SharedStaticDataService} from '../shared-static-data/shared-static-data.service';

@Injectable()
export class EmployeeManagementService {

  constructor(private http:Http) { }

  serverUrl = environment.employeeManagementService;

  getAllPositions(): Observable<OpenPositionInterface[]> {
    let url = this.serverUrl + '';

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }


  addNewPosition(position: OpenPositionInterface): Observable<any> {
    let url = this.serverUrl + '';
    console.log(position);
    return this.http.post(url, position)
      .map(SharedStaticDataService.extractData)
      .catch(SharedStaticDataService.handleErrorObservable);
  }

  getPositionById(_id: string): Observable<OpenPositionInterface[]> {
    let url = ``;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  deletePosition(_id: string): Observable<any> {
    let url = ``;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getAllStaffMembers(): Observable<StaffMember[]> {
    let url = this.serverUrl + '';

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  addNewStaffMember(staffMember: StaffMember): Observable<any> {
    let url = this.serverUrl + '';
    console.log(staffMember);
    return this.http.post(url, staffMember)
      .map(SharedStaticDataService.extractData)
      .catch(SharedStaticDataService.handleErrorObservable);
  }

  getStaffMemberById(_id: string):  Observable<StaffMember[]> {
    let url = ``;

    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  deleteStaffMember(_id: string): Observable<any> {
    let url = ``;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getAllAuditions(): Observable<EntertainerAudition[]> {
    let url = this.serverUrl + '';

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  addNewAudition(audition: EntertainerAudition): Observable<any> {
    let url = this.serverUrl + '';
    console.log(audition);
    return this.http.post(url, audition)
      .map(SharedStaticDataService.extractData)
      .catch(SharedStaticDataService.handleErrorObservable);
  }

  getAuditionById(_id: string): Observable<EntertainerAudition[]> {
    let url = ``;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  deleteAudition(_id: string): Observable<any> {
    let url = ``;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getAllBarTenderApplications(): Observable<BartenderApplication[]> {
    let url = this.serverUrl + '';

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  submitNewBarTenderApplication(bartenderApplication: BartenderApplication): Observable<any> {
    let url = this.serverUrl + '';
    console.log(bartenderApplication);
    return this.http.post(url, bartenderApplication)
      .map(SharedStaticDataService.extractData)
      .catch(SharedStaticDataService.handleErrorObservable);
  }

  getBartenderApplicationID(_id: string): Observable<BartenderApplication[]> {
    let url = ``;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  deleteBartenderApplication(_id: string): Observable<any> {
    let url = ``;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getAllEntertainerApplications(): Observable<EntertainerApplication[]> {
    let url = this.serverUrl + '';

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  submitEntertainerApplication(entertainerApplication: EntertainerApplication): Observable<any> {
    let url = this.serverUrl + '';
    console.log(entertainerApplication);
    return this.http.post(url, entertainerApplication)
      .map(SharedStaticDataService.extractData)
      .catch(SharedStaticDataService.handleErrorObservable);
  }

  getEntertainerApplicationById(_id: string): Observable<EntertainerApplication[]> {
    let url = ``;
    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  deleteEntertainerApplication(_id: string): Observable<any> {
    let url = ``;
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
