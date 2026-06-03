import { Component, OnInit, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RESTAURANT_INFO } from '../../data/restaurant-data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  info = RESTAURANT_INFO;
  isOpen = signal(false);
  currentHours = signal('');

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkOpenStatus();
    }
  }

  private checkOpenStatus() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const time = h + m / 60;
    const day = now.getDay(); // 0=Sun, 6=Sat
    const isWeekend = day === 0 || day === 6;

    const open  = isWeekend ? this.info.openWeekendStart  : this.info.openWeekdayStart;
    const close = isWeekend ? this.info.openWeekendEnd    : this.info.openWeekdayEnd;

    this.isOpen.set(time >= open && time < close);
    this.currentHours.set(isWeekend ? this.info.hoursWeekend : this.info.hoursWeekday);
  }

  scrollTo(href: string) {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  callNow() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `tel:${this.info.phoneRaw}`;
    }
  }

  getDirections() {
    if (isPlatformBrowser(this.platformId)) {
      window.open(this.info.mapUrl, '_blank');
    }
  }
}
