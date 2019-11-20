import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../../../services/auth/auth.service';

import { ModalDeleteConfirmationComponent } from '../../../../control-panel-modals/modal-delete-confirmation/modal-delete-confirmation.component';
import { ModalCommunicationService } from '../../../../services/modal-communication-service/modal-communication.service';

import { Subscriber } from '../../../../controllers/subscriber/subscriber';
import { SubscriberService } from '../../../../services/subscriber-service/subscriber-service.service';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mailinglist-table',
  templateUrl: './mailinglist-table.component.html',
  styleUrls: ['./mailinglist-table.component.scss'],
})
export class MailinglistTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faEdit = faEdit;
  faTrash = faTrash;

  private subscribers: Subscriber[] = [];
  private errorMessage: any;
  private message: string;
  private modalSubscription: Subscription;

  constructor(public auth: AuthService,
              private subscriberService: SubscriberService,
              private changeDetectorRef: ChangeDetectorRef,
              private modalService: NgbModal,
              private modalCommunicationService: ModalCommunicationService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['subscriberId', 'firstName', 'subscriberEmail', 'birthDay', 'actions']; //, 'birth_day'];

  /** Initialize DataSource */
  dataSource = new MatTableDataSource();

  ngOnInit() {
    /** Fetch Data */
    this.getAllSubscribers();
    //this.subscribeToModalCommService();
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Data Subscription Function */
  getAllSubscribers() {
    this.subscriberService.getAllSubscribers()
      .subscribe((subscriberList: Subscriber[]) => {
        this.subscribers = subscriberList;
        console.log(this.subscribers);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      },
        () => {
        this.dataSource = new MatTableDataSource(this.subscribers);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        });
  }

  subscribeToModalCommService() {
    console.log("inside subscribe function");
    this.modalCommunicationService.currentMessage
      .subscribe((message: string) => {
        this.message = message
        console.log("inside next of subscription");
        console.log(this.message);
      }, (err) => {
        console.log(err);
      },
        () => {
          console.log("inside complete of subscription");
          console.log(this.message);
        });
  }

  editRecord() {

  }

  deleteConfirmation(subscriber: Subscriber) {

    console.log(subscriber.subscriberEmail);

    const modalRef = this.modalService.open(ModalDeleteConfirmationComponent, {size: 'sm'})
    modalRef.componentInstance.itemToDelete = subscriber.subscriberEmail;

    this.modalSubscription = this.modalCommunicationService.currentMessage
      .subscribe((message: string) => {
        this.message = message;
        console.log(this.message);

        if ( this.message === "Yes")
        {
          this.message = '';
          this.deleteRecord(subscriber);
          this.modalSubscription.unsubscribe();
        }

        if (this.message === "No")
        {
          this.message = '';
          this.modalSubscription.unsubscribe();
        }
      });
  }

  deleteRecord(subscriber: Subscriber) {
    this.subscriberService.deleteSubscriber(subscriber.subscriberId)
      .subscribe( response => {
        this.getAllSubscribers();
      }, error => this.errorMessage = <any>error);
  }
}
