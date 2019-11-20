export class Subscriber {
      subscriberId: number;
      firstName: string;
      lastName: string;
      birthDay: string;
      subscriberEmail: string;

      constructor(subscriber_id: number,
                  first_name: string,
                  last_name: string,
                  birth_day: string,
                  subscriber_email: string ){
        this.subscriberId = subscriber_id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.birthDay = birth_day;
        this.subscriberEmail = subscriber_email;
      }
  }
