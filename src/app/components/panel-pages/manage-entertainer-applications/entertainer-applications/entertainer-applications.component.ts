import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EntertainerApplicationsDataSource } from './entertainer-applications-datasource';

@Component({
  selector: 'app-entertainer-applications',
  templateUrl: './entertainer-applications.component.html',
  styleUrls: ['./entertainer-applications.component.scss'],
})
export class EntertainerApplicationsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EntertainerApplicationsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new EntertainerApplicationsDataSource(this.paginator, this.sort);
  }
}
