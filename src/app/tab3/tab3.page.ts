import { Component } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { ItemCarrinho } from '../types/Item';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pedido: ItemCarrinho[] = [];
  ingredientesSelecionados: { [key: string]: boolean } = {};
  itemEditando: ItemCarrinho;
  
  constructor(
    private pedidoService: PedidoService
  ) { }

  ionViewWillEnter() {
    this.pedido = this.pedidoService.getPedido();
    this.itemEditando = null;
  }

  get valorTotal() {
    return this.pedido.reduce((total, produto) => total + produto.preco, 0);
  }

  editarIngredientes(item: ItemCarrinho) {
    this.itemEditando = item;
    this.ingredientesSelecionados = {};
  
    item.ingredientes.forEach((ingrediente) => {
      this.ingredientesSelecionados[ingrediente] =
        !item.ingredientesRemovidos.includes(ingrediente);
    });
  }

  salvarIngredientes() {
    if (!this.itemEditando) {
      return;
    }
    
    const ingredientesRemovidos = [];
    this.itemEditando.ingredientes.forEach((ingrediente) => {
      if (!this.ingredientesSelecionados[ingrediente]) {
        ingredientesRemovidos.push(ingrediente);
      }
    });
    
    this.itemEditando.ingredientesRemovidos = ingredientesRemovidos;

    this.itemEditando = null;
    this.ingredientesSelecionados = {};
  }

  cancelarEdicao() {
    this.itemEditando = null;
    this.ingredientesSelecionados = {};
  }

  removerItem(idASerRemovido: number) {
    this.pedidoService.removerItem(idASerRemovido);
    this.pedido = this.pedidoService.getPedido();
  }

  cancelarPedido() {
    this.pedidoService.limparPedido();
    this.pedido = [];
    this.cancelarEdicao();
  }

  finalizarPedido() {
    console.log('Pedido concluido', this.pedido);
    this.pedidoService.limparPedido();
    this.pedido = [];
    this.cancelarEdicao();
  }

}
