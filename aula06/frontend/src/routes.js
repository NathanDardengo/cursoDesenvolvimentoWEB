import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from './pages/Login';

import Dashboard from './pages/Dashboard';

export default class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/dashboard' component={Dashboard}/>
            </Switch>
        )
    }
}