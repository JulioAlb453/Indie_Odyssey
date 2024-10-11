import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component'; // Importa CommonModule

@Component({
  selector: 'app-card-group-abount',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './cards-groups-abount.component.html',
  styleUrls: ['./cards-groups-abount.component.css'],
})
export class CardGroupAbountComponent {
  @Output() cardSelected = new EventEmitter<any>();

  cards = [
    {
      title: '26 de febrero de 2016',
      text: 'Stardew Valley fue creado completamente por el diseñador estadounidense de juegos indies Eric Barone, bajo el alias de ConcernedApe Stardew Valley originalmente empezó como un moderno juego de la serie Harvest Moon creado por fanes, ya que Barone pensaba que "la serie se había desmejorado progresivamente después de Harvest Moon: Back to Nature.',
      img: 'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/UQYLSYHAQBJMPGI2NGCTYRQNFI.jpg',
    },
    {
      title: '24 de febrero de 2018',
      text: 'Noel Berry (Skytorn) y Maddy Thorson (TowerFall) crearon un prototipo de Celeste en cuatro días durante un evento de Game Jam (Improvisación de Desarrollo de Videojuegos.',
      img: 'https://staging.cohostcdn.org/attachment/1b7311cb-c43e-48e9-8098-114b0ff0d865/FA916C2C-32DE-4834-ABBF-9588A49A6C15.jpeg?width=675&auto=webp&dpr=1',
    },
    {
      title: '24 Febrero de 2017',
      text: 'Team Cherry es un desarrollador de juegos independiente en Adelaide, Australia del Sur. Su misión es construir mundos locos y emocionantes para que los jugadores los exploren y conquisten. Hollow Knight es la culminación de las cosas que aman en los juegos.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f7d14176115247.5e49b7c1bf1e7.jpg',
    },
    {
      title: '15 de septiembre de 2015',
      text: 'El trabajo más popular de Toby Fox es el videojuego de rol de 2015 Undertale. El videojuego vendió más de un millón de copias, convirtiéndose en un "éxito sin precedentes" y un "fenómeno de la cultura pop. Tuvo alguna experiencia en el desarrollo de videojuegos antes de Undertale, usando RPG Maker 2000 con sus tres hermanos para hacer videojuegos de rol y ROM hacks de EarthBound en la escuela secundaria,"',
      img: 'https://pm1.aminoapps.com/6312/31dea4b7be93c37f1b3fb7dea8649ff14c99ca18_00.jpg',
    },
    {
      title: '28 de septiembre de 2011',
      text: 'Según un comentario contestando un tweet en el libro de ilustraciones de Unholy Edition, Isaac estuvo en desarrollo alrededor de 120 días, siendo un ciclo de desarrollo bastante corto. El 8 de julio de 2011 (alrededor de una o dos semanas desde que empezó el desarrollo), Edmund anunciaría por primera vez al público que The Binding of Isaac será su nuevo juego, como un proyecto secundario, mientras tiene la ayuda de Florian Himsl como programador y de Danny Baranowsky como compositor de la banda sonora.',
      img: 'https://miro.medium.com/v2/resize:fit:1400/0*2qvKkrfFIonn8uvB.jpeg',
    },
    {
      title: '17 de septiembre de 2020',
      text: 'Tras el lanzamiento de su juego anterior, Pyre, Supergiant Games estaba interesado en desarrollar un juego que ayudara a abrir su proceso de desarrollo a los jugadores, de modo que terminaran creando el mejor juego posible a partir de los comentarios de los jugadores. Reconocieron que esto no solo ayudaría con el enfoque del juego sino también con los elementos narrativos y, por lo tanto, optaron por utilizar el enfoque de acceso temprano en el desarrollo de Hades una vez que hubieron establecido las bases del juego.',
      img: 'https://www.interactive.org/images/games_publishers/supergiant-15.jpg',
    },
  ];

  onCardClick(card: any) {
    this.cardSelected.emit(card);
  }
}
