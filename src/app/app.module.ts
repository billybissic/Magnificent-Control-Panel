import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { ContextMenuModule } from 'ngx-contextmenu';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColorPickerModule } from 'ngx-color-picker';
// import { PopoverDirective } from 'ngx-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {  MatTableModule,
          MatPaginatorModule,
          MatSortModule,
          MatSelectModule,
          MatAutocompleteModule,
          MatInputModule,
          MatButtonModule,
          MatCheckboxModule,
          MatMenuModule,
          MatDividerModule} from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

/* components  - panel-pages */
import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { PanelNavigationComponent } from './components/navigation/panel-navigation/panel-navigation.component';
import { PanelWidgetsComponent } from './components/panel-widgets/panel-widgets.component';
import { PanelPagesComponent } from './components/panel-pages/panel-pages.component';
import { IndexComponent } from './components/panel-pages/index/index.component';
import { MailingListComponent } from './components/panel-pages/mailing-list/mailing-list.component';
import { ReservationsComponent } from './components/panel-pages/reservations/reservations.component';
import { ReportsComponent } from './components/panel-pages/reports/reports.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PanelSettingsComponent } from './components/panel-pages/settings/panel-settings/panel-settings.component';
import { WidgetSettingsComponent } from './components/panel-pages/settings/widget-settings/widget-settings.component';
import { SettingsComponent } from './components/panel-pages/settings/settings.component';
import { ContentManagerComponent } from './components/panel-pages/content-manager/content-manager.component';
import { ContentManagerSettingsComponent } from './components/panel-pages/settings/content-manager-settings/content-manager-settings.component';
import { NavigationCardsComponent } from './components/navigation/navigation-cards/navigation-cards.component';

import { CreateGalleryComponent } from './components/panel-pages/gallery-manager/create-gallery/create-gallery.component';
import { GalleryConfigurationsComponent } from './components/panel-pages/gallery-manager/gallery-configurations/gallery-configurations.component';
import { ModalTestingComponent } from './components/panel-pages/modal-testing/modal-testing.component';

/* modals */
import { ModalLockComponent } from './control-panel-modals/modal-lock/modal-lock.component';
import { ModalLoginComponent } from './control-panel-modals/modal-login/modal-login.component';
import { ModalAddGalleryGroupTypeComponent } from './control-panel-modals/modal-add-gallery-group-type/modal-add-gallery-group-type.component';
import { ModalDeleteConfirmationComponent } from './control-panel-modals/modal-delete-confirmation/modal-delete-confirmation.component';
import { ModalLogoutConfirmationComponent } from './control-panel-modals/modal-logout-confirmation/modal-logout-confirmation.component';
import { ModalSendMessageComponent } from './control-panel-modals/modal-send-message/modal-send-message.component';
import { ModalReadMessageComponent } from './control-panel-modals/modal-read-message/modal-read-message.component';

/* modal templates */
import { LoginComponent } from './components/modal-templates/login/login.component';
import { LockComponent } from './components/modal-templates/lock/lock.component';
import { SendMessageComponent } from './components/modal-templates/send-message/send-message.component';
import { ReadMessageComponent } from './components/modal-templates/read-message/read-message.component';
import { LogoutComponent } from './components/modal-templates/logout/logout.component';
import { DeleteConfirmationComponent } from './components/modal-templates/delete-confirmation/delete-confirmation.component';
import { AddGalleryGroupTypeComponent } from './components/modal-templates/add-gallery-group-type/add-gallery-group-type.component';

/* modal types */
import { ModalComponent } from './modals/modal/modal.component';
import { ModalConfirmComponent } from './modals/modal-confirm/modal-confirm.component';
import { ModalOkCancelComponent } from './modals/modal-ok-cancel/modal-ok-cancel.component';
import { ModalCancelComponent } from './modals/modal-cancel/modal-cancel.component';
import { ModalOkComponent } from './modals/modal-ok/modal-ok.component';

/* content management components */
import { ManageEntertainersComponent } from './components/panel-pages/manage-entertainers/manage-entertainers.component';
import { ManageLandingPageComponent } from './components/panel-pages/manage-landing-page/manage-landing-page.component';
import { ManageDisclaimerComponent } from './components/panel-pages/manage-disclaimer/manage-disclaimer.component';
import { ManageContentWarningComponent } from './components/panel-pages/manage-content-warning/manage-content-warning.component';
import { ManageTermsOfServiceComponent } from './components/panel-pages/manage-terms-of-service/manage-terms-of-service.component';
import { ManagePrivacyPolicyComponent } from './components/panel-pages/manage-privacy-policy/manage-privacy-policy.component';
import { ManageEventFlyersComponent } from './components/panel-pages/manage-event-flyers/manage-event-flyers.component';
import { ManageCalendarHeadersComponent } from './components/panel-pages/manage-calendar-headers/manage-calendar-headers.component';
import { ManageSitePagesComponent } from './components/panel-pages/manage-site-pages/manage-site-pages.component';

/* employee management components */
import { EmployeeApplicationsComponent } from './components/panel-pages/employee-applications/employee-applications.component';
import { ManageEmployeeSchedulesComponent } from './components/panel-pages/manage-employee-schedules/manage-employee-schedules.component';
import { ManageEntertainersBiosComponent } from './components/panel-pages/manage-entertainers-bios/manage-entertainers-bios.component';
import { EntertainerApplicationsComponent } from './components/panel-pages/entertainer-applications/entertainer-applications.component';
import { ManageBartenderApplicationsComponent } from './components/panel-pages/manage-bartender-applications/manage-bartender-applications.component';
import { EntertainersTimeAndAttendanceComponent } from './components/panel-pages/entertainers-time-and-attendance/entertainers-time-and-attendance.component';
import { BartendersTimeAndAttendanceComponent } from './components/panel-pages/bartenders-time-and-attendance/bartenders-time-and-attendance.component';
import { BartenderSchedulesComponent } from './components/panel-pages/bartender-schedules/bartender-schedules.component';
import { EntertainerSchedulesComponent } from './components/panel-pages/entertainer-schedules/entertainer-schedules.component';

/* event management components */
import { EventSchedulerComponent } from './components/panel-pages/event-manager/event-scheduler/event-scheduler.component';
import { EventCalendarComponent } from './components/panel-pages/event-manager/event-calendar/event-calendar.component';

/* communication components */
import { MessageCenterComponent } from './components/panel-pages/message-center/message-center.component';
import { NotificationsComponent } from './components/panel-pages/notifications/notifications.component';

/* customer service components */
import { ManageReservationsComponent } from './components/panel-pages/manage-reservations/manage-reservations.component';
import { SubscriberGroupsComponent } from './components/panel-pages/subscriber-groups/subscriber-groups.component';

/* application-settings components */
import { ReservationsFormManagerComponent } from './components/panel-pages/reservations-form-manager/reservations-form-manager.component';
import { EventStaticDataComponent } from './components/panel-pages/event-manager/event-static-data/event-static-data.component';
import { EnvironmentVariablesComponent } from './components/panel-pages/settings/environment-variables/environment-variables.component';

/* services */
import { SubscriberService } from './services/subscriber-service/subscriber-service.service';
import { ReservationService } from './services/reservation-service/reservation.service';
import { EventManagementService } from './services/event-management-service/event-management.service';
import { CaptionTypeService } from './services/media-data-services/caption-type/caption-type.service';
import { MimeTypeGroupService } from './services/media-data-services/mime-type-group/mime-type-group.service';
import { GalleryOrderCategoryService } from './services/gallery-service/gallery-order-category/gallery-order-category.service';
import { GalleryGroupTypeService } from './services/gallery-service/gallery-group-type/gallery-group-type.service';
import { GalleryOrderTypeService } from './services/gallery-service/gallery-order-type/gallery-order-type.service';
import { PhotoGalleryService } from './services/photo-gallery-services/photo-gallery.service';
import { SettingsService } from './services/settings-service/settings.service';
import { ModalCommunicationService } from './services/modal-communication-service/modal-communication.service';
import { ComponentCommunicationService } from './services/component-communication-service/component-communication.service';
import { AuthService } from './services/auth/auth.service';
import { SharedStaticDataService } from './services/shared-static-data/shared-static-data.service';

import { ReservationsTableComponent } from './components/panel-pages/reservations/reservations-table/reservations-table.component';
import { MailinglistTableComponent } from './components/panel-pages/mailing-list/mailinglist-table/mailinglist-table.component';
import { ImageContainerComponent } from './components/dynamic-components/image-container/image-container.component';
import { ThumbnailContainerComponent } from './components/dynamic-components/thumbnail-container/thumbnail-container.component';
import { GridContainerComponent } from './components/dynamic-components/grid-container/grid-container.component';
import { GalleryViewerComponent } from './components/panel-pages/gallery-viewer/gallery-viewer/gallery-viewer.component';
import { ModalLightboxComponent } from './control-panel-modals/modal-lightbox/modal-lightbox.component';
import { LightboxComponent } from './components/modal-templates/lightbox/lightbox.component';
import { ModalVanillaComponent } from './modals/modal-vanilla/modal-vanilla.component';
import { SubscribergroupsTableComponent } from './components/panel-pages/subscriber-groups/subscribergroups-table/subscribergroups-table.component';
import { UnassignedsubscribersTableComponent } from './components/panel-pages/subscriber-groups/unassignedsubscribers-table/unassignedsubscribers-table.component';
import { AssignedsubscribersTableComponent } from './components/panel-pages/subscriber-groups/assignedsubscribers-table/assignedsubscribers-table.component';
import { CreateSubscriberGroupComponent } from './components/panel-pages/subscriber-groups/create-subscriber-group/create-subscriber-group.component';
import { ErrorMessageComponent } from './components/modal-templates/error-message/error-message.component';
import { ModalErrorMessageComponent } from './control-panel-modals/modal-error-message/modal-error-message.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ManageCareersComponent } from './components/panel-pages/manage-careers/manage-careers.component';
import { CreatePositionComponent } from './components/panel-pages/create-position/create-position.component';
import { EmploymentManagementSettingsComponent } from './components/panel-pages/settings/employment-management-settings/employment-management-settings.component';
import { SecurityLandingPageComponent } from './components/panel-pages/security-landing-page/security-landing-page.component';
import { ManageApplicationTypesComponent } from './components/panel-pages/settings/manage-application-types/manage-application-types.component';
import { ManageArrangementTypesComponent } from './components/panel-pages/settings/manage-arrangement-types/manage-arrangement-types.component';
import { ManagePositionStatusesComponent } from './components/panel-pages/settings/manage-position-statuses/manage-position-statuses.component';
import { ManagePositionTypesComponent } from './components/panel-pages/settings/manage-position-types/manage-position-types.component';
import { ApplicationTypesComponent } from './components/panel-pages/settings/manage-application-types/application-types/application-types.component';
import { ArrangementTypesComponent } from './components/panel-pages/settings/manage-arrangement-types/arrangement-types/arrangement-types.component';
import { PositionStatusesComponent } from './components/panel-pages/settings/manage-position-statuses/position-statuses/position-statuses.component';
import { PositionTypesComponent } from './components/panel-pages/settings/manage-position-types/position-types/position-types.component';
import { PositionsComponent } from './components/panel-pages/manage-careers/positions/positions.component';
import { ManageVolunteerPositionTypesComponent } from './components/panel-pages/settings/manage-volunteer-position-types/manage-volunteer-position-types.component';
import { VolunteerPositionComponent } from './components/panel-pages/settings/manage-volunteer-position-types/volunteer-position/volunteer-position.component';
import { BartenderApplicationsComponent } from './components/panel-pages/manage-bartender-applications/bartender-applications/bartender-applications.component';
import { ManageEntertainerApplicationsComponent } from './components/panel-pages/manage-entertainer-applications/manage-entertainer-applications.component';
import {EmployeeManagementService} from './services/employee-management-service/employee-management.service';

/* navigational routing */
const appRoutes: Routes = [
  { path: 'control-panel', component: IndexComponent, data: { title: 'Menage Control Panel'} },
  { path: 'control-panel/content-manager', component: ContentManagerComponent },

  /* calendar event management */
  { path: 'control-panel/event-manager/event-scheduler', component: EventSchedulerComponent },
  { path: 'control-panel/event-manager/event-calendar', component: EventCalendarComponent },
  { path: 'control-panel/event-flyers/manage-event-flyers', component: ManageEventFlyersComponent },
  { path: 'control-panel/calendar-headers/manage-calendar-headers', component: ManageCalendarHeadersComponent },

  { path: 'control-panel/reports', component: ReportsComponent },

  /* employee management */
  { path: 'control-panel/employee-management/applications/employee-applications', component: EmployeeApplicationsComponent },
  { path: 'control-panel/employee-management/applications/entertainer-applications', component: EntertainerApplicationsComponent },
  { path: 'control-panel/employee-management/time-and-attendance/entertainers', component: EntertainersTimeAndAttendanceComponent },
  { path: 'control-panel/employee-management/time-and-attendance/entertainer-schedules', component: EntertainerSchedulesComponent },
  { path: 'control-panel/employee-management/time-and-attendance/bartender-schedules', component: BartenderSchedulesComponent },
  { path: 'control-panel/employee-management/time-and-attendance/bartenders', component: BartendersTimeAndAttendanceComponent },
  { path: 'control-panel/employee-management/positions/create-new-positions', component: CreatePositionComponent},
  { path: 'control-panel/employee-management/positions/manage-open-positions', component: ManageCareersComponent},
  { path: 'control-panel/employee-management/applications/manage-entertainer-applications', component: ManageEntertainerApplicationsComponent},
  { path: 'control-panel/employee-management/applications/manage-bartender-applications', component: ManageBartenderApplicationsComponent},

  /* content management */
  { path: 'control-panel/entertainers/manage-entertainers', component: ManageEntertainersComponent },
  { path: 'control-panel/landing-pages/manage-landing-pages', component: ManageLandingPageComponent },
  { path: 'control-panel/disclaimer/manage-discliamer', component: ManageDisclaimerComponent },
  { path: 'control-panel/termsofservice/manage-termsofservice', component: ManageTermsOfServiceComponent },
  { path: 'control-panel/privacypolicy/manage-privacy-policy', component: ManagePrivacyPolicyComponent },
  { path: 'control-panel/content-warning/manage-content-warning', component: ManageContentWarningComponent },
  { path: 'control-panel/site-pages/manage-site-pages', component: ManageSitePagesComponent },
  { path: 'control-panel/gallery-manager/create-gallery', component: CreateGalleryComponent },
  { path: 'control-panel/gallery-viewer/gallery-viewer', component: GalleryViewerComponent },

  /* application-settings */
  { path: 'control-panel/settings/', component: SettingsComponent },
  { path: 'control-panel/settings/environment-variables', component: EnvironmentVariablesComponent},
  { path: 'control-panel/settings/content-manager', component: ContentManagerSettingsComponent},
  { path: 'control-panel/settings/panel-application-settings', component: PanelSettingsComponent, },
  { path: 'control-panel/settings/widget-application-settings', component: WidgetSettingsComponent },
  { path: 'control-panel/settings/modal-testing', component: ModalTestingComponent },
  { path: 'control-panel/settings/manage-application-types', component: ManageApplicationTypesComponent },
  { path: 'control-panel/settings/manage-arrangement-types', component: ManageArrangementTypesComponent },
  { path: 'control-panel/settings/manage-position-statuses', component: ManagePositionStatusesComponent },
  { path: 'control-panel/settings/manage-position-types', component: ManagePositionTypesComponent },
  { path: 'control-panel/gallery-manager/gallery-configurations', component: GalleryConfigurationsComponent },
  { path: 'control-panel/event-manager/event-static-data', component: EventStaticDataComponent },
  { path: 'control-panel/customer-interactions/reservations-form-manager', component: ReservationsFormManagerComponent },
  { path: 'control-panel/customer-interactions/volunteer-position-form-manager', component: ManageVolunteerPositionTypesComponent },

  /* customer interactions */
  { path: 'control-panel/customer-interactions/mailing-list', component: MailingListComponent },
  { path: 'control-panel/customer-interactions/subscriber-groups', component: SubscriberGroupsComponent },
  { path: 'control-panel/customer-interactions/reservations', component: ReservationsComponent },
  { path: '', redirectTo: '/control-panel', pathMatch: 'full' },
  { path: 'home', redirectTo: '/control-panel', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    PanelNavigationComponent,
    PanelWidgetsComponent,
    PanelPagesComponent,
    IndexComponent,
    MailingListComponent,
    ReservationsComponent,
    ReportsComponent,
    PageNotFoundComponent,
    PanelSettingsComponent,
    WidgetSettingsComponent,
    SettingsComponent,
    ContentManagerComponent,
    ContentManagerSettingsComponent,
    NavigationCardsComponent,
    SubscriberGroupsComponent,
    ReservationsFormManagerComponent,
    EventStaticDataComponent,
    EventSchedulerComponent,
    EventCalendarComponent,
    CreateGalleryComponent,
    GalleryConfigurationsComponent,
    ModalLockComponent,
    ModalLoginComponent,
    ModalAddGalleryGroupTypeComponent,
    ModalDeleteConfirmationComponent,
    ModalLogoutConfirmationComponent,
    ModalSendMessageComponent,
    ModalReadMessageComponent,
    ModalTestingComponent,
    LoginComponent,
    LockComponent,
    SendMessageComponent,
    ReadMessageComponent,
    LogoutComponent,
    DeleteConfirmationComponent,
    AddGalleryGroupTypeComponent,
    ModalConfirmComponent,
    ModalOkCancelComponent,
    ModalCancelComponent,
    ModalOkComponent,
    ModalComponent,
    ManageEntertainersComponent,
    ManageLandingPageComponent,
    ManageDisclaimerComponent,
    ManageContentWarningComponent,
    ManageEventFlyersComponent,
    ManageCalendarHeadersComponent,
    ManageSitePagesComponent,
    EmployeeApplicationsComponent,
    ManageEmployeeSchedulesComponent,
    ManageEntertainersBiosComponent,
    MessageCenterComponent,
    NotificationsComponent,
    ManageReservationsComponent,
    EnvironmentVariablesComponent,
    EntertainerApplicationsComponent,
    ManageBartenderApplicationsComponent,
    EntertainersTimeAndAttendanceComponent,
    BartendersTimeAndAttendanceComponent,
    BartenderSchedulesComponent,
    EntertainerSchedulesComponent,
    ReservationsTableComponent,
    MailinglistTableComponent,
    ImageContainerComponent,
    ThumbnailContainerComponent,
    GridContainerComponent,
    GalleryViewerComponent,
    ManageTermsOfServiceComponent,
    ModalLightboxComponent,
    LightboxComponent,
    ModalVanillaComponent,
    ManagePrivacyPolicyComponent,
    SubscribergroupsTableComponent,
    UnassignedsubscribersTableComponent,
    AssignedsubscribersTableComponent,
    CreateSubscriberGroupComponent,
    ErrorMessageComponent,
    ModalErrorMessageComponent,
    CallbackComponent,
    ManageCareersComponent,
    CreatePositionComponent,
    EmploymentManagementSettingsComponent,
    SecurityLandingPageComponent,
    ManageApplicationTypesComponent,
    ManageArrangementTypesComponent,
    ManagePositionStatusesComponent,
    ManagePositionTypesComponent,
    ApplicationTypesComponent,
    ArrangementTypesComponent,
    PositionStatusesComponent,
    PositionTypesComponent,
    PositionsComponent,
    ManageVolunteerPositionTypesComponent,
    VolunteerPositionComponent,
    BartenderApplicationsComponent,
    ManageEntertainerApplicationsComponent
    //PopoverDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FontAwesomeModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ContextMenuModule.forRoot({
      useBootstrap4: true
    }),
    ColorPickerModule,
    CollapseModule,
    CKEditorModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FileUploadModule,
    MatMenuModule,
    MatDividerModule
  ],
  providers: [
              AuthService,
              SubscriberService,
              ReservationService,
              EventManagementService,
              CaptionTypeService,
              MimeTypeGroupService,
              GalleryOrderCategoryService,
              GalleryGroupTypeService,
              GalleryOrderTypeService,
              PhotoGalleryService,
              SettingsService,
              NgbActiveModal,
              ModalCommunicationService,
              ComponentCommunicationService,
              SharedStaticDataService,
              EmployeeManagementService
            ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalAddGalleryGroupTypeComponent,
    ModalReadMessageComponent,
    ModalSendMessageComponent,
    ModalAddGalleryGroupTypeComponent,
    ModalLoginComponent,
    ModalLockComponent,
    ModalLogoutConfirmationComponent,
    ModalDeleteConfirmationComponent,
    ModalVanillaComponent,
    ModalLightboxComponent,
    ModalErrorMessageComponent
  ]
})

export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
  }
}
