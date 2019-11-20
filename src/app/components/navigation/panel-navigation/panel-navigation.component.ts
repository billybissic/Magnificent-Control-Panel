import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-navigation',
  templateUrl: './panel-navigation.component.html',
  styleUrls: ['./panel-navigation.component.scss']
})

export class PanelNavigationComponent implements OnInit {

  faUserCircle = faUserCircle;
  profile: any;

  constructor(public auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }


  name='test';

  /*checkForProfile() {
    console.log('inside checkForProfile()');
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
  }*/

  routeToEventScheduler() {
    this.router.navigateByUrl('control-panel/event-manager/event-scheduler');
  }

  routeToEventCalendar() {
    this.router.navigateByUrl('control-panel/event-manager/event-calendar');
  }

  routeToEventFlyers() {
    this.router.navigateByUrl('control-panel/event-flyers/manage-event-flyers');
  }

  routeToSubscriberGroups() {
    this.router.navigateByUrl('control-panel/customer-interactions/subscriber-groups');
  }

  routeToSubscribers() {
    this.router.navigateByUrl('control-panel/customer-interactions/mailing-list');
  }

  routeToReservationInquiries() {
    this.router.navigateByUrl('control-panel/customer-interactions/reservations');
  }

  routeToManageBiographies() {
    this.router.navigateByUrl('control-panel/entertainers/manage-entertainers');
  }

  routeToManageGalleries() {
    this.router.navigateByUrl('');
  }

  routeToCreateGallery() {
    this.router.navigateByUrl('control-panel/gallery-manager/create-gallery');
  }

  routeToGalleryViewer() {
    this.router.navigateByUrl('control-panel/gallery-viewer/gallery-viewer');
  }

  routeToGalleryStats() {
    this.router.navigateByUrl('');
  }

  routeToContentWarning() {
    this.router.navigateByUrl('control-panel/content-warning/manage-content-warning');
  }

  routeToDisclaimer() {
    this.router.navigateByUrl('control-panel/disclaimer/manage-discliamer');
  }

  routeToPrivacyPolicy() {
    this.router.navigateByUrl('control-panel/privacypolicy/manage-privacy-policy');
  }

  routeToTermsOfService() {
    this.router.navigateByUrl('control-panel/termsofservice/manage-termsofservice');
  }

  routeToTABartenders() {
    this.router.navigateByUrl('control-panel/employee-management/time-and-attendance/bartenders');
  }

  routeToTAEntertainers() {
    this.router.navigateByUrl('control-panel/employee-management/time-and-attendance/entertainers');
  }

  routeToBartenderApplications() {
    this.router.navigateByUrl('control-panel/employee-management/applications/employee-applications');
  }

  routeToEntertainerApplications() {
    this.router.navigateByUrl('control-panel/employee-management/applications/entertainer-applications');
  }

  routeToManageApplicationTypes() {
    this.router.navigateByUrl('control-panel/settings/manage-application-types');
  }

  routeToManageArrangementTypes() {
    this.router.navigateByUrl('control-panel/settings/manage-arrangement-types');
  }

  routeToManagePositionStatuses() {
    this.router.navigateByUrl('control-panel/settings/manage-position-statuses');
  }

  routeToManagePositionTypes() {
    this.router.navigateByUrl('control-panel/settings/manage-position-types');
  }

  routeToOpenPositions() {
    this.router.navigateByUrl( 'control-panel/employee-management/positions/create-new-positions');
  }

  routeToManagePositions() {
    this.router.navigateByUrl('control-panel/employee-management/positions/manage-open-positions');
  }

  routeToManageVolunteerPositions() {
    this.router.navigateByUrl('control-panel/customer-interactions/volunteer-position-form-manager');
  }

  routeToEnvironmentVariables() {
    this.router.navigateByUrl('control-panel/settings/environment-variables');
  }

  routeToGalleryConfigurations() {
    this.router.navigateByUrl('control-panel/gallery-manager/gallery-configurations');
  }

  routeToEventConfigurations() {
    this.router.navigateByUrl('control-panel/event-manager/event-static-data');
  }

  routeToReservationsConfigurations() {
    this.router.navigateByUrl('control-panel/customer-interactions/reservations-form-manager');
  }

  routeToWidgetSettings() {
    this.router.navigateByUrl('');
  }

  routeToTestModals() {
    this.router.navigateByUrl('control-panel/settings/modal-testing');
  }

  routeToManageBartenderApplication() {
    this.router.navigateByUrl('control-panel/employee-management/applications/manage-bartender-applications');
  }

  routeToManageEntertainerApplication() {
    this.router.navigateByUrl('control-panel/employee-management/applications/manage-entertainer-applications');
  }
}
