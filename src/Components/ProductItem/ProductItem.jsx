import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {name, price, image, description} = this.props.shoesDetail
    return (
            <div className="col-4 mb-4">
                <div className="card">
                    <img className="card-img-top" src={image} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}$</p>
                        <button onClick={()=>{
                            this.props.showDetail(this.props.shoesDetail)
                        }} className="btn btn-dark" data-toggle="modal" data-target="#gioHang">Show detail</button>
                    </div>
                </div>
            </div>
    )
  }
}
