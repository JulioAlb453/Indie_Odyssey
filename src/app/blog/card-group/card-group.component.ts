import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-group.component.html',
  styleUrl: './card-group.component.css'
})
export class CardGroupComponent {
  @Input () title: string = ""
  @Input () CardsItems: any[] = []
item: any;
}
