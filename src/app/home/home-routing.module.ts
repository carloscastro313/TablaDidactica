import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: '',
        redirectTo:'colores'
      },
      {
        path: 'numeros',
        loadChildren: () => import('../numeros/numeros.module').then( m => m.NumerosPageModule)
      },
      {
        path: 'animales',
        loadChildren: () => import('../animales/animales.module').then( m => m.AnimalesPageModule)
      },
      {
        path: 'colores',
        loadChildren: () => import('../colores/colores.module').then( m => m.ColoresPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
