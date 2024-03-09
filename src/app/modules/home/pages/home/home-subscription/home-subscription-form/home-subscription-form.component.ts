import { Observable, take } from 'rxjs'

import { HttpClient } from '@angular/common/http'
import { Component, ElementRef } from '@angular/core'
import { FormBuilder, FormControl, FormControlStatus, FormGroup, Validators } from '@angular/forms'

import { BaseFormComponent } from 'src/app/core/abstracts/base-form.component'

import { SubscriptionApiService } from 'src/app/modules/home/services/subscription-api.service'
import { UniqueValidator } from 'src/app/modules/home/validators/unique.validator'

interface SubscriptionForm {
  email: FormControl<string | null>
}

@Component({
  selector: 'app-home-subscription-form',
  templateUrl: './home-subscription-form.component.html',
  styleUrls: ['./home-subscription-form.component.scss'],
})
export class HomeSubscriptionFormComponent extends BaseFormComponent {
  formGroup: FormGroup<SubscriptionForm> = this.formBuilder.group<SubscriptionForm>({
    email: this.formBuilder.control<string>(
      '',
      [Validators.email, Validators.required],
      [UniqueValidator.createValidator(this.subscriptionApiService)],
    ),
  })

  get errorKeys(): string {
    return Object.keys({
      ...this.formGroup.errors,
      ...this.email.errors,
    })[0]
  }

  get email(): SubscriptionForm['email'] {
    return this.formGroup.controls.email
  }

  constructor(
    public formBuilder: FormBuilder,
    public elementRef: ElementRef,
    private httpClient: HttpClient,
    private subscriptionApiService: SubscriptionApiService,
  ) {
    super()
  }

  override submit(): void {
    this.submitPrepare()
    if (this.formGroup.valid) {
      this.isPending = true
      this.submitted.emit()
      this.send()
    } else if (this.formGroup.pending) {
      this.formGroup.statusChanges.pipe(take(1)).subscribe((status: FormControlStatus) => {
        if (status === 'VALID') {
          this.isPending = true
          this.submitted.emit()
          this.send()
        } else {
          this.scrollToError()
        }
      })
    } else if (this.formGroup.invalid) {
      this.scrollToError()
    }
  }

  prepareRequest(): Observable<unknown> {
    return this.httpClient.post('https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/create', { email: this.email.value })
  }
}
