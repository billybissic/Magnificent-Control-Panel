import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-bartenders-time-and-attendance',
  templateUrl: './bartenders-time-and-attendance.component.html',
  styleUrls: ['./bartenders-time-and-attendance.component.scss']
})
export class BartendersTimeAndAttendanceComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
