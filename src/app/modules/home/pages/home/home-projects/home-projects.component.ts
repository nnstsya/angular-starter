// eslint-disable-next-line import/no-relative-parent-imports
import { ProjectModel } from '../../../interfaces/project.model'

import { Component } from '@angular/core'

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss'],
})
export class HomeProjectsComponent {
  projects: ProjectModel[] = [
    { index: 1,
      date: 'Старт',
      achievements: ['Ліквідація ДАБІ', 'Створення Сервісної служби']
    },
    { index: 2,
      date: 'Березень — Травень 2020',
      achievements: ['Перехідний період', 'Мораторій на інспекційний держконтроль']
    },
    { index: 3,
      date: 'Червень 2020',
      achievements: ['Створення ДІМ', 'Запуск нового реєстру']
    },
    { index: 4,
      date: 'Вересень 2020',
      achievements: ['Державне агентство з питань технічного регулювання у містобудуванні']
    },
    { index: 5,
      date: 'Січень 2021',
      achievements: ['Запровадження страхування']
    },
  ]
}
