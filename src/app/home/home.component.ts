import { Component } from '@angular/core';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from '../app.component';
import { SuccessfulGamesComponent } from './successful-games/successful-games.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardCarouselComponent,
    NavbarComponent,
    FooterComponent,
    AppComponent,
    SuccessfulGamesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
}
