import { Component } from '@angular/core';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faGithub = faGithub;
  faRightToBracket = faRightToBracket ;
}
