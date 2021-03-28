import React from 'react'

import api from '../service/api'
import '../../estilos/sideBar.css'
import SideBar from '../sidebar/Sidebar'

export default class Main extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            usuarios:[]
        }
    }

    loadUsuarios = async () => {
        const response = await api.get('/usuarios')
        this.setState({usuarios: response.data})
    }

    createUsuario = async () => {
        await api.post('/usuarios',{
            "name": "Gabriel Barros",
            "email": "gASBASSD3@gmailll.com",
            "password": "44334",
            "cpf": "76822123-99",
            "endereço": {
              "CEP": "629000-000",
              "cidade": "Russas",
              "rua": "25 de dezembro",
              "numero": "6299"
            },
            "funcionario": false
        })
        this.loadUsuarios()
    }

    computeContent(){
        const list = []
        this.state.usuarios.map(usuario =>(
            list.push(
            <div className='itemContent' key={usuario._id}>
                {usuario._id}
                <br/>
                {usuario.name}
                <br/>
                {usuario.email}
            </div>
            )
        ))
        return list
    }

    render(){
        return <SideBar 
                    data={this.props.data}
                    get={this.loadUsuarios}
                    post={this.createUsuario}
                    content={this.computeContent()}
                    >
                </SideBar>
    }
}

