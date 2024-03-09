import { HomeContactsComponent } from './pages/home/home-contacts/home-contacts.component'
import { HomeProjectsProjectComponent } from './pages/home/home-projects/home-projects-project/home-projects-project.component'
import { HomeSubscriptionFormComponent } from './pages/home/home-subscription/home-subscription-form/home-subscription-form.component'
import { HomeSubscriptionComponent } from './pages/home/home-subscription/home-subscription.component'
import { NgbdModalConfirmComponent } from './pages/home/home-subscription/ngbd-modal-confirm/ngbd-modal-confirm.component'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatGridListModule } from '@angular/material/grid-list'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeBroadcastComponent } from 'src/app/modules/home/pages/home/home-broadcast/home-broadcast.component'
import { HomeHeroComponent } from 'src/app/modules/home/pages/home/home-hero/home-hero.component'
import { HomeProjectsComponent } from 'src/app/modules/home/pages/home/home-projects/home-projects.component'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component'

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeProjectsComponent,
    HomeBroadcastComponent,
    HomeProjectsProjectComponent,
    HomeContactsComponent,
    HomeSubscriptionComponent,
    NgbdModalConfirmComponent,
    HomeSubscriptionFormComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule, FormsModule, MatGridListModule, ReactiveFormsModule],
})
export class HomeModule {}
