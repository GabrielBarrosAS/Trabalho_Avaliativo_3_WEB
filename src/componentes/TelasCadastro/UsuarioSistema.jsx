import React from 'react'

export default class UsuarioSistema extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          leftOpen: true,
          rightOpen: true,
        }
    }


    render(){
        return(
            <div id='telaUsuarioLogado'>
                <h1>Sr(a) {this.props.nome} , nascido em {this.props.data}. Enviamos um email para: {this.props.email}</h1>
                <button>MENU</button>
            </div>
        )
    }
}