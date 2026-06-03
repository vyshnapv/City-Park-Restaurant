import {
  Component, AfterViewInit, inject, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { TESTIMONIALS } from '../../data/restaurant-data';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class TestimonialsComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  testimonials = TESTIMONIALS;
  currentIndex = 0;
  indicators: number[] = [];

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.testimonials-section .reveal, .testimonials-section .reveal-scale')
      .forEach(el => obs.observe(el));
    
    // Calculate indicators based on testimonials and visible items
    this.calculateIndicators();
  }

  calculateIndicators() {
    const windowWidth = window.innerWidth;
    let itemsPerSlide = 3;
    
    if (windowWidth <= 576) {
      itemsPerSlide = 1;
    } else if (windowWidth <= 992) {
      itemsPerSlide = 2;
    }
    
    const totalSlides = Math.ceil(this.testimonials.length / itemsPerSlide);
    this.indicators = Array(totalSlides).fill(0).map((_, i) => i);
  }

  nextSlide() {
    const windowWidth = window.innerWidth;
    let itemsPerSlide = 3;
    
    if (windowWidth <= 576) {
      itemsPerSlide = 1;
    } else if (windowWidth <= 992) {
      itemsPerSlide = 2;
    }
    
    const maxIndex = Math.ceil(this.testimonials.length / itemsPerSlide) - 1;
    
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to start
    }
  }

  prevSlide() {
    const windowWidth = window.innerWidth;
    let itemsPerSlide = 3;
    
    if (windowWidth <= 576) {
      itemsPerSlide = 1;
    } else if (windowWidth <= 992) {
      itemsPerSlide = 2;
    }
    
    const maxIndex = Math.ceil(this.testimonials.length / itemsPerSlide) - 1;
    
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = maxIndex; // Loop to end
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
