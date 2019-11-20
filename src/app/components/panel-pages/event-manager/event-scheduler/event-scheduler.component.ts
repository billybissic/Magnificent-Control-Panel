import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../services/auth/auth.service';
import { Http, Response } from '@angular/http';
import { environment } from  './../../../../../environments/environment';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

/* services */
import { EventManagementService } from './../../../../services/event-management-service/event-management.service';

/* controllers */
import { CalendarEvent } from './../../../../controllers/events/calendar-event.interface';

@Component({
  selector: 'app-event-scheduler',
  templateUrl: './event-scheduler.component.html',
  styleUrls: ['./event-scheduler.component.scss']
})
export class EventSchedulerComponent implements OnInit {

  /* icons */
  faCalendarAlt = faCalendarAlt;
  faFolderOpen = faFolderOpen;
  faUpload = faUpload;
  faPalette = faPalette;
  faTrashAlt = faTrashAlt;

  calendarEventsUrl = environment.calendarEventService;

  /* form components */
  calendarEvent: CalendarEvent;
  selectedFile: File;

  /* show or hide flyer preview */
  public show = false;
  public flyerPreview: string;

  model = {
    allDay: false,
    resizableStart: true,
    resizableEnd: true,
    draggable: true
  };

  primaryToggle: any;
  secondaryToggle: any;

  startTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  endTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};

  modelStartDate = {
    year: '',
    month: '',
    day: ''
  };

  modelEndDate = {
    year: '',
    month: '',
    day: ''
  };

  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
  meridian = true;
  spinners = true;
  seconds = true;
  primaryColor: string = "#ffffff";
  secondaryColor: string = "#ffffff";

  errorMessage: string;
  eventScheduler: FormGroup;

  allDayEventAccepted: boolean;
  resizableStartAccepted: boolean;
  resizableEndingAccepted: boolean;
  draggableAccepted: boolean;

  eventTypes: any[];
  eventFrequencies: any[];
  eventStatuses: any[];
  eventType: any;
  eventUpload: string;

  constructor(public auth: AuthService,
              private http:Http,
              private eventManagementService: EventManagementService ) {  }

  ngOnInit() {
    this.eventScheduler = new FormGroup({
      eventTitle: new FormControl('', Validators.required),
      eventDescription: new FormControl('', Validators.required),
      eventImage: new FormControl(''),
      eventHost: new FormControl(''),
      eventLocation: new FormControl(''),
      eventType: new FormControl(''),
      eventFrequency: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl('')
    });

    this.allDayEventAccepted = false;
    this.resizableStartAccepted = true;
    this.resizableEndingAccepted = true;
    this.draggableAccepted = true;

    if (this.auth.isAuthenticated()) {
      this.getEventTypes();
      this.getEventFrequencies();
      this.getEventStatuses();
    }
  }

  getEventTypes(): void {
    this.eventManagementService.getEventTypes()
      .subscribe(
        (results: any[]) => {
          this.eventTypes = results
          console.log(this.eventTypes)
        },
        (error) => console.log(error)
      );
  }

  getEventFrequencies(): void {
    this.eventManagementService.getEventFrequency()
      .subscribe(
        (results: any[]) => {
          this.eventFrequencies = results
          console.log(this.eventFrequencies)
        },
        (error) => console.log(error)
      );
  }

  getEventStatuses(): void {
    this.eventManagementService.getEventStatuses()
      .subscribe(
        (results: any[]) => {
          this.eventStatuses = results
          console.log(this.eventStatuses)
        },
        (error) => console.log(error)
      );
  }

  setColors(): void {
    this.eventType = this.eventScheduler.controls['eventType'].value;
    this.primaryColor = this.eventType.primary_color;
    this.secondaryColor = this.eventType.secondary_color;
  }

  submit(): void {

    console.log('inside of submit');
    let startDate = new Date(this.modelStartDate.year + "-" +
    this.modelStartDate.month + "-" +
    this.modelStartDate.day + " " +
    this.startTime.hour + ":" +
    this.startTime.minute + ":" +
    this.startTime.second);

    let endDate = new Date(this.modelEndDate.year + "-" +
      this.modelEndDate.month + "-" +
      this.modelEndDate.day + " " +
      this.endTime.hour + ":" +
      this.endTime.minute + ":" +
      this.endTime.second);

    let eventStatusId;

    for (let status of this.eventStatuses)
    {
      if (status.event_status_name == 'In progress')
      {
        eventStatusId = status.event_status_id;
      }
    }

    console.log(this.primaryColor);
    console.log(this.secondaryColor);

    this.calendarEvent = {
      start: startDate.toISOString(),
      end: endDate.toISOString(),
      title: this.eventScheduler.controls['eventTitle'].value,
      colors: {
                primary_color: this.primaryColor,
                secondary_color: this.secondaryColor
              },
      allDay: this.model.allDay,
      resizable: {
                    beforeStart: this.model.resizableStart,
                    afterEnd: this.model.resizableEnd
                 },
      draggable: this.model.draggable,
      details: {
                  description: this.eventScheduler.controls['eventDescription'].value,
                  host: this.eventScheduler.controls['eventHost'].value,
                  location: this.eventScheduler.controls['eventLocation'].value,
                  event_type_id: this.eventType.event_type_id,
                  event_status_id: eventStatusId,
                  event_frequency_id: this.eventScheduler.controls['eventFrequency'].value,
                  image_names: this.eventScheduler.controls['eventImage'].value
               }
    };

    console.log('data to send to service');

    this.eventManagementService.addEvent(this.calendarEvent)
      .subscribe(resposne => {
      }, error => this.errorMessage = <any>error);

    this.resetEventScheduleForm();
  }

  uploadFlyer() {
    if(this.selectedFile === null) {
      console.log('no file to upload');
    } else {

      const fd = new FormData();
      fd.append('files', this.selectedFile, this.selectedFile.name);
      const imageName = this.selectedFile.name;
 //   this.http.post('http://localhost:8080/calendar-service/api/CalendarEvents/uploadFlyer', fd) */
      const uploadFlyerUrl = this.calendarEventsUrl + 'uploadFlyer';
      this.http.post(uploadFlyerUrl, fd)
      // this.http.post('http://cs1.menageadultclub.com:8080/calendar-service/api/CalendarEvents/uploadFlyer', fd)
        .subscribe( response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error
        }, () => {
          this.showPreview(imageName)
        });
    }
    this.show = true;
  }

  showPreview(imageName: String): void {
    console.log('inside show Preview');

    let fileExt = imageName.split('.').pop();
    if (fileExt === 'jpg' || fileExt === 'JPG' || fileExt === 'jpeg' || fileExt === 'JPEG')
    {
      this.flyerPreview = this.calendarEventsUrl + 'getEventFlyerJpeg?imageName=' +  imageName;
    }

    if (fileExt === 'png' || fileExt === 'PNG')
    {
      this.flyerPreview = this.calendarEventsUrl = 'getEventFlyerPng?imageName=' + imageName;
    }

    if (fileExt === 'gif' || fileExt === 'GIF')
    {
      this.flyerPreview = this.calendarEventsUrl = 'getEventFlyerGif?imageName=' + imageName;
    }
    // this.flyerPreview = this.calendarEventsUrl + 'getEventFlyer?imageName=' + imageName;
    // this.flyerPreview = 'http://cs1.menageadultclub.com:8080/calendar-service/api/CalendarEvents/getEventFlyer?imageName=' + imageName;
    this.show = true;
  }

  hidePreview(): void {
    this.show = false;
  }

  removeFlyer() {
    this.show = false;
    const imageName = this.selectedFile.name;
    this.eventManagementService.deleteEventFlyer(imageName)
      .subscribe( response => {
        console.log(response);
      }, error => {
        this.errorMessage = <any>error
      }, () => {
        this.hidePreview();
      })
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.eventScheduler.controls['eventImage'].setValue(this.selectedFile.name);
  }

  resetEventScheduleForm() {
    this.eventScheduler.reset();
    this.eventScheduler.patchValue({

      eventType: '',
      eventFrequency: '',
      eventAllDayEvent: 'false',
      eventResizableStart: 'true',
      eventResizableEnding: 'true',
      eventDraggable: 'true'
    });

    this.startTime = {hour: 13, minute: 30, second: 30};
    this.endTime = {hour: 13, minute: 30, second: 30};

    this.primaryColor = "#fff";
    this.secondaryColor = "#fff";

    this.model = {
      allDay: false,
      resizableStart: true,
      resizableEnd: true,
      draggable: true
    };

    //this.eventScheduler.markAsUntouched;
    //this.eventScheduler.markAsPristine;
  }
}
