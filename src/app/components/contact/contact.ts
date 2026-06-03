import {
  Component, AfterViewInit, inject, PLATFORM_ID, signal
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RESTAURANT_INFO } from '../../data/restaurant-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  private sanitizer = inject(DomSanitizer);

  info = RESTAURANT_INFO;
  mapEmbedUrl: SafeResourceUrl;

  // Form Signals
  name = signal('');
  phone = signal('');
  guests = signal('2');
  date = signal('');
  time = signal('');
  message = signal('');

  constructor() {
    // Sanitize the map embed src
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.info.mapEmbedSrc);
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.contact-section .reveal, .contact-section .reveal-left, .contact-section .reveal-right')
      .forEach(el => obs.observe(el));
  }

  submitBooking(event: Event) {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;

    let text = `Hello City Park Family Restaurant! I'd like to make a reservation:\n\n`;
    text += `*Name:* ${this.name()}\n`;
    text += `*Phone:* ${this.phone()}\n`;
    text += `*Guests:* ${this.guests()} persons\n`;
    if (this.date()) text += `*Date:* ${this.date()}\n`;
    if (this.time()) text += `*Time:* ${this.time()}\n`;
    if (this.message()) text += `*Message:* ${this.message()}\n`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${this.info.whatsapp}?text=${encodedText}`, '_blank');
  }
}
