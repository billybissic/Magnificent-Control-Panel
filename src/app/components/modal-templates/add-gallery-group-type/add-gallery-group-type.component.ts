import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

/* services */
import { PhotoGalleryService } from './../../../services/photo-gallery-services/photo-gallery.service';
import { MimeTypeGroupService } from './../../../services/media-data-services/mime-type-group/mime-type-group.service';

/* controllers */
import { GalleryGroupType } from './../../../controllers/gallery/gallery-group-type';

/* icons */
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-gallery-group-type',
  templateUrl: './add-gallery-group-type.component.html',
  styleUrls: ['./add-gallery-group-type.component.scss']
})

export class AddGalleryGroupTypeComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  newGalleryGroupType: GalleryGroupType;

  galleryGroupTypes: any[];
  galleryGroupTypeForm: FormGroup;

  mimeTypeGroups: any[];
  errorMessage: any;

  constructor(private photoGalleryService: PhotoGalleryService,
              private mimeTypeGroupService: MimeTypeGroupService) { }

  ngOnInit() {

    this.galleryGroupTypeForm = new FormGroup({
      groupTypeName: new FormControl(),
      groupTypeDescription: new FormControl(),
      groupTypeMimeTypeGroup: new FormControl('0')
    });

    /* service calls */
    this.getAllMimeTypeGroups();
    this.getAllGalleryGroupTypes();
  }

  getAllMimeTypeGroups() {
    this.mimeTypeGroupService.getAllMimeTypeGroups()
      .subscribe(
        (results: any[]) => {
          this.mimeTypeGroups = results
        },
        (error) => console.log(error)
      );
  }

  getAllGalleryGroupTypes() {
    this.photoGalleryService.getGalleryGroupTypes()
      .subscribe(
        (results: any[]) => {
          this.galleryGroupTypes = results
          console.log(this.galleryGroupTypes)
        },
        (error) => console.log(error)
      );
  }

  addNewGalleryGroupType() {
    console.log("add new gallery type");
    this.newGalleryGroupType = new GalleryGroupType;

    this.newGalleryGroupType.galleryGroupTypeName = this.galleryGroupTypeForm.controls['groupTypeName'].value;
    this.newGalleryGroupType.galleryGroupTypeDescription = this.galleryGroupTypeForm.controls['groupTypeDescription'].value;
    this.newGalleryGroupType.mimeTypeGroupId = parseInt(this.galleryGroupTypeForm.controls['groupTypeMimeTypeGroup'].value);

    console.log(this.newGalleryGroupType);

    this.photoGalleryService.createGalleryGroupType(this.newGalleryGroupType)
      .subscribe(response => {
      }, error => this.errorMessage = <any>error);

    this.getAllGalleryGroupTypes();
    this.getAllMimeTypeGroups();
  }
}
