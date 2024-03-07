import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { Component, inject } from '@angular/core'

@Component({
  selector: 'app-ngbd-modal-confirm',
  templateUrl: './ngbd-modal-confirm.component.html',
  styleUrls: ['./ngbd-modal-confirm.component.scss'],
})
export class NgbdModalConfirmComponent {
  modal = inject(NgbActiveModal)
}
