import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { NgbdModalConfirmComponent } from './ngbd-modal-confirm/ngbd-modal-confirm.component'

import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-home-subscription',
  templateUrl: './home-subscription.component.html',
  styleUrls: ['./home-subscription.component.scss'],
})
export class HomeSubscriptionComponent {
  form: FormGroup
  submitted = false

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get email(): any {
    return this.form.get('email')
  }

  openModal(): void {
    this.modalService.open(NgbdModalConfirmComponent)
  }

  onSubmit(): void {
    this.submitted = true
    if (this.form.invalid) {
      return
    } else {
      this.openModal()
    }
  }
}
