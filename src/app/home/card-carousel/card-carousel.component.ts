import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-card-carousel',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css'],
})
export class CardCarouselComponent {
  @Input() cards: { title: string; imageUrl: string; description: string }[] =
    [];
  @Input() carouselItems: any[] = []
  @Input() buttonText: string ='leer mas';
  @Input() buttonLink: string = "/abount"
}
