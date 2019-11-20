import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../services/auth/auth.service';
//import { SubscribergroupsTableDataSource } from './subscribergroups-table-datasource';
import { Subscription } from 'rxjs/Subscription';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { Subscriber } from './../../../../controllers/subscriber/subscriber';
import { SubscriberGroup } from './../../../../controllers/subscriber/subscriber-group';
import { SubscriberService } from './../../../../services/subscriber-service/subscriber-service.service';

import { ComponentCommunicationService, ServiceCallRequest, Argument } from '../../../../services/component-communication-service/component-communication.service';
import { ModalDeleteConfirmationComponent } from '../../../../control-panel-modals/modal-delete-confirmation/modal-delete-confirmation.component';
import { ModalCommunicationService } from '../../../../services/modal-communication-service/modal-communication.service';

@Component({
  selector: 'app-subscribergroups-table',
  templateUrl: './subscribergroups-table.component.html',
  styleUrls: ['./subscribergroups-table.component.scss'],
})
export class SubscribergroupsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /** Icons */
  faTrash = faTrash;

  subscribers: Subscriber[];
  subscriberGroups: SubscriberGroup[];
  private errorMessage: string;
  private message: string;
  private modalSubscription: Subscription;
  private serviceRequest: ServiceCallRequest;
  private argument: Argument;
  private arguments: Argument[];

  constructor(public auth: AuthService,
              private subscriberService: SubscriberService,
              private changeDetectorRef: ChangeDetectorRef,
              private modalService: NgbModal,
              private modalCommunicationService: ModalCommunicationService,
              private componentCommunicationService: ComponentCommunicationService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['subscriber_group_id', 'subscriber_group_name', 'subscriber_group_description', 'actions'];

  dataSource: any;

  ngOnInit() {

    this.componentCommunicationService.serviceRequest
      .subscribe( serviceRequest => this.serviceRequest = serviceRequest);

    if (this.auth.isAuthenticated()) {
      this.getSubscriberGroups();
      this.retrieveUnassignedSubscribers();
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSubscriberGroups() {
    this.subscriberService.getSubscriberGroups()
      .subscribe( (subscriberGroupList: SubscriberGroup[]) => {
        this.subscriberGroups = subscriberGroupList;
        console.log(subscriberGroupList);
        this.changeDetectorRef.detectChanges();
      },
        (error) => {
        console.log(error);
        },
        () => {
            this.dataSource = new MatTableDataSource(this.subscriberGroups);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
  }

  retrieveGroupMembers(group: SubscriberGroup) {
    console.log('getting group members for: ' + group.subscriber_group_name);
    this.arguments = [{argument: group.subscriber_group_id }];
    this.serviceRequest = {
      serviceToCall: 'getSubscriberGroupMembers',
      serviceCallArguments: this.arguments
    };
    console.log(this.serviceRequest);
    this.componentCommunicationService.changeRequest(this.serviceRequest);
  }

  deleteSubscriberGroup(group_id: number) {
    console.log('checking to see if group has members');
    this.subscriberService.getAllSubscriberGroupMembers(group_id)
      .subscribe((subscriberList: Subscriber[]) => {
        this.subscribers = subscriberList;
        console.log(this.subscribers);},
        (error) => { console.log(error)},
        () => {
            /** check to see if it's null and
            perform the delete if true */
        if (this.subscribers === null) {
          this.subscriberService.deleteSubscriberGroup(group_id)
            .subscribe(( res: any) => {},
              (error) => { console.log(error);});
        }
        /** if false send a message through a modal,
         * instructing the user to remove the members to
         * delete group. */
        else {
          /** sending modal message */
        }
        });
  }

  retrieveUnassignedSubscribers() {
    console.log('getting unassigned subscribers');
  }
}
