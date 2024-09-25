import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app/app-routing.module'; // importing this from app-routing

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) //registering routes
  ]
}).catch((err) => console.error(err));