import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AuthService} from '../../../../../services/auth/auth.service';

import { EmploymentArrangementType } from '../../../../../controllers/shared-static-data/employment-arrangement-type.interface';
import { SharedStaticDataService } from '../../../../../services/shared-static-data/shared-static-data.service';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-arrangement-types',
  templateUrl: './arrangement-types.component.html',
  styleUrls: ['./arrangement-types.component.scss'],
})
export class ArrangementTypesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faEdit = faEdit;
  faTrash = faTrash;

  private arrangementTypes: EmploymentArrangementType[] = [];

  constructor(public auth: AuthService,
              private sharedStaticDataService: SharedStaticDataService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['arrangementTypeName', 'arrangementTypeDesc'];

  /** Initialize DataSource */
  dataSource: any;

  ngOnInit() {

    if (this.auth.isAuthenticated()) {
      /** Fetch Data */
      this.getAllArrangementTypes();
    }
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Data Subscription Function */
  getAllArrangementTypes() {
    this.sharedStaticDataService.getAllEmploymentArrangementTypes()
      .subscribe((arrangementTypeList: EmploymentArrangementType[]) => {
        this.arrangementTypes = arrangementTypeList;
        console.log(arrangementTypeList);
      }, (error) => {
        console.log(error);
      },
        () => {
          this.dataSource = new MatTableDataSource(this.arrangementTypes);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
  }

  editRecord(id: number) {

  }

  deleteRecord(id: number) {

  }
}
