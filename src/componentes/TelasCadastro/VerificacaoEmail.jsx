import React from 'react'

export default class VerificacaoEmail extends React.Component{
    render(){
        return <h1>Sr(a) {this.props.nome},nascido em {this.props.data}.Enviamos um email para: {this.props.email}</h1>
    }
}