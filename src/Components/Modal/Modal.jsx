import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const {name, price, description, quantity, image} = this.props.selectedShoes
        return (
            <div>
                <div
                    className="modal fade"
                    id="gioHang"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="modelTitleId"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Product Information</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <div className="row mt-5">
                <div className="col-5">
                    <h4>{name}</h4>
                    <img src={image} className="img-fluid" alt="phone" />
                </div>
                <div className="col-7">
                    <h4 className="mb-5">DETAIL</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td style={{minWidth:"130px"}}>Product name</td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{price}</td>
                            </tr>
                            <tr>
                                <td>Quantity</td>
                                <td>{quantity}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
