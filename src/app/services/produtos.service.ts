import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Bebida, Item } from '../types/Item';
=======
import { Item } from '../types/Item';
>>>>>>> 158640191f789e7b10bd757da672df186e9450ac

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
<<<<<<< HEAD
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
=======

  constructor() { }


  buscarLanches():Item[] {
    return [
      {
       id:1,
        nome: "Hamburguer",
        preco: 25.00,
        ingredientes: ["carne", "cebola", "picles",  "molho especial"],
        imagem:"https://cdn.pixabay.com/photo/2016/01/22/20/23/burger-1156564_1280.jpg"
      },
      {
        id:2,
        nome: "Hamburguer bacon",
        preco: 30.00,
        ingredientes: ["carne", "cebola", "picles",  "molho especial"],
        imagem:"https://cdn.pixabay.com/photo/2021/11/21/11/24/burger-6813784_1280.jpg"
      },
      {
        id:3,
        nome: "Xis Calota",
        preco: 130.00,
        ingredientes: ["carne", "cebola", "picles",  "molho especial"],
        imagem:"https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/3322/6398e92a2626atxvy8.webp"
      },

    ];
  }

  buscarBebidas(): Item[] {
    return [
      {
        id: 101,
        nome: 'Refrigerante Lata',
        preco: 6.00,
        ingredientes: ['350ml'],
        imagem: 'https://cdn.pixabay.com/photo/2014/09/26/19/51/drink-462776_1280.jpg'
      },
      {
        id: 102,
        nome: 'Água Mineral',
        preco: 4.00,
        ingredientes: ['Sem gás', '500ml'],
        imagem: 'https://cdn.pixabay.com/photo/2012/03/01/00/31/water-19659_1280.jpg'
      },
      {
        id: 103,
        nome: 'Suco Natural',
        preco: 8.00,
        ingredientes: ['Laranja', '300ml'],
        imagem: 'https://cdn.pixabay.com/photo/2020/03/02/15/22/ginger-juice-4896003_1280.jpg'
      }
    ]
>>>>>>> 158640191f789e7b10bd757da672df186e9450ac
  }
}
