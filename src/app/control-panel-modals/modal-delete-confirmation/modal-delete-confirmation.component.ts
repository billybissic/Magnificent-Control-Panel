import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete-confirmation',
  templateUrl: './modal-delete-confirmation.component.html',
  styleUrls: ['./modal-delete-confirmation.component.scss']
})
export class ModalDeleteConfirmationComponent implements OnInit {

  @Input() itemToDelete = 'default item to delete';
  @Output() deleteItem = false;

  constructor() { }

  ngOnInit() {
  }

}
