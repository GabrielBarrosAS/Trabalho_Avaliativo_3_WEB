import React from 'react'
import TelaLogin from './TelaLogin'
import Cadastro from './TelasCadastro/Cadastro'
export default class App extends React.Component{
    render(){
        return(
            <div>
                <TelaLogin/>
                <Cadastro/>
            </div>
        )
    }
}