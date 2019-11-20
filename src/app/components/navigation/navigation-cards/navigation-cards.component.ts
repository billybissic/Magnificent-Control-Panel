import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

import { SubscriberService } from './../../../services/subscriber-service/subscriber-service.service';
import { ReservationService } from './../../../services/reservation-service/reservation.service';

@Component({
  selector: 'app-navigation-cards',
  templateUrl: './navigation-cards.component.html',
  styleUrls: ['./navigation-cards.component.scss']
})
export class NavigationCardsComponent implements OnInit {

  subscriberCount: any;
  constructor(public auth: AuthService,
              private subscriberService: SubscriberService,
              private reservationService: ReservationService) { }

  ngOnInit() {

    this.subscriberService.getSubscribersCount()
    .subscribe(
      (results: any[]) => {
        this.subscriberCount = results
        console.log(this.subscriberCount)
      },
      (error) => console.log(error)
    );
  }

}
