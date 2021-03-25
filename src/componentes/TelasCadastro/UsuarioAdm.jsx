import React from 'react'

import Sidebar from '../sidebar/Sidebar'

export default class UsuarioAdm extends React.Component{
    siderData = [
        {
            title: 'Listar Usuários',
            link: '/index',
            icone: 'BsListUl'
        },
        {
            title: 'Buscar Usuário',
            link: '/buscar',
            icone: 'BsSearch'
        },
        {
            title: 'Criar Usuário',
            link: '/criar',
            icone: 'BsPlusCircle'
        },
        {
            title: 'Apagar Usuário',
            link: '/apagar',
            icone: 'BsXCircle'
        },
        {
            title: 'Atualizar Usuário',
            link: '/atualizar',
            icone: 'BsXCircle'
        },
        {
            title: 'Sair',
            link: '/',
            icone: 'BsXCircle'
        },
        {
            title: 'Apagar Usuário',
            link: '/apagar',
            icone: 'BsXCircle'
        },
        {
            title: 'Atualizar Usuário',
            link: '/atualizar',
            icone: 'BsXCircle'
        },
        {
            title: 'Sair',
            link: '/',
            icone: 'BsXCircle'
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