import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'categories/:category', component: CategoriesComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '' },
];
