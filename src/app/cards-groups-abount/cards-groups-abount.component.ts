import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";  // Importa CommonModule

@Component({
  selector: 'app-card-group-abount',
  standalone: true,
  imports: [CommonModule, FooterComponent],  
  templateUrl: './cards-groups-abount.component.html',
  styleUrls: ['./cards-groups-abount.component.css']
})
export class CardGroupAbountComponent {
  @Output() cardSelected = new EventEmitter<any>();

  cards = [
    { title: 'Card 1', text: 'This is card 1 description', img: 'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/UQYLSYHAQBJMPGI2NGCTYRQNFI.jpg' },
    { title: 'Card 2', text: 'This is card 2 description', img: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Maddy_Thorson.jpg' },
    { title: 'Card 3', text: 'This is card 3 description', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f7d14176115247.5e49b7c1bf1e7.jpg' },
    // Agrega más cards
  ];

  onCardClick(card: any) {
    this.cardSelected.emit(card);
  }
}
