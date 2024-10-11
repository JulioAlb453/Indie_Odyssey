import { Component } from '@angular/core';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SuccessfulGamesComponent } from './successful-games/successful-games.component';
import { GoldenEraComponent } from './golden-era/golden-era.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardCarouselComponent,
    FooterComponent,
    NavbarComponent,
    SuccessfulGamesComponent,
    GoldenEraComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title: string = 'La época dorada de los Juegos Indies';
  paragraph1: string =
    'En el desarrollo de los videojuegos en general puede conllevar ciertas dificultades a la hora de la distribución de los juegos, ya que se hace una inversión tanto para la creación de los juegos, como el marketing, y demás factores que influyen enormemente en el impacto que tendrá, pero, ¿qué hay de los desarrolladores independientes? A pesar de muchas  limitantes como los costos monetarios, las dependencias que tienen con los mismos jugadores que compartan y divulguen su juego.';
  paragraph2: string = ` Muchos de estos desarrolladores han sabido cómo afrontar los problemas,
        ya que en la actualidad existen muchas formas para crear y difundir la
        creación de videojuegos. Tenemos redes sociales para crear una
        comunidad, y existen herramientas gratuitas para el desarrollo y
        programación de videojuegos. La digitalización del mundo brinda
        oportunidades a cualquier persona o grupo de personas para llevar a cabo
        sus propios sueños y ambiciones. Te invitamos a seguir leyendo para
        averiguar quienes son los mayores exponentes de este rubro.`;

title1: string = 'Idolos de los indies'

  carouselItems = [
    {
      cards: [
        {
          img: 'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/UQYLSYHAQBJMPGI2NGCTYRQNFI.jpg',
          title: 'Eric Barone',
          text: 'Desarrollador de Stardew Valley.',
        },
        {
          img: 'https://cdn.vox-cdn.com/thumbor/LVzoBsa0BxXpeZT-tkv4ZIT4xD8=/0x0:560x312/1400x788/filters:focal(280x156:281x157)/cdn.vox-cdn.com/uploads/chorus_asset/file/14294231/Screen_Shot_2013-04-05_at_12.17.42_PM.1419979442.png',
          title: 'Markus Alexej Persson "Notch"',
          text: 'Fundador de Mojang Studios.',
        },
        {
          img: 'https://www.gematsu.com/wp-content/uploads/2022/04/Company-Logo_11-bit-studios-Init.png',
          title: '11 bit studios',
          text: 'Empresa de desarrollo de juegos fundada en 2010.',
        },
      ],
    },
    {
      cards: [
        {
          img: 'https://www.rollingstone.com/wp-content/uploads/2024/03/Y-Hanson-Photography-Maddy-Headshots-August-2023_60-2.jpg',
          title: 'Maddy Thorson',
          text: 'Desarrolladora de Celeste y TowerFall.',
        },
        {
          img: 'https://www.cs.queensu.ca/news/wp-content/uploads/2022/05/Daniel-Mullins-edited.png',
          title: 'Daniel Mullins',
          text: 'Creador de Inscryption y Pony Island.',
        },
        {
          img: 'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HUCJMHNJRBO33GF7XAFEL4PLQQ.jpg',
          title: 'Robert F. Fox',
          text: 'Desarrollador de Undertale.',
        },
      ],
    },
  ];

  cardText1 =
    'En el desarrollo de los videojuegos en general puede conllevar ciertas dificultades a la hora de la distribución de los juegos, ya que se hace una inversión tanto para la creación de los juegos, como el marketing, y demás factores que influyen enormemente en el impacto que tendrá, pero, ¿qué hay de los desarrolladores independientes? A pesar de muchas limitantes como los costos monetarios, las dependencias que tienen con los mismos jugadores que compartan y divulguen su juego.';

  cardText2 =
    'Muchos de estos desarrolladores han sabido cómo afrontar los problemas, ya que en la actualidad existen muchas formas para crear y difundir la creación de videojuegos. Tenemos redes sociales para crear una comunidad, y existen herramientas gratuitas para el desarrollo y programación de videojuegos. La digitalización del mundo brinda oportunidades a cualquier persona o grupo de personas para llevar a cabo sus propios sueños y ambiciones. Te invitamos a seguir leyendo para averiguar quienes son los mayores exponentes de este rubro.';

  imageUrl =
    'https://www.bbva.com/wp-content/uploads/2017/12/video-juegos-ordenador-diseno-desarrollo-programador-BBVA-1024x576.jpg';

  buttonLink1 = '/blog';
  buttonText = 'Leer más';
  buttonLink = '/abount';
}
