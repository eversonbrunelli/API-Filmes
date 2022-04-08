import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { GenerosComponent } from './components/generos/generos.component';
import { ReadAllComponent } from './components/read-all/read-all.component';

const routes: Routes = [
  {
    path: '',
    component: ReadAllComponent,
  },

  {
    path: 'generos/:idgenero',
    component: GenerosComponent,
  },

  {
    path: 'detalhes/:idfilmes',
    component: DetalhesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
