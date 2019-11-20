import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth/auth.service';


import { ReservationService } from './../../../services/reservation-service/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  faCalendar = faCalendar;
  reservations: any[];

  /* NG Table Set Up */

  /* End NG Table Set Up */

  constructor(public auth: AuthService,
              private reservationService: ReservationService) {
  }

  ngOnInit(): void {};
}
