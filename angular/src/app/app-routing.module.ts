import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appendFile } from 'fs';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'calendar', component: CalendarComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gallery', component: GalleryComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
