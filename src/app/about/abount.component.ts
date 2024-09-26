import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { CardInfoComponent } from '../card-info/card-info.component';
import { CardGroupAbountComponent } from '../cards-groups-abount/cards-groups-abount.component';
import { CardGroupComponent } from "../card-group/card-group.component";

@Component({
  selector: 'app-abount',
  standalone: true,
  imports: [CommonModule, CardInfoComponent, CardGroupAbountComponent, CardGroupComponent],
  templateUrl: './abount.component.html',
  styleUrls: ['./abount.component.css']
})
export class AbountComponent {
  selectedCard: any = null;

  onCardSelected(card: any) {
    this.selectedCard = card;
  }
}
