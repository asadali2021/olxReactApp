import React, { Component } from 'react'
import C1 from '../Images/car 1.webp';
import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";


export default class Card extends Component {
    constructor(props) {
        super(props)
        // this.state={
        //     data: this.props
        // }
        this.state = {
            city: this.props.city,
            imgName: this.props.imgName,
            price: this.props.price,
            title: this.props.title,
            description: this.props.description,
            make: this.props.make,
            id: this.props.id

        }
    }
    render() {
        return (
            <>
                {/* {console.log("myprops=>", this.state.data)} */}
                <div className="col-12 col-md-4 col-sm-auto">
                    <div className="card" style={{ width: '18rem' }}>
                        <Link to={`/Addopen/${this.props.id}`} id={this.state.city}><img src={this.props.imgName} className="card-img-top" alt="car1" width="300px" height="240px" /> </Link>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text text-primary "><b>{this.props.price} PKR</b></p>
                            <p className="card-text">{this.props.description}</p>
                            <p className="card-text">{this.props.make}</p>
                            {/* {console.log(this.props)} */}
                            {console.log(this.props.id)}
                        </div>
                        <div className="footer bg-white">
                            <small className="text-muted">
                                <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                                    <li>{this.props.city}</li>
                                    <li>9/11/2020 5:30:12 PM</li>
                                </ul>
                            </small>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
