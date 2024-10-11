import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-successful-games',
  standalone: true,
  imports: [],
  templateUrl: './successful-games.component.html',
  styleUrl: './successful-games.component.css'
})
export class SuccessfulGamesComponent {
  @Input() cardText1: string = '';
  @Input() cardText2: string = '';
  @Input() imageUrl: string = '';
  @Input() buttonLink1: string = '/blog';
  @Input() buttonText: string = 'Leer más';
}

