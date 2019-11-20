import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import {MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { faFolderMinus } from '@fortawesome/free-solid-svg-icons';

import { SubscriberGroup } from './../../../controllers/subscriber/subscriber-group';
import { SubscriberMember } from './../../../controllers/subscriber/subscriber-member';
import { SubscriberService } from './../../../services/subscriber-service/subscriber-service.service';

import { ModalDeleteConfirmationComponent } from '../../../control-panel-modals/modal-delete-confirmation/modal-delete-confirmation.component';
import { ModalCommunicationService } from '../../../services/modal-communication-service/modal-communication.service';

@Component({
  selector: 'app-subscriber-groups',
  templateUrl: './subscriber-groups.component.html',
  styleUrls: ['./subscriber-groups.component.scss'],
  providers: [FormBuilder]
})

export class SubscriberGroupsComponent implements OnInit {
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;

  /** Icons */
  faPlus = faPlus;
  //faFolder = faFolder;
  faTrash = faTrash;
  //faFolderPlus = faFolderPlus;
  //faFolderMinus = faFolderMinus;

  private errorMessage: string;
  /*private message: string;
  private modalSubscription: Subscription;*/

  /*unassignedSubscribersDisplayedColumns: string[] = [];
  subscriberGroupsDisplayedColumns: string[] = ['subscriber_group_id', 'subscriber_group_name', 'subscriber_group_description', 'actions'];
  subscriberGroupMembersDisplayedColumns: string[] = [];
  */

  /** Initialize Data Sources */
  //unassignedSubscribersDataSource: any;
  //subscriberGroupDataSource: any;
  //subscriberGroupMembersDataSource: any;

  subscriberGroup: SubscriberGroup = new SubscriberGroup;
 // subscriberGroupMember: SubscriberMember = new SubscriberMember();
  //subscriberGroups: SubscriberGroup[];
  //subscriberGroupMembers: any[];
  //unassignedSubscribers: any[];

  subscriberGroupForm: FormGroup;

  constructor(public auth: AuthService,
              private subscriberService: SubscriberService,
              private changeDetectorRef: ChangeDetectorRef,
              private modalService: NgbModal,
              private modalCommunicationService: ModalCommunicationService) { }

  ngOnInit() {

    this.subscriberGroupForm = new FormGroup({
      subscriberGroupName: new FormControl('', Validators.required),
      subscriberGroupDescription: new FormControl('', Validators.required)
    });

    /** Retrieve Data */
    //this.getSubscriberGroups();
    //this.getAllUnassignedSubscribers();
  }

  /** Filter Actions */
  /*applySubscriberGroupFilter(filterValue: string) {
    this.subscriberGroupDataSource.filter = filterValue.trim().toLowerCase();
  }

  applyUnassignedSubscribersFilter(filterValue: string) {
    this.unassignedSubscribersDataSource.filter = filterValue.trim().toLowerCase();
  }
  applySubscriberGroupMemberFilter(filterValue: string) {
    this.subscriberGroupMembersDataSource.filter = filterValue.trim().toLowerCase();
  }*/

  /*etAllUnassignedSubscribers() {
    this.subscriberService.getAllUnassignedSubscribers()
      .subscribe(
        (results: any[]) => {
          this.unassignedSubscribers = results;
          this.changeDetectorRef.detectChanges();
          console.log(this.unassignedSubscribers);
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.unassignedSubscribersDataSource = new MatTableDataSource(this.unassignedSubscribers);
          this.unassignedSubscribersDataSource.sort = this.sort;
          this.unassignedSubscribersDataSource.paginator = this.paginator;
        }
      )
  }*/
  /*getSubscriberGroups() {
    this.subscriberService.getSubscriberGroups()
      .subscribe((subscriberGroupList: SubscriberGroup[]) => {
          this.subscriberGroups = subscriberGroupList;
          this.changeDetectorRef.detectChanges();
          console.log(this.subscriberGroups);
        },
        (error) => {
          console.log(error);
        },
      () => {
          this.subscriberGroupDataSource = new MatTableDataSource(this.subscriberGroups);
          this.subscriberGroupDataSource.sort = this.sort;
          this.subscriberGroupDataSource.paginator = this.paginator;
      });
  }*/


  /*getAllSubscriberGroupMembers(groupId: number) {
    this.subscriberService.getAllSubscriberGroupMembers(groupId)
      .subscribe(
        (results: any[]) => {
          this.subscriberGroupMembers = results
          console.log(this.subscriberGroupMembers)
        },
        (error) => {
          console.log(error)
        },
        () => {
          this.subscriberGroupMembersDataSource = new MatTableDataSource(this.subscriberGroupMembers);
          this.subscriberGroupMembersDataSource.sort = this.sort;
          this.subscriberGroupMembersDataSource.paginator = this.paginator;
        }
      );
  }*/
  resetSubscriberGroupModel() {
    this.subscriberGroupForm.setValue({subscriberGroupName: '',
                                       subscriberGroupDescription: ''});
      this.subscriberGroupForm.markAsUntouched();
      this.subscriberGroupForm.markAsPristine();
  }

  addNewSubscriberGroup() {
    this.subscriberGroup.subscriber_group_name = this.subscriberGroupForm.controls['subscriberGroupName'].value;
    this.subscriberGroup.subscriber_group_description = this.subscriberGroupForm.controls['subscriberGroupDescription'].value;

    this.subscriberService.createSubscriberGroup(this.subscriberGroup)
      .subscribe(response => {
      }, error => this.errorMessage = <any>error);

      this.resetSubscriberGroupModel();
      location.reload();
  }

  /*assignSubscriberToGroup(group_id: number, subscriber_id: number) {
    this.subscriberGroupMember.subscriber_group_id = group_id;
    this.subscriberGroupMember.subscriber_id = subscriber_id;

    this.subscriberService.assignSubscriberToGroup(this.subscriberGroupMember)
      .subscribe(response => {
      }, error => this.errorMessage = <any>error);

      location.reload();
  }*/

  /*deleteGroup(groupId: number) {

  }*/
}
