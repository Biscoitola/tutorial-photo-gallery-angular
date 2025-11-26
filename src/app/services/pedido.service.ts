import { Injectable } from '@angular/core';
import { Bebida, Item, ItemCarrinho } from '../types/Item';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  pedido: ItemCarrinho[] = [];
  numeroSequencial = 0;

  constructor() { }

  adicionarItem(item: Item | Bebida) {
    this.numeroSequencial = this.numeroSequencial + 1;
    const novoItem: ItemCarrinho = {
      id: item.id,
      idSequencial: this.numeroSequencial,
      nome: item.nome,
      preco: item.preco,
      imagem: 'imagem' in item ? (item.imagem ?? '') : '',
      ingredientes: this.mapearIngredientes(item),
      ingredientesRemovidos: [],
      tipo: this.ehBebida(item) ? item.tipo : undefined,
      volume: this.ehBebida(item) ? item.volume : undefined
    };
    this.pedido.push(novoItem);
  }

  private ehBebida(produto: Item | Bebida): produto is Bebida {
    return (produto as Bebida).volume !== undefined && (produto as Bebida).tipo !== undefined;
  }

  private mapearIngredientes(produto: Item | Bebida) {
    if (this.ehBebida(produto)) {
      const detalhes = [produto.tipo, produto.volume];
      if (produto.alcoolica) {
        detalhes.push('Alcoolica');
      }
      if (produto.descricao) {
        detalhes.push(produto.descricao);
      }
      return detalhes.filter(Boolean) as string[];
    }
    return produto.ingredientes ?? [];
  }

  getPedido(): ItemCarrinho[] {
    return this.pedido;
  }

  removerItem(idASerRemovido: number) {
    this.pedido = this.pedido.filter((produto) => produto.idSequencial != idASerRemovido);
  }

  limparPedido() {
    this.pedido = [];
    this.numeroSequencial = 0;
  }
}
