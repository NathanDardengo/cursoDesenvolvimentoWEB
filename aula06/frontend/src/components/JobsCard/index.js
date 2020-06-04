import React,{Component} from 'react';

import jobIcon from '../../img/job.png';

import './index.css';

export default class JobsCard extends Component{
    render(){
        return(
            <div className='jobsCard-container'>
                <img src={jobIcon} alt=''/>
                <div className='jobsCard-desc'>
                    <span>Desenvolvedor React</span>
                    <p>Vila Velha</p>
                    <p>LoboTech</p>
                </div>

            </div>
        )
    }
}