import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-card-group',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './card-group.component.html',
  styleUrl: './card-group.component.css'
})
export class CardGroupComponent {

}
