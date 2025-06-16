import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() title: string = 'Mugiwara Emporium';
  @Input() subtitle: string = 'Inicio';
}
