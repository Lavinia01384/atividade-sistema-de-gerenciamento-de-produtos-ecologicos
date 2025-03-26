class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nome:String;
    preco:number;
    volume:number;

    constructor(nome:String, preco:number, volume:number){
        this.nome=nome;
        this.preco=preco;
        this.volume= volume;
    }
}