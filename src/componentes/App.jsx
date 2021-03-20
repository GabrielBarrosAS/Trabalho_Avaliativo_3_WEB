import React from 'react'
import TelaLogin from './TelaLogin'
import Cadastro from './TelasCadastro/Cadastro'
import {Switch,Route} from 'react-router-dom'
export default class App extends React.Component{
    render(){
        return(
        <Switch>
            <Route exact path="/" component={TelaLogin}/>
            <Route path="/cadastro" component={Cadastro}/>
        </Switch>
        )
    }
}