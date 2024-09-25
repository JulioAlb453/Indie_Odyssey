import { Component } from '@angular/core';
import { CardGroupComponent } from '../card-group/card-group.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardGroupComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
