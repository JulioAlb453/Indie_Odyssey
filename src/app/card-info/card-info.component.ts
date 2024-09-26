import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule para usar *ngIf

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent {
  @Input() cardData: any = null;
}
