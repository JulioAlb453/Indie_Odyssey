import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-golden-era',
  standalone: true,
  templateUrl: './golden-era.component.html',
  styleUrls: ['./golden-era.component.css']
})
export class GoldenEraComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
}
