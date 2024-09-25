import { Component } from '@angular/core';
import { HomeComponent } from '../home.component';
import { AbountComponent } from '../../abount/abount.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent, AbountComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
