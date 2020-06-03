import React,{Component} from 'react';

export default class Login extends Component{
    state = {
        username : ''
    }
    
    

    //Tem que passar dessa forma, e não handleLogin(event), porque ai é uma chamada de CallBack
    handleLogin = event => {
        /*A função logo abaixo é para prevenir o evento Default para evitar de ficar senmpre dando refresh na pagina*/
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value});
    }
    
    render(){
        return(
            <div>
                <from>
                    <input type='text'
                    name='username'
                    value={this.state.username}
                    //Deixando a function desse jeito sem o () ela só vai executar uma vez ao ativar o evento, e não o tempo inteiro
                    onChange={this.handleLogin}/>
                    <button type='submit'>Entrar</button>
                </from>
            </div>
        )
    }
}