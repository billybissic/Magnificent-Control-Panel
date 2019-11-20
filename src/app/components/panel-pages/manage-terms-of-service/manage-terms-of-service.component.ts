import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from '../../../services/auth/auth.service';

import { SimpleContentService } from './../../../services/content-management-service/simple-content.service';
import { SimpleContent } from './../../../controllers/content/simple-content';

@Component({
  selector: 'app-manage-terms-of-service',
  templateUrl: './manage-terms-of-service.component.html',
  styleUrls: ['./manage-terms-of-service.component.scss']
})
export class ManageTermsOfServiceComponent implements OnInit {

  Mode: string; //Modes: Previewing || Editing
  documentName: string;
  termsOfService: SimpleContent;

  public Editor = DecoupledEditor;
  public model = {
    editorData: ''
  };

  constructor(public auth: AuthService,
              private simpleContentService: SimpleContentService) { }

  ngOnInit() {
    this.Mode = "Previewing";
    this.documentName = "TermsOfService";

    if ( this.auth.isAuthenticated()) {
      this.getTermsOfServiceDocument();
    }
  }

  showEditMode() {
    this.Mode = "Editing";
    this.model = {
      editorData: this.termsOfService.documentContent.toString()
    }
  }

  showPreviewMode() {
    this.Mode = "Previewing";
  }

  getTermsOfServiceDocument() {
    this.simpleContentService.getSimpleContentByDocumentName(this.documentName)
      .subscribe(
        (results: SimpleContent) => {
          this.termsOfService = results;
          console.log(this.termsOfService);
        },
        (error) => console.log(error)
      );
  }
}
