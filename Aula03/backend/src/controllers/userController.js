module.exports = {
    autentica(req,res){
        const{login,senha} = req.body;
        if(login == 'admin' && senha == '123'){
            res.json(`Bem vindo ${login}`)
      } else{
            res.json(`Usuário ${login} não encontrado.`)
            }
        },


    listUsers(req,res){
        res.json({
            "ususario" : "admin",
            "senha"    : "admin"
        }) 
    },

    loginHeaders(req,res){
        const response = req.headers.token;
        res.json(response);
    }
}