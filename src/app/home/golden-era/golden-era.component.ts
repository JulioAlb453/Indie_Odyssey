import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-golden-era',
  standalone: true,
  templateUrl: './golden-era.component.html',
  styleUrls: ['./golden-era.component.css']
})
export class GoldenEraComponent {
   @Input() title: string = '';
  @Input() paragram1: string = '';
  @Input() paragram2: string = '';
}
