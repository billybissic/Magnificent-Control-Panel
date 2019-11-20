import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-lightbox',
  templateUrl: './modal-lightbox.component.html',
  styleUrls: ['./modal-lightbox.component.scss']
})
export class ModalLightboxComponent implements OnInit {

  @Input() name = `Default name`;
  @Input() description = `Default description`;
  @Input() img_url = `Default url`;

  constructor() { }

  ngOnInit() {
  }

}
