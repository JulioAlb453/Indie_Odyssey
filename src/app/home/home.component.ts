import { Component } from '@angular/core';
import { CardCarouselComponent } from '../card-carousel/card-carousel.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SuccessfulGamesComponent } from '../successful-games/successful-games.component';
import { GoldenEraComponent } from "../golden-era/golden-era.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardCarouselComponent, FooterComponent, NavbarComponent, SuccessfulGamesComponent, GoldenEraComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
