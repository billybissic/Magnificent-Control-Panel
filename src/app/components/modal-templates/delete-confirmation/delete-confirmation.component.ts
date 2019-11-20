import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  @Input() itemToDelete = `default item`;

  constructor() { }

  ngOnInit() {
  }

}
