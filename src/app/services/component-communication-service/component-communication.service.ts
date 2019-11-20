import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface ServiceCallRequest {
  serviceToCall: string;
  serviceCallArguments: Argument[];
}

export interface Argument {
  argument: any;
}

@Injectable()
export class ComponentCommunicationService {

  private messageSource = new BehaviorSubject<string>( "default message");
  currentmessage = this.messageSource.asObservable();

  private serviceRequestSource = new BehaviorSubject<ServiceCallRequest>(null);
  serviceRequest = this.serviceRequestSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeRequest(request: ServiceCallRequest) {
    this.serviceRequestSource.next(request);
  }
}
