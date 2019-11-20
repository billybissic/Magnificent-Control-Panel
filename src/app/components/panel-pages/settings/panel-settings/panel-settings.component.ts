import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-panel-settings',
  templateUrl: './panel-settings.component.html',
  styleUrls: ['./panel-settings.component.scss']
})
export class PanelSettingsComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
