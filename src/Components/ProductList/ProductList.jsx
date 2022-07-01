import React, { Component } from 'react'
import danhSachGiay from "../../Data/data.json"
import ProductItem from '../ProductItem/ProductItem';

export default class ProductList extends Component {
    renderShoesList = () => {
        const content = danhSachGiay.map((ele) => {
            return (
                <ProductItem key={ele.id} showDetail={this.props.showDetail} shoesDetail ={ele}/>
            )   
        })
        return content;
    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center mx-5'>Shoes Store</h1>
                <div className="row">
                    {this.renderShoesList()}
                </div>
            </div>
        )
    }
}
