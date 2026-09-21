import { Component, HostListener, inject } from '@angular/core';
import { ScrollService } from './core/scroll.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { navLinks } from './data/portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly sectionIds = navLinks.map((link) => link.id);

  readonly progress = this.scrollService.progress;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollService.updateProgress();
    this.scrollService.updateActiveSection(this.sectionIds);
  }
}
