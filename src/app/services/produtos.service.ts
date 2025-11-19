import { Injectable } from '@angular/core';
import { Item } from '../types/Item';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

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
  }
}
