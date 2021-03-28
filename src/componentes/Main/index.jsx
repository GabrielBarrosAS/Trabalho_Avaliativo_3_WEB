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
    
    componentDidMount(){
        this.up()
    }

    up(){
        if(this.props.novo.post === true){
            this.createUsuario()
            this.props.atualiza(["","","","","","","","",false])
        }
    }

    loadUsuarios = async () => {
        const response = await api.get('/usuarios')
        this.setState({usuarios: response.data})
    }

    createUsuario = async () => {
        const dados = this.props.novo
        let aux = {
            "name": dados.nomeCadastrado,
            "email": dados.emailCadastrado,
            "password": dados.senhaCadastrada,
            "cpf": dados.CPFCadastrado,
            "endereço":{
              "CEP": dados.CEPCadastrado,
              "cidade": dados.cidadeCadastrada,
              "rua": dados.ruaCadastrada,
              "numero": dados.numeroCadastrado
            },
            "funcionario": false
        }
        console.log(aux)
        await api.post('/usuarios',aux)
        console.log('oi4')
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
        return(
            <div>
                <SideBar data={this.props.data}
                    get={this.loadUsuarios}
                    post={this.createUsuario}
                    content={this.computeContent()}
                    >
                </SideBar>
            </div>
        )
    }
}

