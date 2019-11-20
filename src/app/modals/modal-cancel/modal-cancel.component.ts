import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cancel',
  templateUrl: './modal-cancel.component.html',
  styleUrls: ['./modal-cancel.component.scss']
})
export class ModalCancelComponent implements OnInit {

  @Input() title = `Information`;
  
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
