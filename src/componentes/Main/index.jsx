import React from 'react'
import api from '../service/api'

export default class Main extends React.Component{
    state = {
        encomendas:[]
    }

    componentDidMount(){
        this.loadProducts()
    }

    loadProducts = async () => {
        const response = await api.get('/encomendas')
        this.setState({encomendas: response.data})
    }

    computeContent(){
        const list = []
        this.state.encomendas.map(encomenda =>(
            list.push(
            <div className={this.props.aux} key={encomenda._id}>
                {encomenda._id}
                <br/>
                {encomenda.clientes[0].nome}
                <br/>
                {encomenda.clientes[1].nome}
            </div>
            )
        ))
        this.state.encomendas.map(encomenda =>(
            list.push(
            <div className={this.props.aux} key={encomenda._id}>
                {encomenda._id}
                <br/>
                {encomenda.clientes[0].nome}
                <br/>
                {encomenda.clientes[1].nome}
            </div>
            )
        ))
        this.state.encomendas.map(encomenda =>(
            list.push(
            <div className={this.props.aux} key={encomenda._id}>
                {encomenda._id}
                <br/>
                {encomenda.clientes[0].nome}
                <br/>
                {encomenda.clientes[1].nome}
            </div>
            )
        ))
        return list
    }

    render(){
        return this.computeContent()
    }
}

