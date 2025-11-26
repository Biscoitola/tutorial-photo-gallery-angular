import { Injectable } from '@angular/core';
import { Bebida, Item } from '../types/Item';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
   items:Item[] = [
      {
        id: 1,
        nome: "Hamburguer",
        preco: 25.00,
        ingredientes: ["carne", "cebola", "picles", "molho especial"],
        imagem: ""
      },
      {
        id: 2,
        nome: "Hamburguer bacon",
        preco: 30.00,
        ingredientes: ["carne", "cebola", "picles", "molho especial"],
        imagem: ""
      },
      {
        id: 3,
        nome: "Hamburguer bacon",
        preco: 30.00,
        ingredientes: ["carne", "cebola", "picles", "molho especial"],
        imagem: ""
      },

    ];

    bebidas: Bebida[] = [
      {
        id: 1,
        nome: 'Refrigerante lata',
        tipo: 'Refrigerante',
        volume: '350ml',
        preco: 6.5,
        alcoolica: false,
        descricao: 'Bem gelado',
        imagem: ''
      },
      {
        id: 2,
        nome: 'Suco natural',
        tipo: 'Suco',
        volume: '500ml',
        preco: 12,
        alcoolica: false,
        descricao: 'Feito na hora',
        imagem: ''
      },
      {
        id: 3,
        nome: 'Cerveja Pilsen',
        tipo: 'Cerveja',
        volume: '600ml',
        preco: 13,
        alcoolica: true,
        descricao: 'Servida em balde de gelo',
        imagem: ''
      }
    ];
  constructor() { }


  buscarLanches(): Item[] {
    return this.items;
  }

  buscarBebidas(): Bebida[] {
    return this.bebidas;
  }


  //aqui vamos buscar o produto na api
  buscarLanchesById(id: number): Item | null {
    const lanches = this.buscarLanches();
    const lancheEncontrado = lanches.find((lanche) => lanche.id === id);
    if (lancheEncontrado) {
      return lancheEncontrado;
    }

    return null
  }

  salvarItem(item:Item){
     let maiorValor = 1

     this.items.forEach((itemAtual)=>{
      if(itemAtual.id > maiorValor){
        maiorValor = itemAtual.id
      }
     })

     item.id= maiorValor + 1

      this.items.push(item)
  }

  salvarBebida(bebida: Bebida) {
    let maiorId = 0;
    this.bebidas.forEach((bebidaAtual) => {
      const idAtual = bebidaAtual.id ?? 0;
      if (idAtual > maiorId) {
        maiorId = idAtual;
      }
    });

    bebida.id = maiorId + 1;
    this.bebidas.push(bebida);
  }
}
