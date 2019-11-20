import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscriber } from '../../controllers/subscriber/subscriber';
import { SubscriberGroup } from './../../controllers/subscriber/subscriber-group';
import { SubscriberMember } from './../../controllers/subscriber/subscriber-member';
import { environment } from '../../../environments/environment'

@Injectable()
export class SubscriberService {

  //private subscriber: Subscriber;
  private subscribers: Subscriber[];
  constructor(private http:Http) { }

  serverUrl = environment.mailingListService;

  getAllSubscribers(): Observable<Subscriber[]> {
    let url = this.serverUrl + "seeAllSubscribers";
    return this.http.get(url)
        .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getSubscribersCount(): Observable<any> {
    let url = this.serverUrl + "getSubscribersCount";
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getSubscriberGroups() {
    let url = this.serverUrl + "getAllSubscriberGroups";
    return this.http.get(url)
      .map(
          (response: any) => {
            const data = response.json();
            return data;
          }
      );
  }

  getAllSubscriberGroupMembers(groupId: number): Observable<Subscriber[]> {
    const url = `${this.serverUrl}getAllSubscriberGroupMembers/${groupId}`;
    let members: Subscriber[] = [];

    return this.http.get(url)
      .map(function(res): Subscriber[] {
        /** get all results from service and assign it to var data */
        let data = res.json();
        let i: number = 0;

        /** make sure data is not null */
        if (data != null)
        {
          /** if data is not null parse the record into subscriber interface */
          for(i = 0;i < data.length; i++)
          {
            let record = data[i];
            members.push(new Subscriber(record[0], record[1], record[2], record[3], record[4]));
          }
          console.log(members);
        }
        return members;
      })
      .catch(error => Observable.throw(error.json()));
  }

  getAllUnassignedSubscribers(): Observable<Subscriber[]> {
    let url = this.serverUrl + "getUnAssignedSubscribers";
    let members: Subscriber[] = [];
    console.log(url);

    return this.http.get(url)
      .map(function(res): Subscriber[] {
        let data = res.json();
        console.log(data);
        let i: number = 0;

        if(data != null)
        {
          for(i = 0; i < data.length; i++)
          {
            let record = data[i];
            members.push(new Subscriber(record[0], record[1], record[2], record[3], record[4]));
          }
          console.log(members);
        }
        return members;
      })
      .catch(error => Observable.throw(error.json()));
  }

  createSubscriberGroup(subscriberGroup: SubscriberGroup): Observable<any> {
    let url = this.serverUrl + "createGroup";
    console.log(subscriberGroup);
    return this.http.post(url, subscriberGroup)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  assignSubscriberToGroup(subscriberMember: SubscriberMember): Observable<any> {
    let url = this.serverUrl + "assignSubscriberToGroup";
    console.log(subscriberMember);
    return this.http.post(url, subscriberMember)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  deleteSubscriber(_id: number): Observable<any> {
    const url = `${this.serverUrl}deleteSubscriber/${_id}`;

    console.log(url);
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  deleteSubscriberGroup(_id: number): Observable<any> {
    const url = `${this.serverUrl}deleteSubscriberGroup/${_id}`;

    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  deleteSubscriberGroupMember(_id: number): Observable<any> {
    const url = `${this.serverUrl}deleteSubscriberGroupMember/${_id}`;

    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
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
