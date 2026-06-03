import {
  Component, AfterViewInit, inject, PLATFORM_ID,
  signal, computed
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { DISHES, DISH_CATEGORIES, Dish } from '../../data/restaurant-data';

@Component({
  selector: 'app-signature-dishes',
  imports: [CommonModule],
  templateUrl: './signature-dishes.html',
  styleUrl: './signature-dishes.css'
})
export class SignatureDishesComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  allDishes = DISHES;
  categories = DISH_CATEGORIES;
  selectedCategory = signal('All');

  filteredDishes = computed(() =>
    this.selectedCategory() === 'All'
      ? this.allDishes
      : this.allDishes.filter(d => d.category === this.selectedCategory())
  );

  setCategory(cat: string) {
    this.selectedCategory.set(cat);
    setTimeout(() => this.observeCards(), 0);
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.setupObserver();
    this.observeCards();
  }

  private setupObserver() {
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          this.observer?.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
  }

  private observeCards() {
    if (!isPlatformBrowser(this.platformId) || !this.observer) return;
    document.querySelectorAll('.dishes-section .reveal, .dishes-section .reveal-scale')
      .forEach(el => {
        el.classList.remove('visible');
        this.observer!.observe(el);
      });
  }

  orderDish(dish: Dish) {
    if (!isPlatformBrowser(this.platformId)) return;
    const msg = encodeURIComponent(
      `Hello! I'd like to order *${dish.name}* (${dish.price}) from City Park Family Restaurant. Please confirm availability.`
    );
    window.open(`https://wa.me/9207045332?text=${msg}`, '_blank');
  }
}