import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-vanilla',
  templateUrl: './modal-vanilla.component.html',
  styleUrls: ['./modal-vanilla.component.scss']
})
export class ModalVanillaComponent implements OnInit {

  faTimes = faTimes;

  @Input() name = `Default name`;
  @Input() description = `Default description`;
  @Input() img_url = `Default url`;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
