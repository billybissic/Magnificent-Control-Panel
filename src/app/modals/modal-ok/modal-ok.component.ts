import { Component, OnInit, Input} from '@angular/core';
import { ModalCommunicationService } from '../../services/modal-communication-service/modal-communication.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-ok',
  templateUrl: './modal-ok.component.html',
  styleUrls: ['./modal-ok.component.scss']
})
export class ModalOkComponent implements OnInit {

  @Input() title = `Default Title`;

  constructor(public activeModal: NgbActiveModal,
              private modalCommunicationService: ModalCommunicationService ) {
  }

  ngOnInit() {
  }

  close(): void {
    this.activeModal.close();
  }

}
