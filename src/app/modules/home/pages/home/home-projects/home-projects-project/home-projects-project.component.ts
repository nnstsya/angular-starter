// eslint-disable-next-line import/no-relative-parent-imports
import { ProjectModel } from '../../../../interfaces/project.model'

import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'app-home-projects-project',
  templateUrl: './home-projects-project.component.html',
  styleUrls: ['./home-projects-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProjectsProjectComponent {
  @Input() project: ProjectModel = { index: 0, date: '', achievements: [] }
}
