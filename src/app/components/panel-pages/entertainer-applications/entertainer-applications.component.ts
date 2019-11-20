import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators, Form} from '@angular/forms';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../../../services/auth/auth.service';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import {
  EmergencyContact,
  EntertainerApplication,
  EntertainerExperience
} from '../../../controllers/employee/entertainer-application.interface';

const URL = 'http://localhost/images/api';

@Component({
  selector: 'app-entertainer-applications',
  templateUrl: './entertainer-applications.component.html',
  styleUrls: ['./entertainer-applications.component.scss']
})
export class EntertainerApplicationsComponent implements OnInit {


  public uploader: FileUploader = new FileUploader({url: URL});

  faPlus = faPlus;
  faTrash = faTrash;
  faMinus = faMinus;
  faImage = faImage;

  employmentApplicationForm: FormGroup;
  entertainerApplication: EntertainerApplication;
  emergencyContacts: EmergencyContact[];
  entertainerExperiences: EntertainerExperience[];
  hasDancedBefore: boolean;

 constructor(public auth: AuthService,
             private formBuilder: FormBuilder,
             public sanitizer: DomSanitizer) {}

 /* form controls */
  firstNameCtrl: FormControl;
  lastNameCtrl: FormControl;
  addressCtrl: FormControl;
  cityCtrl: FormControl;
  stateCtrl: FormControl;
  zipCtrl: FormControl;
  phoneCtrl: FormControl;
  hireDatCtrl: FormControl;
  emergencyContactInstanceCtrls: FormArray;
  driversLicenseNumberCtrl: FormControl;
  birthdayCtrl: FormControl;
  ageCtrl: FormControl;
  educationCtrl: FormControl;
  stageNameCtrl: FormControl;
  entertainerExperienceCtrls: FormArray;

 ngOnInit() {

   this.firstNameCtrl = this.formBuilder.control('', Validators.required);
   this.lastNameCtrl = this.formBuilder.control('', Validators.required);
   this.addressCtrl = this.formBuilder.control('', Validators.required);
   this.cityCtrl = this.formBuilder.control('', Validators.required);
   this.stateCtrl = this.formBuilder.control('', Validators.required);
   this.zipCtrl = this.formBuilder.control('', Validators.required);
   this.phoneCtrl = this.formBuilder.control('', Validators.required);
   this.hireDatCtrl = this.formBuilder.control('', Validators.required);
   this.emergencyContactInstanceCtrls = this.formBuilder.array([]);
   this.driversLicenseNumberCtrl = this.formBuilder.control('', Validators.required);
   this.birthdayCtrl = this.formBuilder.control('', Validators.required);
   this.ageCtrl = this.formBuilder.control('', Validators.required);
   this.educationCtrl = this.formBuilder.control('', Validators.required);
   this.stageNameCtrl = this.formBuilder.control('', Validators.required);
   this.entertainerExperienceCtrls = this.formBuilder.array([]);

   this.employmentApplicationForm = this.formBuilder.group( {
     firstName: this.firstNameCtrl,
     lastName: this.lastNameCtrl,
     address: this.addressCtrl,
     city: this.cityCtrl,
     state: this.stateCtrl,
     zip: this.zipCtrl,
     phone: this.phoneCtrl,
     hireDate: this.hireDatCtrl,
     emergencyContactInstances: this.emergencyContactInstanceCtrls,
     driversLicense: this.driversLicenseNumberCtrl,
     birthday: this.birthdayCtrl,
     age: this.ageCtrl,
     education: this.educationCtrl,
     stageName: this.stageNameCtrl,
     entertainerExperienceInstances: this.entertainerExperienceCtrls
   });

   if (this.auth.isAuthenticated()) {
     this.addEmergencyContactInstance();
     this.addEntertainerExperienceInstance();
   }
 }

 createEmergencyContactInstance(): FormGroup {
   return this.formBuilder.group( {
     emergencyFirstName: new FormControl('', Validators.required),
     emergencyLastName: new FormControl('', Validators.required),
     emergencyPhone: new FormControl('', Validators.required)
   });
 }

 createEntertainerExperienceInstance(): FormGroup {
   return this.formBuilder.group( {
     venue: new FormControl('', Validators.required),
     city: new FormControl('', Validators.required),
     state: new FormControl('', Validators.required),
     lengthOfEmploymentYears: new FormControl('', Validators.required),
     lengthOfEmploymentMonths: new FormControl('', Validators.required)
   });
 }

 addEmergencyContactInstance(): void {
   (<FormArray>this.employmentApplicationForm.get('emergencyContactInstances')).push(this.createEmergencyContactInstance());
 }

 deleteEmergencyContactInstance(index): void {
   if(index===0) {}
   else {
     (<FormArray>this.employmentApplicationForm.get('emergencyContactInstances')).removeAt(index);
   }
 }

 addEntertainerExperienceInstance(): void {
   (<FormArray>this.employmentApplicationForm.get('entertainerExperienceInstances')).push(this.createEntertainerExperienceInstance());
 }

 deleteEntertainerExperienceInstance(index): void {
   if(index===0) {}
   else {
     (<FormArray>this.employmentApplicationForm.get('entertainerExperienceInstances')).removeAt(index);
   }
 }

 submit(): void {
   this.entertainerApplication = {
     _id: null,
     firstName: this.employmentApplicationForm.get('firstName').value,
     lastName: this.employmentApplicationForm.get('lastName').value,
     employeeAddress: {
       address: this.employmentApplicationForm.get('address').value,
       city: this.employmentApplicationForm.get('city').value,
       state: this.employmentApplicationForm.get('state').value,
       zip: this.employmentApplicationForm.get('zip').value
     },
     entertainerInformation: {
       phone: this.employmentApplicationForm.get('phone').value,
       hireDate: this.employmentApplicationForm.get('hireDate').value,
       emergencyContacts: this.emergencyContacts,
       identification: {
         driversLicenseNumber: this.employmentApplicationForm.get('driversLicense').value,
         birthday: this.employmentApplicationForm.get('birthday').value,
         age: this.employmentApplicationForm.get('age').value
       },
       stageName: this.employmentApplicationForm.get('stageName').value,
       highestLevelOfEducation: this.employmentApplicationForm.get('education').value,
       hasDancedBefore: this.hasDancedBefore
     },
     entertainerExperiences: this.entertainerExperiences,
     employeeSignature: {
       employeeSignature: this.employmentApplicationForm.get('signature').value,
       employeeSignatureDate: this.employmentApplicationForm.get('signatureDate').value
     }
   }
 }
}
