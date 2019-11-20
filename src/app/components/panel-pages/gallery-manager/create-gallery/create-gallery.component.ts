import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Response } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../services/auth/auth.service';

/* obejcts */
import { GalleryGroupType } from './../../../../controllers/gallery/gallery-group-type';
import { Caption } from './../../../../controllers/media-data/caption/caption';
import { MimeTypeGroup } from './../../../../controllers/mime-type-group/mime-type-group';
import { CaptionType } from './../../../../controllers/media-data/caption/caption-type';
import { Album, NewAlbum, GalleryOrderCategory, GalleryOrderDirection, AlbumType } from './../../../../controllers/gallery/album';

/* Services */
import { CaptionTypeService } from './../../../../services/media-data-services/caption-type/caption-type.service';
import { MimeTypeGroupService } from './../../../../services/media-data-services/mime-type-group/mime-type-group.service';
//import { GalleryGroupTypeService } from './../../../../services/gallery-service/gallery-group-type/gallery-group-type.service';
//import { GalleryOrderCategoryService } from './../../../../services/gallery-service/gallery-order-category/gallery-order-category.service';
//import { GalleryOrderTypeService } from './../../../../services/gallery-service/gallery-order-type/gallery-order-type.service';
import { PhotoGalleryService } from './../../../../services/photo-gallery-services/photo-gallery.service';
import { ModalAddGalleryGroupTypeComponent } from '../../../../control-panel-modals/modal-add-gallery-group-type/modal-add-gallery-group-type.component';
@Component({
  selector: 'app-create-gallery',
  templateUrl: './create-gallery.component.html',
  styleUrls: ['./create-gallery.component.sass'],
})


export class CreateGalleryComponent implements OnInit, OnChanges {

 groupType: any;
 styleType: any;

 newPhotoAlbum: NewAlbum;
 photoAlbum: Album;
 albumChildren: any[];
 selectedGalleryOrderCategory: GalleryOrderCategory;
 selectedGalleryOrderDirection: GalleryOrderDirection;
 selectedAlbumType: AlbumType;

  /* form defaults */
 defaultCaptionTypeName: string  = "Gallery Captions";
 defaultMimeTypeName: string = "Automatic";
 defaultGalleryOrderTypeName: string = "Date/Time";
 defaultVideoGalleryStyle: string = 'Video Thumbnail Grid';
 defaultImageGalleryStyle: string = 'Photo Thumbnail Grid';
 showGalleryGroupTypesObject: boolean = false;

 defaultCaptionType: CaptionType = new CaptionType();
 defaultMimeTypeGroup: MimeTypeGroup = new MimeTypeGroup();
 defaultGalleryOrderCategory: GalleryOrderCategory = new GalleryOrderCategory();

 defaultMimeTypeId: number;

 /* set this once the mime type for gallery has been determined */
 galleryGroupTypeCount: any;
 galleryGroupTypeAvailable: boolean;
 galleryGroupTypeName: string = "";
 galleryPrivacyForGallery: boolean = true;

 isCollapsed = true;
 galleryPrivacy = '0';
 //galleryCount: number;
 //imageCount: number;`
 //videoCount: number;

 privacyButtonText = '';

 galleryForm: FormGroup;

 listedOrderCategories: any[];

 galleryOrderCategories: any[];
 galleryOrderDirections: any[];

 galleryOrderTypes: any[];
 galleryGroupTypes: any[];
 galleryStyles: any[];

 listedGroupTypes: any[];
 listedCaptionTypes: any[];
 listedMimeGroups: any[];

 newCaption: Caption = new Caption();
 newCaptionType: CaptionType = new CaptionType();

 newMimeTypeGroup: MimeTypeGroup = new MimeTypeGroup();

 private mimeTypeGroups: Array<MimeTypeGroup[]> = [];
 private galleryGroupType: GalleryGroupType;

 constructor(public auth: AuthService,
             private captionTypeService: CaptionTypeService,
             private mimeTypeGroupService: MimeTypeGroupService,
             private photoGalleryService: PhotoGalleryService,
             private galleryFormBuilder: FormBuilder,
             private modalService: NgbModal) { }


  ngOnInit(): void {

    this.getGalleryGroupTypeCount();

    this.galleryForm = new FormGroup({
      galleryname: new FormControl('', Validators.required),
      gallerydescription: new FormControl('', Validators.required),
      gallerycaption: new FormControl(''),
      gallerycaptiontypeid: new FormControl(''),
      gallerymimegroupid: new FormControl(''),
      galleryprivacy: new FormControl('', Validators.required),
      gallerygrouptypeid: new FormControl('', Validators.required),
      galleryordertype: new FormControl('', Validators.required),
      galleryOrderTypes: new FormControl(0),
      albumStyleTypes: new FormControl(0),
      galleryordercategoryid: new FormControl('', Validators.required)
    });

    this.ngOnChanges();

    this.privacyToggle();
    if (this.auth.isAuthenticated()) {
      //this.getAllGalleryStyles();
      this.getAllGalleryGroupTypes();
      //this.getAllGalleryOrderCategories();
      //this.getAllGalleryOrderTypes();
      //this.getAllGalleryOrderDirections();

      /*this.imageService.getImageCount()
        .subscribe(
          (imgCount: number) => this.imageCount = imgCount,
          (error) => console.log(error)
      );*/

      /* this.galleryService.getGalleryCount()
         .subscribe(
           (galleryCnt: number) => this.galleryCount = galleryCnt,
           (error) => console.log(error)
       );*/

      /* get all caption types and set the default gallery caption type */
      /*this.captionTypeService.getAllCaptionTypes()
        .subscribe(
          (captionTypes: any[]) => this.listedCaptionTypes = captionTypes,
          (error) => console.log(error),
          () => {
                    //inside of the complete segment of the subscription
                    // looping through the data array by property key
                    for(var key in this.listedCaptionTypes)
                    {
                      if (this.listedCaptionTypes.hasOwnProperty(key))
                      {
                        if(this.listedCaptionTypes[key].caption_type_name == this.defaultCaptionTypeName)
                        {
                          this.defaultCaptionType.caption_type_id = this.listedCaptionTypes[key].caption_type_id;
                          this.defaultCaptionType.caption_type_name = this.listedCaptionTypes[key].caption_type_name;
                          this.defaultCaptionType.caption_type_description = this.listedCaptionTypes[key].caption_type_description;

                          // set default for the form model
                          this.galleryForm.controls.gallerycaptiontypeid.setValue(this.defaultCaptionType.caption_type_id);
                        }
                      }
                    }
          }
        );

      /* get all mime type groups and set the default mime type group */
      /*this.mimeTypeGroupService.getAllMimeTypeGroups()
        .subscribe(
          (mimeTypes: any[]) => this.listedMimeGroups = mimeTypes,
          (error) => console.log(error),
          () => {

                    // inside of the complete segment of the subscription
                    // looping through the data array by property key
                    for (var key in this.listedMimeGroups)
                    {
                      if (this.listedMimeGroups.hasOwnProperty(key))
                      {
                        // searching for the default value for the gallery mime type group
                        if(this.listedMimeGroups[key].mime_type_group_name == this.defaultMimeTypeName)
                        {
                          // populating the local construct with the default value found
                          this.defaultMimeTypeGroup.mime_type_group_id = this.listedMimeGroups[key].mime_type_group_id;
                          this.defaultMimeTypeGroup.mime_type_group_name = this.listedMimeGroups[key].mime_type_group_name;
                          this.defaultMimeTypeGroup.mime_type_group_description = this.listedMimeGroups[key].mime_type_group_description;

                          // set default for form model
                          this.galleryForm.controls.gallerymimegroupid.setValue(this.defaultMimeTypeGroup.mime_type_group_id)
                        }
                      }
                    }
                  }
        );*/


      /*this.photoGalleryService.getGalleryGroupTypes()
        .subscribe(
          (groupTypes: any[]) => this.listedGroupTypes = groupTypes,
          (error) => console.log(error),
          () => {
            // inside of the complete segment of the subscription
            // looping through the data array by property key
            for (var key in this.listedGroupTypes )
            {
              if(this.listedGroupTypes.hasOwnProperty(key))
              {
                this.galleryGroupType = new GalleryGroupType();
                this.galleryGroupType.id = this.listedGroupTypes[key].group_type_id;
                this.galleryGroupType.galleryGroupTypeName = this.listedGroupTypes[key].group_type_name;
                this.galleryGroupType.galleryGroupTypeDescription = this.listedGroupTypes[key].group_type_description;
                this.galleryGroupType.mimeTypeGroupId = this.listedGroupTypes[key].mime_type_group_id;

                this.galleryGroupTypes.push(this.galleryGroupType);
              }
            }
          }
        );*/

      /* get all gallery order categories then set the default */
      /*this.photoGalleryService.getAllGalleryOrderCategories()
        .subscribe(
          (orderCategories: any[]) => this.listedOrderCategories = orderCategories,
          (error) => console.log(error),
          () => {
                  // inside of the complete segment of the subscription
                  // looping through the data array by property key
                  for (var key in this.listedOrderCategories)
                  {
                    if(this.listedOrderCategories.hasOwnProperty(key))
                    {
                      // searching for the default value for the gallery order category
                      if(this.listedOrderCategories[key].gallery_order_category_name == this.defaultGalleryOrderTypeName)
                      {
                        this.defaultGalleryOrderCategory.gallery_order_category_id = this.listedOrderCategories[key].gallery_order_category_id;
                        this.defaultGalleryOrderCategory.gallery_order_category_name = this.listedOrderCategories[key].gallery_order_category_name;
                        this.defaultGalleryOrderCategory.gallery_order_category_description = this.listedOrderCategories[key].gallery_order_category_description;
                        // set the default on the form model
                        this.galleryForm.controls.galleryordercategoryid.setValue(this.defaultGalleryOrderCategory.gallery_order_category_id);
                      }
                    }
                  }
                }
        );*/
    }
  }

 openNewGalleryGroupTypeModal() {

  const modalRef= this.modalService.open(ModalAddGalleryGroupTypeComponent, {size: 'lg'});
  modalRef.componentInstance.title = 'Add/Modify Gallery Group Type';
}

 getGalleryGroupTypeCount() {
   this.photoGalleryService.getGalleryGroupTypeCount()
     .subscribe(
       (results: number) => {
         this.galleryGroupTypeCount = results
         console.log(this.galleryGroupTypeCount)
         if(this.galleryGroupTypeCount == 0) {
           this.galleryGroupTypeAvailable = false;

         }
         else {
           this.galleryGroupTypeAvailable = true;
         }
         console.log(this.galleryGroupTypeAvailable);
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


 privacyToggle() {
   if (this.galleryPrivacy === '0') {
     this.galleryPrivacy = '1';
     this.privacyButtonText = 'Private';
   }
   else {
     this.galleryPrivacy = '0';
     this.privacyButtonText = 'Published';
   }
 }

 ngOnChanges(): void {
   /* listen to the gallery form for changes */
   this.galleryForm.valueChanges.subscribe(val => {
     /* adjust grouptype control visibility based on the selected value */
     if(val.gallerymimegroupid == 1 || val.gallerymimegroupid == 2)
     {
       this.showGalleryGroupTypesObject = false;
     }
     else
     {
       /* check if it's already true */
       if(!this.showGalleryGroupTypesObject)
       {
         /* if false, set it to true and set the default for the gallery group type */
         this.showGalleryGroupTypesObject = true;

       /* change the group type as the mime type is changed */
       //this.setGroupType(val.gallerymimegroupid);
       }

     }
   })
 }

 /* this function creates a photo album without any photos */
 createNewPhotoGallery(): void {
    this.newPhotoAlbum = {
      album: this.galleryForm.controls['galleryname'].value,
      album_description: this.galleryForm.controls['gallerydescription'].value,
      album_caption: this.galleryForm.controls['gallerycaption'].value,
      /* this is not optional, if no album_types exists they must be created before creating a new gallery */
      album_type: { /* this is used to seperate galleries by functionality eg: site content, calendar headers, user gallery*/
        album_type_id: '',
        album_type_name: '',
        album_type_description: ''
      },
      album_order_category: {
        gallery_order_category_id: this.selectedGalleryOrderCategory.gallery_order_category_id,
        gallery_order_category_name: this.selectedGalleryOrderCategory.gallery_order_category_name,
        gallery_order_category_description: this.selectedGalleryOrderCategory.gallery_order_category_description
      },
      album_order_direction: {
        gallery_order_direction_id: this.selectedGalleryOrderDirection.gallery_order_direction_id,
        gallery_order_direction_name: this.selectedGalleryOrderDirection.gallery_order_direction_name,
        gallery_order_direction_description: this.selectedGalleryOrderDirection.gallery_order_direction_description
      },
      album_owner: {
        profile_id: null,
        uuid: null
      },
      is_private: this.galleryForm.controls['galleryprivacy'].value,
      is_parent: true, /* by default the initial galleries are parent galleries */
      album_children: null,
      album_cover_photo: {
        file_name: null,
        upload_directory: null,
        photo_storage_name: null,
        photo_storage_type: {
          photo_storage_id: null,
          photo_storage_type_name: null,
          photo_storage_type_description: null
        }
      }
    }
  }

 //setGroupType(selectedMimeType: any) {
   /* if the control is visible set the group type to match */
   /*for (var key in this.listedMimeGroups)
   {
     if (this.listedMimeGroups[key].mime_type_group_id != selectedMimeType)
     {
       console.log(this.listedMimeGroups[key].mime_type_group_name);
       console.log(selectedMimeType);
       console.log(this.listedMimeGroups[key].mime_type_group_id);

       if(this.listedMimeGroups[key].mime_type_group_name = 'Video')
       {
         for(var groupType in this.listedGroupTypes)
         {
           if(this.listedGroupTypes[groupType].group_type_name == this.defaultVideoGalleryStyle )
           {
             this.galleryForm.controls.gallerygrouptypeid.setValue(this.listedGroupTypes[groupType].group_type_id)
           }
         }
       }

       if(this.listedMimeGroups[key].mime_type_group_name = 'Images')
       {
         console.log(this.listedMimeGroups[key].mime_type_group_name)
         for(var groupType in this.listedGroupTypes)
         {
           console.log(groupType);
           if(this.listedGroupTypes[groupType].group_type_name == this.defaultImageGalleryStyle )
           {
             this.galleryForm.controls.gallerygrouptypeid.setValue(this.listedGroupTypes[groupType].group_type_id)
           }
         }
       }
     }
   }
 }*/

 onSubmit() {
   /* insert data into object */
   /*this.newGallery.gallery_name = this.galleryForm.controls['galleryname'].value;
   this.newGallery.gallery_summary = this.galleryForm.controls['gallerydescription'].value;*/

   this.newCaption.caption = this.galleryForm['gallerycaption'].value;

   /* perform some submit tasks */

   /* reset the model */
   this.resetModel();
 }
 resetModel() {
   this.galleryForm.setValue({galleryname: '',
                                 gallerydescription: '',
                                 gallerycaption: '',
                                 galleryprivacy: '',
                                 gallerygrouptype: '',
                                 galleryordertype: '',
                                 galleryordercategory: ''});
   this.galleryForm.markAsUntouched;
   this.galleryForm.markAsPristine;
 }
}
