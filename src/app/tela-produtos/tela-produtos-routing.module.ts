import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaProdutosPage } from './tela-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: TelaProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaProdutosPageRoutingModule {}
