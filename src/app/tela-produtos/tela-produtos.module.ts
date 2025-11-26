import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaProdutosPageRoutingModule } from './tela-produtos-routing.module';

import { TelaProdutosPage } from './tela-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TelaProdutosPageRoutingModule
  ],
  declarations: [TelaProdutosPage]
})
export class TelaProdutosPageModule {}
