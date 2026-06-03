import {
  Component, HostListener, OnInit, inject, signal, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RESTAURANT_INFO } from '../../data/restaurant-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  info = RESTAURANT_INFO;
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  navLinks = [
    { label: 'Home',    href: '#home' },
    { label: 'About',   href: '#about' },
    { label: 'Menu',    href: '#menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateScrollState();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateScrollState();
    }
  }

  private updateScrollState() {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  scrollTo(href: string) {
    if (isPlatformBrowser(this.platformId)) {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash
        history.pushState(null, '', href);
      }
    }
    this.closeMenu();
  }

  reserveTable() {
    if (isPlatformBrowser(this.platformId)) {
      const msg = encodeURIComponent(
        'Hello! I would like to reserve a table at City Park Family Restaurant. Please confirm availability.'
      );
      window.open(`https://wa.me/${this.info.whatsapp}?text=${msg}`, '_blank');
    }
  }

  callNow() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `tel:${this.info.phoneRaw}`;
    }
  }
}
