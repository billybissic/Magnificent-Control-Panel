import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth.service';
import { SubscriberService } from '../../../../services/subscriber-service/subscriber-service.service';
import { SubscriberGroup } from '../../../../controllers/subscriber/subscriber-group';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-subscriber-group',
  templateUrl: './create-subscriber-group.component.html',
  styleUrls: ['./create-subscriber-group.component.scss']
})
export class CreateSubscriberGroupComponent implements OnInit {

  faPlus = faPlus;
  private subscriberGroup: SubscriberGroup;
  private errorMessage;

  public subscriberGroupForm: FormGroup;

  constructor(public auth: AuthService,
              private subscriberService: SubscriberService) { }

  ngOnInit() {
    this.subscriberGroupForm = new FormGroup({
      subscriberGroupName: new FormControl('', Validators.required),
      subscriberGroupDescription: new FormControl('', Validators.required)
    });
  }

  resetSubscriberGroupModel() {
    this.subscriberGroupForm.setValue({subscriberGroupName: '',
      subscriberGroupDescription: ''});
    this.subscriberGroupForm.markAsUntouched();
    this.subscriberGroupForm.markAsPristine();
  }

  addNewSubscriberGroup() {

    this.subscriberGroup = new SubscriberGroup( null,
      this.subscriberGroupForm.controls['subscriberGroupName'].value,
      this.subscriberGroupForm.controls['subscriberGroupDescription'].value);

    this.subscriberService.createSubscriberGroup(this.subscriberGroup)
      .subscribe(response => {
      }, error => this.errorMessage = <any>error);

    this.resetSubscriberGroupModel();
    //location.reload();
  }
}
