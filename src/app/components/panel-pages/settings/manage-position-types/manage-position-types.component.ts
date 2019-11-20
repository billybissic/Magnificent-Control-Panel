import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-manage-position-types',
  templateUrl: './manage-position-types.component.html',
  styleUrls: ['./manage-position-types.component.scss']
})
export class ManagePositionTypesComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
