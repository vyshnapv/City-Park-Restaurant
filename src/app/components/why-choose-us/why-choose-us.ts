import {
  Component,
  AfterViewInit,
  inject,
  PLATFORM_ID
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

import {
  WHY_CHOOSE,
  WhyChooseCard
} from '../../data/restaurant-data';

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css'
})
export class WhyChooseUsComponent implements AfterViewInit {

  private platformId = inject(PLATFORM_ID);

  cards: WhyChooseCard[] = WHY_CHOOSE;

  ngAfterViewInit() {

    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    document
      .querySelectorAll('.why-section .reveal, .why-section .reveal-scale')
      .forEach(el => observer.observe(el));
  }
}