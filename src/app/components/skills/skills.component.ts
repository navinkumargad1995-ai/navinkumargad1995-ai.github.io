import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { skillGroups } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  readonly skillGroups = skillGroups;
}
