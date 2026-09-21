import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { projects } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly projects = projects;
}
