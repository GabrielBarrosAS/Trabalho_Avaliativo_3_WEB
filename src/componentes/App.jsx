import React from 'react'
import TelaLogin from './TelaLogin'
import Cadastro from './TelasCadastro/Cadastro'
import Verificacao from './TelasCadastro/VerificacaoEmail'

import {Switch,Route} from 'react-router-dom'
export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nomrCadastrado: '',
            SenhaCadastrada: '',
            emailCadastrado: '',
            CPFCadastrado: '',
            dataNascCadastrada: '',
            enderecoCadastrado: '',
            numeroCasaCadastrado: '',
            complementoCadastrado: '',
        };
    }

    setEstado = (labelEmail) =>{
        this.setState({emailCadastrado: labelEmail})
    }
    render(){
        return(
        <div>
        <Switch>
            <Route exact path='/' component={TelaLogin}/>
            <Route path='/cadastro' render={props => <Cadastro {...props} atualiza={this.setEmail}/>}/>
            <Route path='/verificacao' render={props => <Verificacao {...props} email={this.state.emailCadastrado}/>}/>
        </Switch>
        </div>
        )
    }
}