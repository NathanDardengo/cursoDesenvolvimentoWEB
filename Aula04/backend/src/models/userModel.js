const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String,
    login : String,
    password : {
        type : String,
        required : true,
    },
    sex : String,
    age : Number
},{
    /*Esse é um parametro da função Schema, e ao criar esse parametro
    Toda a informação que eu for gravar no banco, vai ser cirado com
    As informações de data de criação e data de alteração aotomaticamente!*/
    timestamps : true

});

module.exports = mongoose.model('User',userSchema);