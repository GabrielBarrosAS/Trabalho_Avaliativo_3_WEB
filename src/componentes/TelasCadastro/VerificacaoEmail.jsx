import React from 'react'

export default class VerificacaoEmail extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <h1>Enviamos um email para: {this.props.email}</h1>
    }
}