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

