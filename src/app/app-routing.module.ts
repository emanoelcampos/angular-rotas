import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurd } from './guards/auth.gaurd';


const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module')
    .then(mod => mod.CursosModule),
    canActivate: [AuthGaurd]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module')
    .then(mod => mod.AlunosModule),
    canActivate: [AuthGaurd]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGaurd]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
