import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { profile, heroRoles, orbitBadges } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly profile = profile;
  readonly orbitBadges = orbitBadges;
  readonly typedText = signal('');

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.timeoutId = setTimeout(() => this.typeLoop(), 400);
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private typeLoop(): void {
    const current = heroRoles[this.roleIndex];

    if (!this.deleting) {
      this.charIndex++;
      this.typedText.set(current.slice(0, this.charIndex));
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timeoutId = setTimeout(() => this.typeLoop(), 1600);
        return;
      }
    } else {
      this.charIndex--;
      this.typedText.set(current.slice(0, this.charIndex));
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % heroRoles.length;
      }
    }

    this.timeoutId = setTimeout(() => this.typeLoop(), this.deleting ? 35 : 65);
  }
}
