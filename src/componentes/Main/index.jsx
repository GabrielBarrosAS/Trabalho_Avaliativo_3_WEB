import React from 'react'
import api from '../service/api'
export default class Main extends React.Component{
    loadProducts = async () => {
        const list = []
        const response = await api.get('/encomendas')
        console.log(response.data)
        response.data.map(obj =>(
            list.push(obj)
        ))
        console.log(list)
        return list
    }

    render(){
        return this.loadProducts()
    }
}