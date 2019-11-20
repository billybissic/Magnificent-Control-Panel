import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BartenderApplicationsDataSource } from './bartender-applications-datasource';
import { AuthService } from '../../../../services/auth/auth.service';
import { BartenderApplication } from '../../../../controllers/employee/bartender-application.interface';


import { faPlus,
         faTrash } from '@fortawesome/free-solid-svg-icons';
import {EmployeeManagementService} from '../../../../services/employee-management-service/employee-management.service';

@Component({
  selector: 'app-bartender-applications',
  templateUrl: './bartender-applications.component.html',
  styleUrls: ['./bartender-applications.component.scss'],
})
export class BartenderApplicationsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /** Icons */
  faPlus = faPlus;
  faTrash = faTrash;

  private bartenderApplications: BartenderApplication[] = [];

  // dataSource: BartenderApplicationsDataSource;

  constructor(public auth: AuthService,
              private employeeManagementService: EmployeeManagementService ) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'firstName', 'lastName'];
  dataSource: any;

  ngOnInit() {
    // this.dataSource = new BartenderApplicationsDataSource(this.paginator, this.sort);
    if (this.auth.isAuthenticated()) {
      this.getAllBartenderApplications();
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllBartenderApplications() {
    this.employeeManagementService.getAllBarTenderApplications()
      .subscribe((bartenderApplicationList: BartenderApplication[]) => {
          this.bartenderApplications = bartenderApplicationList;
          console.log(bartenderApplicationList);
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.dataSource = new MatTableDataSource(this.bartenderApplications);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
  }
}
