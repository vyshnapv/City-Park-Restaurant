import {
  Component, OnInit, AfterViewInit, inject, PLATFORM_ID, ElementRef, QueryList, ViewChildren
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { STATS } from '../../data/restaurant-data';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements OnInit, AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  stats = STATS;
  counterValues: number[] = [];
  private observer?: IntersectionObserver;

  @ViewChildren('counterEl') counterEls!: QueryList<ElementRef<HTMLElement>>;

  ngOnInit() {
    this.counterValues = this.stats.map(() => 0);
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.setupScrollReveal();
    this.setupCounterObserver();
  }

  private setupScrollReveal() {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.about-section .reveal, .about-section .reveal-left, .about-section .reveal-right')
      .forEach(el => revealObserver.observe(el));
  }

  private setupCounterObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            this.animateCounters();
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    const statsEl = document.querySelector('.stats-row');
    if (statsEl) this.observer.observe(statsEl);
  }

  private animateCounters() {
    this.stats.forEach((stat, i) => {
      let current = 0;
      const target = stat.value;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      const interval = setInterval(() => {
        current = Math.min(current + increment, target);
        this.counterValues[i] = Math.floor(current);
        if (current >= target) clearInterval(interval);
      }, duration / steps);
    });
  }
}
