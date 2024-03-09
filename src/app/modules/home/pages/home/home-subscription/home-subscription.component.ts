import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { NgbdModalConfirmComponent } from './ngbd-modal-confirm/ngbd-modal-confirm.component'

import { Component } from '@angular/core'

import { LoaderService } from 'src/app/core/services/loader.service'

@Component({
  selector: 'app-home-subscription',
  templateUrl: './home-subscription.component.html',
  styleUrls: ['./home-subscription.component.scss'],
})
export class HomeSubscriptionComponent {
  constructor(private modalService: NgbModal, private loaderService: LoaderService) {}

  openModal(): void {
    this.modalService.open(NgbdModalConfirmComponent)
  }

  showLoader(): void {
    this.loaderService.showSiteLoader()
  }

  hideLoader(): void {
    this.loaderService.hideSiteLoader()
  }
}
