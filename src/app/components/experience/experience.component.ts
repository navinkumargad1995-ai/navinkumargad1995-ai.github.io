import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { experienceItems } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  readonly experienceItems = experienceItems;
}
