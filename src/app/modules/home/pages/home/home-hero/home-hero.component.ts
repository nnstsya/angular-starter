import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})
export class HomeHeroComponent {
  @Output() scrollInto = new EventEmitter<string>()

  scrollIntoBroadcast(): void {
    this.scrollInto.emit('#home-broadcast-section')
  }
}
