import { AfterViewInit, Component, ElementRef, OnDestroy, inject, signal } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { stats } from '../../data/portfolio-data';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './stats.component.html',
})
export class StatsComponent implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private animationFrame?: number;
  private animated = false;

  readonly stats = stats;
  readonly displayValues = signal(stats.map(() => 0));

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) {
      this.displayValues.set(stats.map((s) => s.target));
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !this.animated) {
            this.animated = true;
            this.animateAll();
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  private animateAll(): void {
    const duration = 1200;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      this.displayValues.set(stats.map((s) => Math.floor(progress * s.target)));
      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(step);
      } else {
        this.displayValues.set(stats.map((s) => s.target));
      }
    };

    this.animationFrame = requestAnimationFrame(step);
  }
}
