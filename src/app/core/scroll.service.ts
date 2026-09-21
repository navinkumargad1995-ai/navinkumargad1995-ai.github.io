import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly progress = signal(0);
  readonly activeSection = signal('home');

  updateProgress(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
  }

  updateActiveSection(sectionIds: string[]): void {
    const scrollPos = window.scrollY + 120;
    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        current = id;
      }
    }
    this.activeSection.set(current);
  }
}
