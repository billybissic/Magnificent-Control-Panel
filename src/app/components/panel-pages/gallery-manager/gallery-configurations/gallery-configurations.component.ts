import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { PhotoGalleryService } from './../../../../services/photo-gallery-services/photo-gallery.service';
import { MimeTypeGroupService } from './../../../../services/media-data-services/mime-type-group/mime-type-group.service';
import { removeSummaryDuplicates } from '@angular/compiler';

import { GalleryGroupType } from './../../../../controllers/gallery/gallery-group-type';

@Component({
  selector: 'app-gallery-configurations',
  templateUrl: './gallery-configurations.component.html',
  styleUrls: ['./gallery-configurations.component.scss']
})
export class GalleryConfigurationsComponent implements OnInit {

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  newGalleryGroupType: GalleryGroupType;

  galleryGroupTypes: any[];
  galleryGroupTypeForm: FormGroup;

  galleryStyles: any[];
  galleryStylesForm: FormGroup;

  galleryObjectTypes: any[];
  galleryObjectTypesForm: FormGroup;

  galleryOrderCategories: any[];
  galleryOrderCategoriesForm: FormGroup;

  galleryOrderTypes: any[];
  galleryOrderTypesForm: FormGroup;

  galleryOrderDirections: any[];
  galleyrOrderDirectionsForm: FormGroup;

  mimeTypeGroups: any[];

  errorMessage: any;

  constructor(public auth: AuthService,
              private photoGalleryService: PhotoGalleryService,
              private mimeTypeGroupService: MimeTypeGroupService) { }

  ngOnInit() {

    this.galleryGroupTypeForm = new FormGroup({
      groupTypeName: new FormControl(),
      groupTypeDescription: new FormControl(),
      groupTypeMimeTypeGroup: new FormControl('0')
    });

    this.galleryStylesForm = new FormGroup({
      galleryStyleName: new FormControl(),
      galleryStyleDescription: new FormControl(),
      galleryStyleMimeTypeGroup: new FormControl()
    });

    this.galleryObjectTypesForm = new FormGroup({
      galleryObjectTypeName: new FormControl(),
      galleryObjectTypeDescription: new FormControl()
    });

    this.galleryOrderCategoriesForm = new FormGroup({
      galleryOrderCategoryName: new FormControl(),
      galleryOrderCategoryDescription: new FormControl()
    });

    this.galleryOrderTypesForm = new FormGroup({
      galleryOrderTypeName: new FormControl(),
      galleryOrderTypeDescription: new FormControl(),
      galleryOrderTypeOrderCategory: new FormControl(),
      galleryOrderTypeDirection: new FormControl()
    });

    this.galleyrOrderDirectionsForm = new FormGroup({

    });

    if ( this.auth.isAuthenticated()) {
      this.getAllGalleryGroupTypes();
      this.getAllGalleryStyles();
      this.getAllGalleryObjectTypes();
      this.getAllGalleryOrderCategories();
      this.getAllGalleryOrderTypes();
      this.getAllMimeTypeGroups();
      this.getAllGalleryOrderDirections();
    }
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

  getAllGalleryStyles() {
    this.photoGalleryService.getAllGalleryStyles()
      .subscribe(
        (results: any[]) => {
          this.galleryStyles = results
          console.log(this.galleryStyles)
          },
          (error) => console.log(error)
        );
  }

  getAllGalleryObjectTypes() {
    this.photoGalleryService.getAllGalleryObjectTypes()
      .subscribe(
        (results: any[]) => {
          this.galleryObjectTypes = results
          console.log(this.galleryObjectTypes)
        },
        (error) => console.log(error)
      );
  }

  getAllGalleryOrderCategories() {
    this.photoGalleryService.getAllGalleryOrderCategories()
    .subscribe(
      (results: any[])=> {
        this.galleryOrderCategories = results
        console.log(this.galleryOrderCategories)
      },
      (error) => console.log(error)
    );
  }

  getAllGalleryOrderTypes() {
    this.photoGalleryService.getAllGalleryOrderTypes()
    .subscribe(
      (results: any[]) => {
        this.galleryOrderTypes = results
        console.log(this.galleryOrderTypes)
      },
      (error) => console.log(error)
    );
  }

  getAllMimeTypeGroups() {
    this.mimeTypeGroupService.getAllMimeTypeGroups()
    .subscribe(
      (results: any[]) => {
        this.mimeTypeGroups = results
        console.log(this.mimeTypeGroups)
      },
      (error) => console.log(error)
    );
  }

  getAllGalleryOrderDirections() {
    this.photoGalleryService.getAllGalleryOrderDirections()
    .subscribe(
      (results: any[]) => {
        this.galleryOrderDirections = results
        console.log(this.galleryOrderDirections)
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
  }

  deleteGalleryGroupType(groupTypeId: number) {
    console.log("deleting group type id");
    console.log(groupTypeId);
    this.photoGalleryService.deleteGalleryGroupType(groupTypeId)
      .then(result => console.log(result))
      .catch(error => console.log(error));

    this.getAllGalleryGroupTypes();
  }

  deleteGalleryOrderCategory(orderCategoryId: number) {
    this.photoGalleryService.deleteGalleryOrderCategory(orderCategoryId)
      .then(result => console.log(result))
      .catch(error => console.log(error));

    this.getAllGalleryOrderCategories();
  }

  deleteGalleryOrderDirection(orderDirectionId: number) {
    this.photoGalleryService.deleteGalleryOrderDirection(orderDirectionId)
      .then(result => console.log(result))
      .catch(error => console.log(error));

    this.getAllGalleryOrderDirections();
  }

  deleteGalleryOrderType(orderTypeId: number) {
    this.photoGalleryService.deleteGalleryOrderType(orderTypeId)
      .then(result => console.log(result))
      .catch(error => console.log(error));

    this.getAllGalleryOrderTypes();
  }
}
