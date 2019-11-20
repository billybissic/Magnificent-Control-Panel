import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-message',
  templateUrl: './read-message.component.html',
  styleUrls: ['./read-message.component.scss']
})
export class ReadMessageComponent implements OnInit {

  messageBody = `Default message body.`;
  messageSender = `Default message sender.`;
  messageSubject = `Default message subject.`;

  constructor() { }

  ngOnInit() {
  }

}
