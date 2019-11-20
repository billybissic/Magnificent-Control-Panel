import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import {MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subscriber } from './../../../../controllers/subscriber/subscriber';
import { SubscriberService } from './../../../../services/subscriber-service/subscriber-service.service';

import { ModalDeleteConfirmationComponent } from '../../../../control-panel-modals/modal-delete-confirmation/modal-delete-confirmation.component';
import { ModalCommunicationService } from '../../../../services/modal-communication-service/modal-communication.service';
import { ComponentCommunicationService } from '../../../../services/component-communication-service/component-communication.service';

@Component({
  selector: 'app-unassignedsubscribers-table',
  templateUrl: './unassignedsubscribers-table.component.html',
  styleUrls: ['./unassignedsubscribers-table.component.scss'],
})
export class UnassignedsubscribersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /** Icons */
  faTrash = faTrash;

  public selected: boolean;
  public viewMode: string = 'Unassigned';
  private errorMessage: string;
  private message: string;
  private modalSubscription: Subscription;
  private subscribers: Subscriber[] = [];

  constructor(private subscriberService: SubscriberService,
              private changeDetectorRef: ChangeDetectorRef,
              private modalService: NgbModal,
              private modalCommunicationService: ModalCommunicationService,
              private componentCommunicationService: ComponentCommunicationService) { }

  dataSource: any;
  selection = new SelectionModel<Subscriber>(true, []);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'subscriberId', 'firstName', 'lastName', 'birthDay', 'subscriberEmail'];

  ngOnInit() {
    if (this.viewMode === 'Unassigned') {
      this.getUnassignedSubscribers();
    }

    if (this.viewMode === 'All') {
      this.getAllSubscribers();
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUnassignedSubscribers() {
    this.subscriberService.getAllUnassignedSubscribers()
      .subscribe( (subscriberList: Subscriber[]) => {
        this.subscribers = subscriberList;
        console.log(this.subscribers);
        this.changeDetectorRef.detectChanges();

      }, (error) => {
        console.log(error);
      }, () => {
        this.dataSource = new MatTableDataSource(this.subscribers);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
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


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  switchViewModes(selectedValue: any) {

    /*if (this.selected === 'All') {

    }*/

    /*if (this.selected === 'Unassigned') {

    }*/

    console.log('inside of switch view');

  }
}
