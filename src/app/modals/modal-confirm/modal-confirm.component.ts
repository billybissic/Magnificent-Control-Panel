import { Component, OnInit, Input } from '@angular/core';
import { ModalCommunicationService } from '../../services/modal-communication-service/modal-communication.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  @Input() title = `Default Title`;

  message: string;

  constructor(
    public activeModal: NgbActiveModal,
    private modalCommunicationService: ModalCommunicationService
  ) { }

  ngOnInit() {
    this.modalCommunicationService.currentMessage
      .subscribe(message => this.message = message);
  }

  yesMessage() {
    this.modalCommunicationService.changeMessage("Yes");
    this.activeModal.close();
  }

  noMessage() {
    this.modalCommunicationService.changeMessage("No");
    this.activeModal.close();
  }

}
