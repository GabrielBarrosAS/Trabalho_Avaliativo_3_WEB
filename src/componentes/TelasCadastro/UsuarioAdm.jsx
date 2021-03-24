import React from 'react'

import Sidebar from '../sidebar/Sidebar'

export default class UsuarioAdm extends React.Component{
    siderData = [
        {
            title: 'Listar Usuários',
            link: '/index'
        },
        {
            title: 'Buscar Usuário',
            link: '/buscar'
        },
        {
            title: 'Criar Usuário',
            link: '/criar'
        },
        {
            title: 'Apagar Usuário',
            link: '/apagar'
        },
    ]
    render(){
        return(
            <div>
                <Sidebar data = {this.siderData}></Sidebar>
            </div>
        )
    }
}