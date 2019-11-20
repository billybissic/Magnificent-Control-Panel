import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-panel-pages',
  templateUrl: './panel-pages.component.html',
  styleUrls: ['./panel-pages.component.scss']
})
export class PanelPagesComponent implements OnInit {

  checkForProfile: any;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
