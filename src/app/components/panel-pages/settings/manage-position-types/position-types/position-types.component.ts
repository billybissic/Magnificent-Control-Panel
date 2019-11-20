import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { PositionTypesDataSource } from './position-types-datasource';
import { AuthService } from '../../../../../services/auth/auth.service';

import { EmploymentPositionType } from '../../../../../controllers/shared-static-data/employment-position-type.interface';
import { SharedStaticDataService } from '../../../../../services/shared-static-data/shared-static-data.service';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-position-types',
  templateUrl: './position-types.component.html',
  styleUrls: ['./position-types.component.scss'],
})
export class PositionTypesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faEdit = faEdit;
  faTrash = faTrash;

  private positionTypes: EmploymentPositionType[] = [];

  constructor(public auth: AuthService,
              private sharedStaticDataService: SharedStaticDataService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['positionTypeName', 'positionTypeDescription'];

  dataSource: any;

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      /** Fetch Data*/
      this.getPositionTypes();
    }
  }

  getPositionTypes() {
    this.sharedStaticDataService.getAllEmploymentPositionTypes()
      .subscribe((positionTypeList: EmploymentPositionType[]) => {
        this.positionTypes = positionTypeList;
      }, (err) => {
        console.log(err);
      },
        () => {
        this.dataSource = new MatTableDataSource(this.positionTypes);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editRecord(id: number) {

  }

  deleteRecord(id: number) {

  }
}
