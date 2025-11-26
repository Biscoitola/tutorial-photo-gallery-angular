import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Bebida, Item, ItemCarrinho } from '../types/Item';
=======
import { BehaviorSubject } from 'rxjs';
import { Item, ItemCarrinho } from '../types/Item';
>>>>>>> 158640191f789e7b10bd757da672df186e9450ac

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
<<<<<<< HEAD
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
=======
  private pedido: ItemCarrinho[] =[]
  private pedidoSubject = new BehaviorSubject<ItemCarrinho[]>([])
  pedido$ = this.pedidoSubject.asObservable()

  constructor() { }

  numeroSequencial = 0
  adicionarItem(item: Item){
    this.numeroSequencial = this.numeroSequencial + 1
    const novoItem = {
      id: item.id,
      idSequencial: this.numeroSequencial,
      nome:item.nome,
      preco:item.preco,
      imagem:item.imagem,
      ingredientes:item.ingredientes,
      ingredientesRemovidos: []
    }
    this.pedido = [...this.pedido, novoItem]
    this.emitirPedido()
  }

  getPedido():ItemCarrinho[]{
    return [...this.pedido]
  }

  removerItem(idASerRemovido:number){
   this.pedido = this.pedido.filter((produto)=> produto.idSequencial != idASerRemovido)
    this.emitirPedido()
    // forma 2 
    /*
    const novopedido = [] 
    this.pedido.forEach((produto)=>{
      if(produto.id != idASerRemovido ){
        novopedido.push(produto)
      }
    })
      */

    // forma 3
    //const novopedido = this.pedido.filter((produto)=> produto.id != idASerRemovido )
    //this.pedido = novopedido
  }

  private emitirPedido(){
    this.pedidoSubject.next([...this.pedido])
  }



>>>>>>> 158640191f789e7b10bd757da672df186e9450ac
}
