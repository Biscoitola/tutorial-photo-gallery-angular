import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { Bebida, Item } from '../types/Item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-produtos',
  templateUrl: './tela-produtos.page.html',
  styleUrls: ['./tela-produtos.page.scss'],

})
export class TelaProdutosPage {

  produtoEmEdicao: Item;
  formularioProduto: FormGroup;
  formularioBebida: FormGroup;
  modoEdicao = false;
  segmentoCadastro: 'lanches' | 'bebidas' = 'lanches';
  bebidasCadastradas: Bebida[] = [];
  tiposDisponiveis = ['Refrigerante', 'Suco', 'Drink', 'Cerveja', 'Agua'];
  volumesDisponiveis = ['Lata 350ml', '600ml', '1L', '1.5L', '2L'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutosService,
    private formBuilder: FormBuilder
  ) {
    this.formularioProduto = this.criarFormularioProduto();
    this.formularioBebida = this.criarFormularioBebida();
  }

  ionViewWillEnter() {
    this.modoEdicao = false;
    this.produtoEmEdicao = null;
    const params = this.activatedRoute.snapshot.queryParams;
    if (params['segmento'] === 'bebidas') {
      this.segmentoCadastro = 'bebidas';
    } else {
      this.segmentoCadastro = 'lanches';
    }
    if (params['operacao'] === 'editar') {
      this.modoEdicao = true;
      const produto = this.buscarProduto();
      if (produto) {
        this.preencherProduto(produto);
      }
    } else {
      this.formularioProduto = this.criarFormularioProduto();
    }
    this.bebidasCadastradas = this.produtoService.buscarBebidas();
  }

  private criarFormularioProduto() {
    return this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: [0, [Validators.required, Validators.min(0.01)]],
      imagem: ['', [Validators.required]],
      ingredientes: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  private criarFormularioBebida() {
    return this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      tipo: [this.tiposDisponiveis[0], Validators.required],
      volume: [this.volumesDisponiveis[0], Validators.required],
      preco: [0, [Validators.required, Validators.min(1)]],
      alcoolica: [false],
      descricao: ['']
    });
  }

  private buscarProduto() {
    const params = this.activatedRoute.snapshot.queryParams;
    return this.produtoService.buscarLanchesById(Number(params['id']));
  }

  private preencherProduto(produto: Item) {
    this.formularioProduto = this.formBuilder.group({
      nome: [produto.nome, [Validators.required, Validators.minLength(3)]],
      preco: [produto.preco, [Validators.required, Validators.min(0.01)]],
      imagem: [produto.imagem, [Validators.required]],
      ingredientes: [produto.ingredientes.join(', '), [Validators.required, Validators.minLength(3)]]
    });
  }

  limparFormulario() {
    this.formularioProduto = this.criarFormularioProduto();
    this.router.navigate(['/tabs/tab1']);
  }

  limparFormularioBebida() {
    this.formularioBebida = this.criarFormularioBebida();
  }

  salvarItem() {
    const formularioInfo = this.formularioProduto.value;
    const ingredientesFormatados =
      formularioInfo.ingredientes.split(',')
        .map((ingrediente: string) => ingrediente.trim());

    const item: Item = {
      nome: formularioInfo.nome,
      preco: parseFloat(formularioInfo.preco),
      imagem: formularioInfo.imagem,
      ingredientes: ingredientesFormatados
    };

    this.produtoService.salvarItem(item);
    this.formularioProduto = this.criarFormularioProduto();
    this.router.navigate(['/tabs/tab1']);
  }

  salvarBebida() {
    if (this.formularioBebida.invalid) {
      this.formularioBebida.markAllAsTouched();
      return;
    }

    const dadosBebida = this.formularioBebida.value;
    const novaBebida: Bebida = {
      nome: dadosBebida.nome,
      preco: parseFloat(dadosBebida.preco),
      tipo: dadosBebida.tipo,
      volume: dadosBebida.volume,
      alcoolica: dadosBebida.alcoolica,
      descricao: dadosBebida.descricao,
      imagem: ''
    };

    this.produtoService.salvarBebida(novaBebida);
    this.bebidasCadastradas = this.produtoService.buscarBebidas();
    this.formularioBebida = this.criarFormularioBebida();
  }
}
