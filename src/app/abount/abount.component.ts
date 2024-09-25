import { Component } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-abount',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './abount.component.html',
  styleUrl: './abount.component.css'
})
export class AbountComponent {

}
