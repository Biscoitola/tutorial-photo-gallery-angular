export type ItemCarrinho = {
    id: number
    idSequencial: number
    nome: string
    preco: number
    imagem:string
    ingredientesRemovidos:string[]
    ingredientes: string[]
    tipo?: string
    volume?: string
}

export type Item = {
    id?: number
    nome: string
    preco: number
    imagem:string
    ingredientes: string[]
}

export type Bebida = {
    id?: number
    nome: string
    preco: number
    tipo: string
    volume: string
    alcoolica: boolean
    descricao?: string
    imagem?: string
}
