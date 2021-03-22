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

    setEstado = (valores)=>{
        this.setState({nomeCadastrado: valores[0],
            emailCadastrado: valores[1],
            dataNascCadastrada: valores[2],
            numeroCasaCadastrado: valores[3],
            senhaCadastrada: valores[4],
            CPFCadastrado: valores[5],
            enderecoCadastrado: valores[6],
            complementoCadastrado: valores[7],
        })
        console.log(valores)
    }
    render(){
        return(
        <div>
        <Switch>
            <Route exact path='/' component={TelaLogin}/>
            <Route path='/cadastro' render={props => <Cadastro {...props} atualiza={this.setEstado}/>}/>
            <Route path='/verificacao' 
                render={props => <Verificacao {...props} nome={this.state.nomeCadastrado} data={this.state.dataNascCadastrada} email={this.state.emailCadastrado}/>}/>
        </Switch>
        </div>
        )
    }
}