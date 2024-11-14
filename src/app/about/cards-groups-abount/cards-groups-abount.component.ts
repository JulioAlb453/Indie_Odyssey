import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-group-abount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-groups-abount.component.html',
  styleUrls: ['./cards-groups-abount.component.css'],
})
export class CardGroupAbountComponent {
  @Input() cardsDescription: any[] = [];
  @Output() cardSelected = new EventEmitter<number>();

  getCardShadowClass(index: number): string {
    return index % 2 === 0 ? 'shadow-color1' : 'shadow-color2';
  }

  onCardClick(index: number) {
    this.cardSelected.emit(index);
  }
}
