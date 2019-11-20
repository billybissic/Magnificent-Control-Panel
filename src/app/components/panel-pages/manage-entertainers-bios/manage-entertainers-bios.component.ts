import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-manage-entertainers-bios',
  templateUrl: './manage-entertainers-bios.component.html',
  styleUrls: ['./manage-entertainers-bios.component.scss']
})
export class ManageEntertainersBiosComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
