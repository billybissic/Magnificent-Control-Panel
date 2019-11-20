import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {MatPaginator, MatSort, MatTab, MatTableDataSource} from '@angular/material';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../../../services/auth/auth.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subscriber } from '../../../../controllers/subscriber/subscriber';
import { SubscriberService } from '../../../../services/subscriber-service/subscriber-service.service';
import { ModalDeleteConfirmationComponent } from '../../../../control-panel-modals/modal-delete-confirmation/modal-delete-confirmation.component';
import { ComponentCommunicationService, ServiceCallRequest} from '../../../../services/component-communication-service/component-communication.service';
import { ModalCommunicationService } from '../../../../services/modal-communication-service/modal-communication.service';

@Component({
  selector: 'app-assignedsubscribers-table',
  templateUrl: './assignedsubscribers-table.component.html',
  styleUrls: ['./assignedsubscribers-table.component.scss'],
})
export class AssignedsubscribersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /** Icons */
  faTrash = faTrash;

  private subscribers: Subscriber[] = [];
  private errorMessage: string;
  private message: string;
  private modalSubscription: Subscription;
  private serviceRequest: ServiceCallRequest;

  constructor(public auth: AuthService,
              private subscriberService: SubscriberService,
              private changeDetectorRef: ChangeDetectorRef,
              private modalService: NgbModal,
              private modalCommunicationService: ModalCommunicationService,
              private componentCommunicationService: ComponentCommunicationService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'subscriberEmail'];

  /** Initialize DataSource */
  dataSource = new MatTableDataSource();

  ngOnInit() {

    if ( this.auth.isAuthenticated() ) {
      this.componentCommunicationService.serviceRequest
        .subscribe(serviceRequest => {
            this.changeDetectorRef.detectChanges();
            this.serviceRequest = serviceRequest;
            console.log(this.serviceRequest);

            if (this.serviceRequest != null) {
              if (this.serviceRequest.serviceToCall === 'getSubscriberGroupMembers') {
                let arg = this.serviceRequest.serviceCallArguments[0].argument;
                console.log(arg);
                this.getSubscribersOfGroup(arg);
              }

            }
          },
          (error) => {
            console.log(error);
          }, () => {
            console.log(this.serviceRequest);
          });
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSubscribersOfGroup(group: number) {

    this.subscriberService.getAllSubscriberGroupMembers(group)
      .subscribe(( subscriberList: Subscriber[]) => {
        this.subscribers = subscriberList;
        console.log(this.subscribers);
        this.changeDetectorRef.detectChanges();
      },
        (error) => {
        //console.log(error);
        },
        () => {
        this.dataSource = new MatTableDataSource(this.subscribers);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        });
  }
}
