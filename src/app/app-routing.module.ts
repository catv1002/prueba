import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ObjetoComponent } from './components/objeto/objeto.component';
import { InicioComponent } from './components/inicio/inicio.component'

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'objeto', component: ObjetoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
