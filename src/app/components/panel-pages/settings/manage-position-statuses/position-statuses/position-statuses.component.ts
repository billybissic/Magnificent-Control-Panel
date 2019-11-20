import { ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../../services/auth/auth.service';
// import { PositionStatusesDataSource } from './position-statuses-datasource';
import { EmploymentPositionStatus } from '../../../../../controllers/shared-static-data/employment-position-status.interface';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { ModalCommunicationService } from '../../../../../services/modal-communication-service/modal-communication.service';
import { ComponentCommunicationService } from '../../../../../services/component-communication-service/component-communication.service';
import { SharedStaticDataService } from '../../../../../services/shared-static-data/shared-static-data.service';

@Component({
  selector: 'app-position-statuses',
  templateUrl: './position-statuses.component.html',
  styleUrls: ['./position-statuses.component.scss'],
})
export class PositionStatusesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /** Icons */
  faPlus = faPlus;
  faTrash = faTrash;

  private errorMessage: string;
  private positionStatuses: EmploymentPositionStatus[] = [];

  // dataSource: PositionStatusesDataSource;

  constructor(public auth: AuthService,
              private sharedStaticDataService: SharedStaticDataService,
              private modalService: NgbModal,
              private modalCommunicationService: ModalCommunicationService,
              private changeDetectorRef: ChangeDetectorRef,
              private componentCommunicationService: ComponentCommunicationService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['positionStatusName', 'positionStatusDescription'];
  dataSource: any;

  ngOnInit() {
    // this.dataSource = new PositionStatusesDataSource(this.paginator, this.sort);
    if (this.auth.isAuthenticated()) {
      /** Fetch Data */
      this.getPositionStatuses();
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPositionStatuses() {
    this.sharedStaticDataService.getAllEmploymentPositionStatuses()
      .subscribe((positionStatusList: EmploymentPositionStatus[]) => {
          this.positionStatuses = positionStatusList;
          console.log(positionStatusList);
          // this.changeDetectorRef.detectChanges();
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.dataSource = new MatTableDataSource(this.positionStatuses);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
  }
}

