import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { PedidoService } from '../services/pedido.service';
import { Bebida } from '../types/Item';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  bebidas: Bebida[] = [];
=======
import { ProdutosService } from '../services/produtos.service';
import { PedidoService } from '../services/pedido.service';
import { Item } from '../types/Item';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  bebidas = []
>>>>>>> 158640191f789e7b10bd757da672df186e9450ac

  constructor(
    private toastController: ToastController,
    private produtosService: ProdutosService,
<<<<<<< HEAD
    private pedidoService: PedidoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bebidas = this.produtosService.buscarBebidas();
  }

  ionViewWillEnter() {
    this.bebidas = this.produtosService.buscarBebidas();
  }

  async adicionarBebida(bebida: Bebida) {
    const toast = await this.toastController.create({
      message: `${bebida.nome} foi adicionada ao pedido`,
      duration: 3000,
      color: 'light',
      position: 'bottom'
    });
    // toast.present();
    this.pedidoService.adicionarItem({
      ...bebida,
      ingredientes: [bebida.tipo, bebida.volume]
    });
  }

  adicionarNovaBebida() {
    this.router.navigate(['/tela-produtos'], {
      queryParams: { segmento: 'bebidas', operacao: 'inserir' }
    });
  }

=======
    private pedidoService: PedidoService
  ) {}

  ngOnInit() {
    this.bebidas = this.produtosService.buscarBebidas()
  }

  async adicionarProduto(item: Item) {
    const toast = await this.toastController.create({
      message: `${item.nome} foi adicionado ao pedido`,
      duration: 3000,
      color: 'light',
      position: 'bottom'
    })
    //toast.present();
    this.pedidoService.adicionarItem(item)
  }
>>>>>>> 158640191f789e7b10bd757da672df186e9450ac
}
