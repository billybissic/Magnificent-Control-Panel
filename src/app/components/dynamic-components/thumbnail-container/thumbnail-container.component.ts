import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail-container',
  templateUrl: './thumbnail-container.component.html',
  styleUrls: ['./thumbnail-container.component.scss']
})
export class ThumbnailContainerComponent implements OnInit {

  @Input() img_src = ``;

  constructor() { }

  ngOnInit() {
  }

}
