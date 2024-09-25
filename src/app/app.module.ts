import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,    // Importas CommonModule
    FontAwesomeModule,  // Importas el módulo de FontAwesome
    HomeComponent,  
    AppComponent    
  ],
})
export class AppModule { }