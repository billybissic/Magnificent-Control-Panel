import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-manage-careers',
  templateUrl: './manage-careers.component.html',
  styleUrls: ['./manage-careers.component.scss']
})
export class ManageCareersComponent implements OnInit {

  public Editor = DecoupledEditor;
  public model = {
    editorData: ''
  };

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
