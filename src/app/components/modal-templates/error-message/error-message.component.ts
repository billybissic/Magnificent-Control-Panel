import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input() title = `default title`;
  @Input() errorMessage = `default error message!`;

  constructor() { }

  ngOnInit() {
  }

}
