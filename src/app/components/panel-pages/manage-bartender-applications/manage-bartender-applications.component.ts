import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-manage-bartender-applications',
  templateUrl: './manage-bartender-applications.component.html',
  styleUrls: ['./manage-bartender-applications.component.scss']
})
export class ManageBartenderApplicationsComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
