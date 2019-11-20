import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AuthService } from '../../../../services/auth/auth.service';

import { Reservation } from '../../../../controllers/reservation/reservation';
import { ReservationService } from '../../../../services/reservation-service/reservation.service';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reservations-table',
  templateUrl: './reservations-table.component.html',
  styleUrls: ['./reservations-table.component.scss'],
})
export class ReservationsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faEdit = faEdit;
  faTrash = faTrash;

  private reservations: Reservation[] = [];

  constructor(public auth: AuthService,
              private reservationService: ReservationService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['first_name', 'day_phone_number', 'email_address', 'desired_date', 'desired_time', 'actions'];

  /** Initialize DataSource */
  dataSource: any;

  ngOnInit() {

    if (this.auth.isAuthenticated()) {
      /** Fetch Data */
      this.getAllReservations();
    }
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Data Subscription Function */
  getAllReservations() {
    this.reservationService.getReservations()
      .subscribe((reservationList: Reservation[]) => {
          this.reservations = reservationList;
        }, (err) => {
          console.log(err);
        },
        () => {
          this.dataSource = new MatTableDataSource(this.reservations);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
  }

  editRecord(id: number) {

  }

  deleteRecord(id: number) {
    /*this.reservationService.deleteReservation(id)
      .subscribe((results: any) => {
        console.log(results);
      }, (err) => {
        console.log(err);
      }, () => {
        this.getAllReservations();
      })*/
  }
}

