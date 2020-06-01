const mongoose = require('mongoose');
const axios = require('axios');
const User = mongoose.model('User');


module.exports = {
    async persistUser(req,res){
        /*const payload = await User.create(req.body);
        //User.create(payload);
        //res.status(200);
        res.json(payload);*/
        const {userGit} = req.body;
        const response = await axios.get(`https://api.github.com/users/${userGit}`)
        const {login,name,avatar_url,company,public_repos,followers,bio} = response.data;
        const payload = await User.create({
                login,
                name,
                avatar_url,
                company,
                public_repos,
                followers,
                bio
            })
        res.json(payload);
        /*console.log(userGit);
        Essa forma abaixo é um exemplo da utilização da desestruturação utilizada nos campos acima
        Onde eu pego vários dados da parte data do cabeçalho da requisição, e desestruturo para pegar
        apenas os campos que eu determinei que queria
        res.json({login,name,avatar_url});*/
        //Isso é apenas para enviar o status de 200 quando executar essa function pra não dar timeout
        //res.send().status(200);

    },

    async listUsers(req,res){
        const response = await User.find();
        res.json(response);
    },
    async getUserGit(req,res){
        const response = await axios.get('https://api.github.com/users/leonardogandrade');
        /*No caso essa DATA é um dos objetos que retorna no AXIOS, que é 
        justamente o que queremos pegar, pois o AXIOS traz todos os dados
        possiveis quando é executado, desde os dados que a API disponibiliza
        até aos dados do Header e outros, por isso tem que especificar*/
        res.json(response.data);
    },
    //Persistir no banco usuários do Git

    //Persistir no banco usuário do Git se criado antes de 2020
    async gitUser2020(req,res){
        const response = await axios.get('https://api.github.com/users/leonardogandrade');
        const {login,created_at} = response.data;
        res.send(created_at);
        const created_at_date = new Date(Date.parse(created_at));

        if(created_at_date.getFullYear() < 2020){
            res.json({
                "msg" : "Usuário Antigo"
            })
        }else{
            res.json({
                "msg" : "Usuário muito novo"
            })
        }
    }


    /*Novo backend onde vai passar uma latitude e longitude 1
    , passar uma latitude e longitude 2, e calcular a distancia
    */
}