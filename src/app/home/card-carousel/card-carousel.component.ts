import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-card-carousel',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent {
  @Input() carouselItems: any[] = [];
  @Input() title1: string = '';
  @Input() buttonText: string = 'Leer más';
  @Input() buttonLink: string = '/abount';
}
