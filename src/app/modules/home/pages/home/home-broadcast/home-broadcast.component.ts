import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-home-broadcast',
  templateUrl: './home-broadcast.component.html',
  styleUrls: ['./home-broadcast.component.scss'],
})
export class HomeBroadcastComponent {
  videoIsPlaying = false

  toggleVideoIsPlaying(): void {
    this.videoIsPlaying = !this.videoIsPlaying
  }
}
