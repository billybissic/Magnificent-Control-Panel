import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-error-message',
  templateUrl: './modal-error-message.component.html',
  styleUrls: ['./modal-error-message.component.scss']
})
export class ModalErrorMessageComponent implements OnInit {

  title = `Default Title`;
  errorMessage = `Default error message`;

  constructor() { }

  ngOnInit() {
  }

}
