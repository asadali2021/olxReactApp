import React, { Component } from 'react';
import Pic from '../Images/car 2.jpg';
import Map from '../Images/staticmap.png';
import firebase from '../config/Firebase';


export default class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            city: this.props.city,
            // imgName: this.props.imgName,
            // price: this.props.price,
            // title: this.props.title,
            // description: this.props.description,
            // make: this.props.make,
            // id: this.props.id

        }
        // this.state = {
        //     dvalue : [],
        //     udata:[]
        // }

    }

 
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={this.props.imgName} className="d-block w-100" alt={this.props.name} />
                                </div>
                                <div className="carousel-item">
                                    <img src={this.props.imgName} className="d-block w-100" alt={this.props.name} />
                                </div>
                                <div className="carousel-item">
                                    <img src={this.props.imgName} className="d-block w-100" alt={this.props.name} />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                            <div className="card">
                                <div className="card-body">
                                    <ul className="d-flex list">
                                        <li>Type</li>
                                        <li>Cars</li>
                                        <li>Condition:</li>
                                        <li><b>{this.props.condition}</b></li>
                                    </ul>
                                    <hr />
                                    <h4>Description</h4>
                                        <p>{this.props.make}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 ">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h2> {this.props.title}</h2>
        <p>Rs {this.props.price}</p>
                                        <div className="nine">
                                            <div className="ten">{this.props.city} {this.props.province}</div>
                                            <div className="eleven">11/9/2020</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h2>Seller's Description</h2>
                                             <p>{this.props.name}</p>
                                        <p>Date of regstration</p>
                                        <button className="w-100 bg-primary text-white bd">Chat</button>
                                        <div className="text-center"> ****** <a href="#">Show Number</a> </div>
                                        <div className="nine">
                                            <div className="ten">{this.props.city} {this.props.province}</div>
                                            <div className="eleven">11/9/2020</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5>Posted from</h5>
                                        <p>{this.props.city}, {this.props.province}</p>
                                        <div className="nine">
                                            <img  src={Map} width="600px" />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
