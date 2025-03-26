class  ItemDecoracaoSustentavel implements ProdutoEcologico{
nome: string;
preco:number;
material:string;
dimensoes: { largura: number;
            altura: number;
             profundidade: number;
};
constructor(nome:string, preco:number, material:string, dimensoes:{ largura:number, altura:number, profundidade:number}){
    this.nome= nome;
    this.preco=preco;
    this.material=material;
    this.dimensoes=dimensoes;

}
}