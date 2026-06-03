import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us';
import { SignatureDishesComponent } from './components/signature-dishes/signature-dishes';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { FloatingButtonsComponent } from './components/floating-buttons/floating-buttons';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    WhyChooseUsComponent,
    SignatureDishesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    FloatingButtonsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
