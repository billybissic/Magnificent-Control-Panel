import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-entertainers-time-and-attendance',
  templateUrl: './entertainers-time-and-attendance.component.html',
  styleUrls: ['./entertainers-time-and-attendance.component.scss']
})
export class EntertainersTimeAndAttendanceComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
