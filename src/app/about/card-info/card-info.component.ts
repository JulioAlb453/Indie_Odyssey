import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent {
  @Input() cardsInfo: any = null;
}
