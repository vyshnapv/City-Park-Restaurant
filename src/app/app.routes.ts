import { Routes } from '@angular/router';

import { HeroComponent } from './components/hero/hero';

import { AboutComponent } from './components/about/about';

import { SignatureDishesComponent } from './components/signature-dishes/signature-dishes';

import { TestimonialsComponent } from './components/testimonials/testimonials';

import { ContactComponent } from './components/contact/contact';



export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HeroComponent },

  { path: 'about', component: AboutComponent },

  { path: 'menu', component: SignatureDishesComponent },

  { path: 'reviews', component: TestimonialsComponent },

  { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: '/home' }

];

