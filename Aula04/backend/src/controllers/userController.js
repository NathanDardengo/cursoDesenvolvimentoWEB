const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    //O async é basicamente para informar que esse métido é Assincrono!
    async persistData(req,res){
        //Promessa/Metodos Assincronos
        //O await é para poder informar que essa variavel precisa esperar para poder receber os dados
        const response = await req.body;
        //Pegar o dado que está vindo do body e gravar no Banco
        User.create(response);
        res.json(response);
    },

    async listUsers(req,res){
        const response = await User.find();
        res.json(response);
    },
    //Pesquisar com o campo vindo da URL, alterar essa função pra isso
   
    async listaUm(req,res){
        //const response = await User.findById('5ed052b370c9f84c6424b373');
        //res.json(response);
        const pessoa = req.params.pessoa;
        /*Usando desta forma, vai ser pesquisado o campo 
        que for igual ao que eu passei na URL!
        const response = await User.find().where('name').equals(pessoa);*/
        const teste = await User.find({name : {$regex: '.*'+pessoa+'.*'}});
        res.json(teste);
    },
    //Criar uma rota que pesquisa todos do sexo feminino
    
    async listSexo(req,res){
        const response = await User.find({sex : 'Feminino'});
        
        //const response = await User.find({age : {$gte:45}},{sex : 'Feminino'});
        /*Fazendo da forma abaixo, você pode procurar por uma parte do texto
        da String que queria procurar, fazendo uma pesquisa basicamente como se
        estivesse usando um like '%%' no SQL
        const response = await User.find({name : /Bastos/});*/
        res.json(response);
    },
    //Criar outro método que traga todos que tenham menos de X anos
    //Para criar esses métodos, verificar no link da documentação oficial
    //do Mangoose: https://mongoosejs.com/

    async listIdade(req,res){
        //const response = await User.where('this.age.indexOf("val" >= 28').exec();
        const response = await User.find().where('age').gte(25);
        res.json(response);
    }
    
};