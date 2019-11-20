import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-manage-position-statuses',
  templateUrl: './manage-position-statuses.component.html',
  styleUrls: ['./manage-position-statuses.component.scss']
})
export class ManagePositionStatusesComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
