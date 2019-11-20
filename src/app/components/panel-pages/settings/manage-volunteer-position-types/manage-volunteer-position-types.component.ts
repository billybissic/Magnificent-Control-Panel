import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-manage-volunteer-position-types',
  templateUrl: './manage-volunteer-position-types.component.html',
  styleUrls: ['./manage-volunteer-position-types.component.scss']
})
export class ManageVolunteerPositionTypesComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
