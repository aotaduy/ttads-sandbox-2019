import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimerPaginaComponent } from './primer-pagina/primer-pagina.component';
import {SegundaPaginaComponent} from './segunda-pagina/segunda-pagina.component';
import {NavegacionComponent} from './navegacion/navegacion.component';
import {IsLoggedInGuard} from './is-logged-in.guard';
import {PrimerPaginaResolver} from './primer-pagina/primer-pagina.resolve';

const routes: Routes = [
  {
    path: 'home',
    component: NavegacionComponent,
    children: [
      {
        path: 'primer-pagina',
        component: PrimerPaginaComponent,
        resolve: {
          articles: PrimerPaginaResolver
        }
      },
      {
        path: 'segunda-pagina/:id',
        component: SegundaPaginaComponent,
        canActivate: [IsLoggedInGuard]
      },
      {
        path: 'segunda-pagina',
        component: SegundaPaginaComponent,
        canActivate: [IsLoggedInGuard]
      },
    ]
    },
  {
    path: 'primer-pagina',
    component: PrimerPaginaComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
