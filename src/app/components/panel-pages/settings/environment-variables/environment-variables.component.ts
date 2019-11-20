import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { ApplicationSettings } from '../../../../controllers/application-settings/application-settings'
import { SettingsService } from '../../../../services/settings-service/settings.service';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-environment-variables',
  templateUrl: './environment-variables.component.html',
  styleUrls: ['./environment-variables.component.scss']
})
export class EnvironmentVariablesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faEdit = faEdit;
  faTrash = faTrash;

  settings: ApplicationSettings[] = [];
  applicationSettings: ApplicationSettings;
  private errorMessage: string;
  applicationSettingsForm: FormGroup;

  constructor(public auth: AuthService,
              private settingsService: SettingsService,
              private changeDetectorRef: ChangeDetectorRef) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['applicationSettingsId', 'applicationName', 'applicationSettingName', 'applicationSettingDescription', 'applicationSettingValue', 'lastChangedTimestamp', 'lastModifiedUserid', 'actions'];

  /** Initialize DataSource */
  dataSource: any;

  ngOnInit() {

    if ( this.auth.isAuthenticated()) {
      /** Fetch Data */
      this.getAllApplicationSettings();
    }

    this.applicationSettingsForm = new FormGroup( {
      application_name: new FormControl('', Validators.required),
      application_settings_name: new FormControl('', Validators.required),
      application_settings_description: new FormControl('', Validators.required),
      application_settings_value: new FormControl('', Validators.required)
    });
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Data Subscription Function */
  getAllApplicationSettings() {
    this.settingsService.getAllApplicationSettings()
      .subscribe((settingsList: ApplicationSettings[]) => {
        this.settings = settingsList;
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      },
        () => {
        this.dataSource = new MatTableDataSource(this.settings);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        });
  }

  addNewApplicationSetting() {
    this.applicationSettings = {
      applicationSettingsId: null,
      applicationName: this.applicationSettingsForm.controls['application_name'].value,
      applicationSettingName: this.applicationSettingsForm.controls['application_settings_name'].value,
      applicationSettingDescription: this.applicationSettingsForm.controls['application_settings_description'].value,
      applicationSettingValue: this.applicationSettingsForm.controls['application_settings_value'].value,
      lastChangedTimestamp: null,
      lastModifiedUserid: 1
    };

    console.log(this.applicationSettings);

    this.settingsService.addNewApplicationSetting(this.applicationSettings)
      .subscribe( response => {
        this.getAllApplicationSettings();
      }, error => this.errorMessage = <any>error);

    this.applicationSettingsForm.reset();
  }

  deleteRecord(applicationSettingsId: number) {
    this.settingsService.deleteApplicationSetting(applicationSettingsId)
      .subscribe( response => {
        this.getAllApplicationSettings();
      }, error => this.errorMessage = <any>error);
  }
}
