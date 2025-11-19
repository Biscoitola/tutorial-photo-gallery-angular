import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PedidoService } from '../services/pedido.service';
import { ItemCarrinho } from '../types/Item';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnDestroy {
  pedido: ItemCarrinho[] = []
  ingredientesSelecionados: Record<string, boolean> = {}
  itemEditando: ItemCarrinho | null = null
  private pedidoSubscription: Subscription

  constructor(
    private pedidoService: PedidoService
  ) {
    this.pedidoSubscription = this.pedidoService.pedido$.subscribe((pedido) => {
      this.pedido = pedido
    })
  }

  ngOnDestroy(): void {
    this.pedidoSubscription?.unsubscribe()
  }

  get possuiItens(): boolean {
    return this.pedido.length > 0
  }

  get totalPedido(): number {
    return this.pedido.reduce((total, item) => total + item.preco, 0)
  }

  editarIngredientes(item: ItemCarrinho) {
    this.itemEditando = item
    this.ingredientesSelecionados = {}

    item.ingredientes.forEach((ingrediente) => {
      this.ingredientesSelecionados[ingrediente] =
        !item.ingredientesRemovidos.includes(ingrediente)
    })
  }

  salvarIngredientes() {
    if (!this.itemEditando) {
      return
    }

    const ingredientesRemovidos: string[] = []
    this.itemEditando.ingredientes.forEach((ingrediente) => {
      if (!this.ingredientesSelecionados[ingrediente]) {
        ingredientesRemovidos.push(ingrediente)
      }
    })

    this.itemEditando.ingredientesRemovidos = ingredientesRemovidos
    this.cancelarEdicao()
  }

  cancelarEdicao() {
    this.itemEditando = null
    this.ingredientesSelecionados = {}
  }

  removerItem(idASerRemovido: number) {
    this.pedidoService.removerItem(idASerRemovido)
  }

  trackBySequencial(_index: number, item: ItemCarrinho): number {
    return item.idSequencial
  }
}
