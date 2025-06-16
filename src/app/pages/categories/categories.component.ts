import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgIf, NgFor, HeroComponent, FooterComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})

export class CategoriesComponent {
  private route = inject(ActivatedRoute);

  category: string | null = null;
  data: any = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      this.loadData(this.category);
    });
  }

  loadData(category: string | null) {
    switch (category) {
      case 'juegos-casuales':
        this.data = {
          title: 'Juegos Casuales',
          subtitle: 'Relájate con estos títulos casuales',
          items: [
            {
              name: 'Monopoly Edición Clásica',
              image: '/assets/img/monopoly.jpg',
              description: 'El clásico juego de compra y venta de propiedades que nunca pasa de moda. Ideal para toda la familia.',
              price: '$29.990',
              discount: '¡10% de descuento!'
            },
            {
              name: 'Uno',
              image: '/assets/img/uno.jpeg',
              description: 'Juego de cartas rápido y entretenido para todas las edades. Fácil de aprender y perfecto para reuniones.',
              price: '$7.990',
              discount: 'Sin descuento'
            },
            {
              name: 'Jenga',
              image: '/assets/img/jenga.png',
              description: 'Juego de habilidad y tensión donde debes sacar bloques sin derribar la torre. Perfecto para jugar con amigos.',
              price: '$14.990',
              discount: '¡5% de descuento!'
            }
          ]
        };
        break;

      case 'tcg':
        this.data = {
          title: 'Trading Card Gaming',
          subtitle: 'Juegos de cartas coleccionables',
          items: [
            {
              name: 'Magic: The Gathering - Booster Pack',
              image: '/assets/img/magic.jpg',
              description: 'Paquete de expansión para tu colección de Magic con cartas poderosas y variadas.',
              price: '$5.990',
              discount: '¡15% de descuento!'
            },
            {
              name: 'One Piece TCG - Starter Deck',
              image: '/assets/img/onepiece.jpg',
              description: 'Comienza tu aventura con este deck inicial basado en el popular anime One Piece.',
              price: '$19.990',
              discount: 'Sin descuento'
            },
            {
              name: 'Mitos y Leyendas - Deck Básico',
              image: '/assets/img/myl.webp',
              description: 'Juego de cartas chileno con leyendas y mitos nacionales para partidas emocionantes.',
              price: '$14.990',
              discount: 'Sin descuento'
            }
          ]
        };
        break;
      case 'juegos-estrategia':
        this.data = {
          title: 'Juegos de Estrategia',
          subtitle: 'Juegos para pensar y actuar con conocimiento de causa',
          items: [
            {
              name: 'Risk: Juego de Conquista Mundial',
              image: '/assets/img/risk.jpg',
              description: 'Estrategia y conquista en este clásico juego donde el objetivo es dominar el mundo',
              price: '$39.990',
              discount: '¡20% de descuento!'
            },
            {
              name: 'Pandemic',
              image: '/assets/img/pandemic.jpg',
              description: 'Cooperativo donde los jugadores luchan juntos para salvar al mundo de enfermedades mortales.',
              price: '$44.990',
              discount: '¡35% de descuento!'
            },
            {
              name: 'Catan',
              image: '/assets/img/catan.jpg',
              description: 'Construye y negocia en esta aventura estratégica para dominar la isla de Catan.',
              price: '$34.990',
              discount: 'Sin descuento'
            }
          ]
        };
        break;
      case 'accesorios':
        this.data = {
          title: 'Accesorios',
          subtitle: 'Elementos dignos de un verdadero jugador',
          items: [
            {
              name: 'Porta Mazos Universal',
              image: '/assets/img/deck.jpg',
              description: 'Organiza y transporta tus mazos de cartas con este práctico porta mazos.',
              price: '$9.990',
              discount: '¡10% de descuento!'
            },
            {
              name: 'Fundas Protectoras para Cartas',
              image: '/assets/img/fundas.webp',
              description: 'Protege tus cartas favoritas con estas fundas resistentes con diferentes colores y diseños.',
              price: '$6.990',
              discount: 'Sin descuento'
            },
            {
              name: 'Tapete para Juegos de Mesa',
              image: '/assets/img/tapete.png',
              description: 'Superficie antideslizante para jugar con comodidad y proteger tu mesa.',
              price: '$12.990',
              discount: '¡5% de descuento!'
            }
          ]
        };
        break;

      // Agrega más casos según necesites

      default:
        this.data = {
          title: 'Categoría no encontrada',
          subtitle: '',
          items: []
        };
        break;
    }
  } 
}
