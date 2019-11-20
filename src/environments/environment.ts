// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  uat: false,
  development: true,
  /*  dev environment data services */

  calendarEventService: '[set development calendar event service url here]',
  eventManagementService: '[set development event management service url here]',
  employeeManagementService: '[set development employee management service url here]',
  galleryService: '[set development gallery service url here]',
  imageService: '[set development image service url here]',
  mailingListService: '[set development mailing list service url here]',
  mediaDataService: '[set development media data service url here]',
  reservationService: '[set development reservation service url here]',
  simpleContentService: '[set development simple content service url here]',
  settingsService: '[set development settings service url here]',
  staticSharedDataService: '[set development static shared data service url here]',

  clientID: '[set auth0 clientID]',
  domain: '[set auth0 domain]',
  callbackURL: '[set auth0 callback url]'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
