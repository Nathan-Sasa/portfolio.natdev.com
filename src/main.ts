import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

import { provideRouter } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent},
]


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
.then(() => console.log('Application started'))
.catch((err) => console.error(err));
