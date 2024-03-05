import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeBroadcastComponent } from 'src/app/modules/home/pages/home/home-broadcast/home-broadcast.component'
import { HomeHeroComponent } from 'src/app/modules/home/pages/home/home-hero/home-hero.component'
import { HomeProjectsComponent } from 'src/app/modules/home/pages/home/home-projects/home-projects.component'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';
import { HomeProjectsProjectComponent } from './pages/home/home-projects/home-projects-project/home-projects-project.component'
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  declarations: [HomeComponent, HomeHeroComponent, HomeProjectsComponent, HomeBroadcastComponent, HomeProjectsProjectComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule, FormsModule, MatGridListModule],
})
export class HomeModule {}
