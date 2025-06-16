import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-categories',
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
          title: 'TCG',
          subtitle: 'Juegos de cartas coleccionables',
          items: [
            {
              name: 'Magic',
              image: '/assets/img/magic.jpg',
              description: 'Cartas de estrategia y magia'
            },
            {
              name: 'Yu-Gi-Oh!',
              image: '/assets/img/yugioh.jpg',
              description: 'Duelo de monstruos y hechizos'
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
