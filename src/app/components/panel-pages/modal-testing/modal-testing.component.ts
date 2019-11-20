import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddGalleryGroupTypeComponent } from '../../../control-panel-modals/modal-add-gallery-group-type/modal-add-gallery-group-type.component';
import { ModalLoginComponent } from '../../../control-panel-modals/modal-login/modal-login.component';
import { ModalDeleteConfirmationComponent } from '../../../control-panel-modals/modal-delete-confirmation/modal-delete-confirmation.component';
import { ModalLockComponent } from '../../../control-panel-modals/modal-lock/modal-lock.component';
import { ModalReadMessageComponent } from '../../../control-panel-modals/modal-read-message/modal-read-message.component';
import { ModalSendMessageComponent } from '../../../control-panel-modals/modal-send-message/modal-send-message.component';
import { ModalLightboxComponent } from '../../../control-panel-modals/modal-lightbox/modal-lightbox.component';
import { ModalErrorMessageComponent } from '../../../control-panel-modals/modal-error-message/modal-error-message.component';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-modal-testing',
  templateUrl: './modal-testing.component.html',
  styleUrls: ['./modal-testing.component.scss']
})
export class ModalTestingComponent implements OnInit {

  title = 'title';
  constructor(public auth: AuthService,
              private modalService: NgbModal) { }

  ngOnInit() {
  }


  openNewGalleryGroupTypeModal() {

    const modalRef= this.modalService.open(ModalAddGalleryGroupTypeComponent, {size: 'lg'});
    modalRef.componentInstance.title = 'Add/Modify Gallery Group Type';
  }

  openLoginModal() {
    const modalRef = this.modalService.open(ModalLoginComponent, {size: 'sm'});
    modalRef.componentInstance.title = "Control Panel Login";
  }

  openDeleteConfirmation() {
    const modalRef = this.modalService.open(ModalDeleteConfirmationComponent, {size: 'sm'})
    modalRef.componentInstance.itemToDelete = "Test Object";
  }

  openLockScreenModal() {
    const modalRef = this.modalService.open(ModalLockComponent, {size: 'sm'})
    modalRef.componentInstance.title = "Locked"
  }

  openReadMessage() {
    const modalRef = this.modalService.open(ModalReadMessageComponent, {size: 'sm'})
    modalRef.componentInstance.title = "Message"
  }

  openSendMessage() {
    this.modalService.dismissAll();
    const modalRef = this.modalService.open(ModalSendMessageComponent, {size: 'sm'})
    modalRef.componentInstance.title = "Send Message"
  }

  openImageLightBox() {
    const modalRef = this.modalService.open(ModalLightboxComponent);
    modalRef.componentInstance.name = "image tester";
    modalRef.componentInstance.description = "image tester description";
    modalRef.componentInstance.img_url = "img.com/url/img_url.jpg";
  }

  openErrorMessage() {
    const modalRef = this.modalService.open(ModalErrorMessageComponent);
    modalRef.componentInstance.title = "Error!";
    modalRef.componentInstance.errorMessage = "This is a test error message";
  }

}
