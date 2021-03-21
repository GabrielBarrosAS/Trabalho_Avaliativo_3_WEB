import React from 'react'

import TelaLogin from './TelaLogin'
import Cadastro from './TelasCadastro/Cadastro'
import Verificacao from './TelasCadastro/VerificacaoEmail'

import {Switch,Route} from 'react-router-dom'
export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nomeCadastrado: '',
            senhaCadastrada: '',
            emailCadastrado: '',
            CPFCadastrado: '',
            dataNascCadastrada: '',
            enderecoCadastrado: '',
            numeroCasaCadastrado: '',
            complementoCadastrado: '',
        };
    }

    setEstado = ([valores]) =>{
        this.setState(
        {nomeCadastrado: valores[0]},
        {senhaCadastrada: valores[1]},
        {emailCadastrado: valores[2]},
        {CPFCadastrado: valores[3]},
        {dataNascCadastrada: valores[4]},
        {enderecoCadastrado: valores[5]},
        {numeroCasaCadastrado: valores[6]},
        {complementoCadastrado: valores[7]})
    }
    render(){
        return(
        <div>
        <Switch>
            <Route exact path='/' component={TelaLogin}/>
            <Route path='/cadastro' render={props => <Cadastro {...props} atualiza={this.setEstado}/>}/>
            <Route path='/verificacao' render={props => <Verificacao {...props} email={this.state.emailCadastrado}/>}/>
        </Switch>
        </div>
        )
    }
}