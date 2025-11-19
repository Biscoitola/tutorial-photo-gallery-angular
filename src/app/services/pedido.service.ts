import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item, ItemCarrinho } from '../types/Item';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
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



}
