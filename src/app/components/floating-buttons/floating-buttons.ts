import {
  Component, OnInit, OnDestroy, inject, PLATFORM_ID, signal
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RESTAURANT_INFO } from '../../data/restaurant-data';

@Component({
  selector: 'app-floating-buttons',
  templateUrl: './floating-buttons.html',
  styleUrl: './floating-buttons.css'
})
export class FloatingButtonsComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  info = RESTAURANT_INFO;
  showBackToTop = signal(false);

  private scrollListener = () => {
    if (!isPlatformBrowser(this.platformId)) return;
    this.showBackToTop.set(window.scrollY > 400);
  };

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) return;
    window.removeEventListener('scroll', this.scrollListener);
  }

  scrollToTop() {
    if (!isPlatformBrowser(this.platformId)) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
