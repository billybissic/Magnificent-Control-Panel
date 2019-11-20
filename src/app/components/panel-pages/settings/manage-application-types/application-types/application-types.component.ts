import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ApplicationTypesDataSource } from './application-types-datasource';

import { EmploymentApplicationType } from '../../../../../controllers/shared-static-data/employment-application-type.interface';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../../../services/auth/auth.service';
import {SharedStaticDataService} from '../../../../../services/shared-static-data/shared-static-data.service';

@Component({
  selector: 'app-application-types',
  templateUrl: './application-types.component.html',
  styleUrls: ['./application-types.component.scss'],
})
export class ApplicationTypesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /** Icons */
  faPlus = faPlus;
  faTrash = faTrash;

  private applicationTypes: EmploymentApplicationType[] = [];

  //dataSource: ApplicationTypesDataSource;

  constructor(public auth: AuthService,
              private sharedStaticDataService: SharedStaticDataService) {}
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['applicationTypeName', 'applicationTypeDescription'];
  dataSource: any;

  ngOnInit() {
    // this.dataSource = new ApplicationTypesDataSource(this.paginator, this.sort);
    if (this.auth.isAuthenticated()) {
      /** Fetch Data */
      this.getAllApplicationTypes();
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllApplicationTypes() {
    this.sharedStaticDataService.getAllEmploymentApplicationTypes()
      .subscribe((applicationTypeList: EmploymentApplicationType[]) => {
        this.applicationTypes = applicationTypeList;
        console.log(applicationTypeList);
      },
        (error) => {
        console.log(error);
        },
        () => {
          this.dataSource = new MatTableDataSource(this.applicationTypes);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
  }
}
