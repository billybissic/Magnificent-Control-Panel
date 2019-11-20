import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from '../../../services/auth/auth.service';

import { SimpleContentService } from './../../../services/content-management-service/simple-content.service';
import { SimpleContent } from './../../../controllers/content/simple-content';

@Component({
  selector: 'app-manage-entertainers',
  templateUrl: './manage-entertainers.component.html',
  styleUrls: ['./manage-entertainers.component.scss']
})
export class ManageEntertainersComponent implements OnInit {

  Mode: string = 'Previewing'; // Modes: Editing || Previewing
  documentName: string;

  public Editor = DecoupledEditor;
  public model = {
    editorData: ''
  };

  constructor(public auth: AuthService,
              private simpleContentService: SimpleContentService) { }

  ngOnInit() {
    if ( this.auth.isAuthenticated()) {
      this.Mode = 'Editing';
    }
  }

  saveAndPreview() {
    this.Mode = 'Previewing';
  }

  returnToEditing() {
    this.Mode = 'Editing';
  }
}
