import React from 'react'
import api from '../service/api'
import '../../estilos/sideBar.css'
export default class Main extends React.Component{
    state = {
        encomendas:[]
    }

    componentDidMount(){
        switch (this.props.code) {
            case '1':
                this.loadProducts()
                console.log('1')
                break;
            case '2':
                this.setState({encomendas: []})
                console.log('aaa')
                break;            
            default:
                break;
        }
    }

    componentDidUpdate(){
        switch (this.props.code) {
            case '1':
                this.loadProducts()
                break;
            case '2':
                if(this.state.encomendas.length !== 0){
                    this.setState({encomendas: []})
                }
                break;            
            default:
                break;
        }
    }

    loadProducts = async () => {
        const response = await api.get('/encomendas')
        this.setState({encomendas: response.data})
    }

    computeContent(){
        const list = []
        this.state.encomendas.map(encomenda =>(
            list.push(
            <div className='itemContent' key={encomenda._id}>
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
            <div className='itemContent' key={encomenda._id}>
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
            <div className='itemContent' key={encomenda._id}>
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
            <div className='itemContent' key={encomenda._id}>
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
            <div className='itemContent' key={encomenda._id}>
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

