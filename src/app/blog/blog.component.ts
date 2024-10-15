import { Component } from '@angular/core';
import { CardGroupComponent } from './card-group/card-group.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CardGroupComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  title: string = 'Blog';

  CardsItems = [
    {
      cards: [
        {
          img: 'https://blog.crackthecode.la/wp-content/uploads/2022/10/unnamed.png',
          title: 'Minecraft',
          text: `Marcus Persson, también conocido como Notch, lanzó lo que
            inicialmente llamó «Cave Game» en 2009. Este fue lanzado en la PC y
            fue atractivo para las personas a las que les gustaba codificar y
            diseñar mundos de juegos. Era más una herramienta de origen que un
            juego para la mayoría de las personas en ese momento, y los usuarios
            podían ingresar y crear lo que desperdiciaron utilizando los bloques
            básicos que había configurado Persson`,
        },
        {
          img: 'https://picodotdev.github.io/blog-bitix/2021/07/analisis-guia-y-consejos-del-juego-roguelike-darkest-dungeon/images/darkest-dungeon_hu4435031814995739645.webp',
          title: 'Darkest Dungeon',
          text: `Hace ya más de dos años que un pequeño estudio, Red Hook, nos
            sorprendiera con un videojuego nacido en Kickstarter, con Tyler
            Sigman a la cabeza. Este oriundo de Seattle no presentaba unas
            crecenciales curriculares a la altura de otros grandes nombres que
            han recurrido al crowdfunding para financiar sus proyectos, pero el
            haber trabajado en una saga como Age of Empires dejaba bien a las
            claras que, de momento, algo entendía del género de la estrategia.
            Este género estaba presente en nuestro título protagonista, Darkest
            Dungeon, pero ni mucho menos era el único, y combinado con el RPG
            por turnos, dio lugar a uno de los mejores dungeon crawler al estilo
            clásico de los últimos años. Bienvenidos a la mazmorra más oscura,
            adjetivo que ni mucho menos es baladí.`,
        },
        {
          img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Ori_and_the_Blind_Forest_Logo.jpg/220px-Ori_and_the_Blind_Forest_Logo.jpg',
          title: 'Ori and the Blind Forest',
          text: `El desarrollo de Ori and the Blind Forest nació de un pequeño equipo
            compuesto por profesionales contrastados del sector que decidieron
            unirse para crear un videojuego diferente. Tomando como referencia
            títulos como Metroid o Rayman Legends, se lanzaron a crear un
            plataformas 2D de scroll lateral, con una dificultad endiablada y
            una belleza audiovisual cautivadora. Con una jugabilidad ajustada al
            milímetro, fondos pintados a mano, una historia emotiva y una banda
            sonora sublime, Microsoft no tardó en darse cuenta de que estaban
            ante algo especial y decidieron apadrinar el título para convertirlo
            en uno de los grandes exclusivos de su consola. Gracias al apoyo
            económico de la multinacional norteamericana, Moon Studios
            finalmente tuvo la solidez económica y la libertad creativa para
            llevar a cabo el videojuego que querían.`,
        },
        {
          img: 'https://uvejuegos.com/img/caratulas/59068/Specter-of-Torment-Logo.jpg',
          title: 'Shovel Knight',
          text: `Shovel Knight es el primer videojuego desarrollado por Yacht Club
            Games, dirigido por Sean Velasco . Velasco ha declarado que tomó
            inspiración en gran forma de juegos como NES, específicamente de
            Castlevania III: Dracula's Curse, DuckTales, Super Mario Bros. 3, y
            los títulos de Mega Man. Shovel Knight también se inspira en U.N.
            Squadron y Dark Souls. El juego fue anunciado el 13 de marzo de
            2013, junto a una campaña de Kickstarter para financiar el
            desarrollo, con una meta mínima de financiamiento de $75,000. La
            campaña consiguió su meta a finales de marzo y continuó para
            recolectar un total de $311,502, completando así todas las metas
            adicionales anunciadas con el fin de implementar carácteristicas
            extras, a su término el día 13 de abril.`,
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CVCbU5M5FOczTMi6u6HfEQfjTONRSrcnzw&s',
          title: 'Super Meat Boy',
          text: ` Meat Boy empezó como un juego en Flash creado por Edmund McMillen y
            programado por Jonathan McEntee, publicado en Newgrounds el 5 de
            octubre de 2008. Ha conseguido más de 8400000 visitas en Newgrounds
            (ocho millones en total) desde su lanzamiento. Más tarde, el 8 de
            diciembre de 2008, se lanzó un pack de mapas para la versión flash.
          
            El juego se anunció inicialmente para WiiWare y PC, para ser lanzado
            en el primer trimestre de 2010, pero se retrasó hasta el último
            trimestre del año porque los desarrolladores querían más tiempo para
            crear los "niveles oscuros", las versiones más difíciles de los
            niveles normales del juego.`,
        },
      ],
    },
  ];
}
