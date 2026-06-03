import { Component } from '@angular/core';
import { RESTAURANT_INFO } from '../../data/restaurant-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  info = RESTAURANT_INFO;
  currentYear = new Date().getFullYear();
}
