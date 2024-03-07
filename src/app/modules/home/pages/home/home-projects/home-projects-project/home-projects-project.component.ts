import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { ProjectModel } from 'src/app/modules/home/models/project.model'

@Component({
  selector: 'app-home-projects-project',
  templateUrl: './home-projects-project.component.html',
  styleUrls: ['./home-projects-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProjectsProjectComponent {
  @Input() project: ProjectModel = { index: 0, date: '', achievements: [] }
}
