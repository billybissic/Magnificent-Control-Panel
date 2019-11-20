import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { faSortNumericDown } from '@fortawesome/free-solid-svg-icons';
import { faSortNumericUp } from '@fortawesome/free-solid-svg-icons';

import { Subscriber } from './../../../controllers/subscriber/subscriber';
import { SubscriberService } from './../../../services/subscriber-service/subscriber-service.service';

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.scss']
})
export class MailingListComponent implements OnInit {

  faCoffee = faCoffee;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faEdit = faEdit;
  faTrash = faTrash;
  faFileExport = faFileExport;
  faSortNumericDown = faSortNumericDown;
  faSortNumericUp = faSortNumericUp;

  checked = false;
  leadingCheckBox = false;

  subscribers: any[];

  constructor(public auth: AuthService,
              private subscriberService: SubscriberService) { }

  ngOnInit() {

  }
}
