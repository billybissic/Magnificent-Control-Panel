import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { VolunteerPositionDataSource } from './volunteer-position-datasource';
import { AuthService } from '../../../../../services/auth/auth.service';
import { VolunteerPositionType } from '../../../../../controllers/shared-static-data/volunteer-position-type.interface';
import { SharedStaticDataService } from '../../../../../services/shared-static-data/shared-static-data.service';


import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-volunteer-position',
  templateUrl: './volunteer-position.component.html',
  styleUrls: ['./volunteer-position.component.scss'],
})
export class VolunteerPositionComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /** Icons */
  faPlus = faPlus;
  faTrash = faTrash;

  private volunteerPositionTypes: VolunteerPositionType[] = [];
  // dataSource: VolunteerPositionDataSource;

  constructor(public auth: AuthService,
              private sharedStaticDataService: SharedStaticDataService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['volunteerPositionTypeName', 'volunteerPositionTypeDescription'];
  dataSource: any;

  ngOnInit() {
    // this.dataSource = new VolunteerPositionDataSource(this.paginator, this.sort);
    if (this.auth.isAuthenticated()) {
      this.getVolunteerPositionTypes();
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getVolunteerPositionTypes() {
    this.sharedStaticDataService.getAllVolunteerPositionTypes()
      .subscribe((volunteerPositionTypeList: VolunteerPositionType[]) => {
        this.volunteerPositionTypes = volunteerPositionTypeList;
        console.log(volunteerPositionTypeList);
      },
        (error) => {
        console.log(error);
        },
        () => {
        this.dataSource = new MatTableDataSource(this.volunteerPositionTypes);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        });
  }
}
