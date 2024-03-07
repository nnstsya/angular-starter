import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'

import { BasePageComponent } from 'src/app/core/abstracts/base-page.component'
import { LangService } from 'src/app/core/services/lang.service'
import { SsrService } from 'src/app/core/services/ssr.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BasePageComponent {
  constructor(
    protected override readonly titleService: Title,
    protected override readonly metaService: Meta,
    protected override readonly langService: LangService,
    readonly ssrService: SsrService,
    private readonly route: ActivatedRoute,
  ) {
    super(langService, titleService, metaService)

    // this.route.data.pipe(takeUntilDestroyed()).subscribe((data) => {
    //   if (data?.home) {
    //     this.setBaseData(data?.home)
    //   }

    //   this.renderPageMeta()
    // })
  }

  onScrollInto(selector: string): void {
    document.querySelector(selector)?.scrollIntoView()
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: WheelEvent): void {
    this.revealSection()
  }

  revealSection(): void {
    const reveals = document.querySelectorAll('.reveal')
    const revealsArray: Element[] = Array.from(reveals)
    for (const reveal of revealsArray) {
      const windowHeight = window.innerHeight
      const revealTop = reveal.getBoundingClientRect().top
      const revealPoint = 80

      if (revealTop < windowHeight - revealPoint) {
        reveal.classList.add('active')
      } else {
        reveal.classList.remove('active')
      }
    }
  }
}
