class AlimentoOrganico implements ProdutoEcologico{
nome:String;
preco:number;
 DataValidade:Date;
ingredientes:String[];

constructor(nome:string, preco:number, DataValidade:Date, ingredientes:String[]){
    this.nome= nome;
    this.preco= preco;
    this.DataValidade= DataValidade;
    this.ingredientes=ingredientes;
}

exibir(){
    console.log("nome:"+ this.nome + "preco:" + this.preco + "DataValidade:" + this.DataValidade + "ingredientes:" + this.ingredientes)
}
cadastrar():void{
    console.log("nome:" + this.nome)
}
}
const nome = new AlimentoOrganico("Alface", 5.00, new Date (28/3/25), "alface");
nome.cadastrar();
const exibir = new AlimentoOrganico();
