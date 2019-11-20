import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faStop } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { faCompress } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;
  faShareAlt = faShareAlt;
  faExpand = faExpand;
  faCompress = faCompress;

  @Input() name = `Default name`;
  @Input() description = `Default description`;
  @Input() img_url = `Default Url`;

  constructor() { }

  ngOnInit() {
  }

}
