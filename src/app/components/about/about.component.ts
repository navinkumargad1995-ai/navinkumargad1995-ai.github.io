import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { profile } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly profile = profile;
}
