import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ HeroComponent, FooterComponent, RouterModule ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {}
