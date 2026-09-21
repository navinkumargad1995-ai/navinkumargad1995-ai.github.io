import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { ScrollService } from '../../core/scroll.service';
import { profile, navLinks } from '../../data/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private readonly themeService = inject(ThemeService);
  private readonly scrollService = inject(ScrollService);

  readonly theme = this.themeService.theme;
  readonly activeSection = this.scrollService.activeSection;
  readonly mobileOpen = signal(false);
  readonly profile = profile;
  readonly navLinks = navLinks;

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
