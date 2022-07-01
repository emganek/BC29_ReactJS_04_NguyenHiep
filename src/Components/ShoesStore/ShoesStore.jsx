import React, { Component } from 'react'
import Modal from '../Modal/Modal'
import ProductList from '../ProductList/ProductList'

export default class ShoesStore extends Component {
    state ={
        selectedShoes:{}
    }
    showDetail = (shoes) => {
        this.setState({selectedShoes:shoes})
    }

    render() {
        return (
            <>
                {/* Home Page */}
                <div className="row mx-0">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Shop</a>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane w3-animate-right fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <ProductList showDetail={this.showDetail}></ProductList>
                            </div>
                            <div className="tab-pane w3-animate-right fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Updating...</div>
                        </div>
                    </div>
                </div>
                {/* Modal section */}
                <Modal selectedShoes={this.state.selectedShoes}></Modal>
            </>

        )
    }
}
