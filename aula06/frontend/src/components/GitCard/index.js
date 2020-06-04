import React,{Component} from 'react';
import api from '../../services/api';

import './index.css'

export default class GitCard extends Component{
    state = {
        dados : [],
    }

    async loadData(){
        const response = await api.get('/users');
        this.setState({dados : response.data});
    }

    //Tudo o que colocar ai dentro, vai acontecer assim que o componente renderizar
    componentDidMount(){
        this.loadData();
    }

    render(){
        return(
            <div className='main-container'>
                {
                    //
                    this.state.dados.map(d =>(
                        <div className='card' key={d._id}>
                            <img id='avatar' src={d.avatar_url} alt=''/>      
                                <div id='info'>
                                    <span>{d.name}</span>
                                    <p>{d.company}</p>
                                    <p>{d.bio}</p>
                                </div>
                        </div>
                    ))
                }
            </div>  
        )
    }
}