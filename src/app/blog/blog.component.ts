import { Component } from '@angular/core';
import { CardGroupComponent } from '../card-group/card-group.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CardGroupComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
