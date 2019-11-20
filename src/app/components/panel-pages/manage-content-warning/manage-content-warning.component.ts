import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from '../../../services/auth/auth.service';

import { SimpleContentService } from './../../../services/content-management-service/simple-content.service';

import { SimpleContent } from './../../../controllers/content/simple-content';

@Component({
  selector: 'app-manage-content-warning',
  templateUrl: './manage-content-warning.component.html',
  styleUrls: ['./manage-content-warning.component.scss']
})
export class ManageContentWarningComponent implements OnInit {

  Mode: string; //Modes: Previewing || Editing
  documentName: string;
  contentWarning: SimpleContent;

  public Editor = DecoupledEditor;
  public model = {
    editorData: ''
  };

  constructor(public auth: AuthService,
              private simpleContentService: SimpleContentService) { }

  ngOnInit() {
    this.Mode = "Previewing";
    this.documentName = "ContentWarning";

    if ( this.auth.isAuthenticated()) {
      this.getContentWarningDocument();
    }
  }

  showEditMode() {
    this.Mode = "Editing";
    this.model = {
      editorData: this.contentWarning.documentContent.toString()
    }
  }

  showPreviewMode() {
    this.Mode = "Previewing";
  }

  getContentWarningDocument() {
    this.simpleContentService.getSimpleContentByDocumentName(this.documentName)
      .subscribe(
        (results: SimpleContent) => {
          this.contentWarning = results
          console.log(this.contentWarning)
        },
        (error) => console.log(error)
      );
  }
}
