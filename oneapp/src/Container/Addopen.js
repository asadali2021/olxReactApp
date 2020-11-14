import React,{Component} from 'react';
import TitleBar from './TitleBar';
import NavCat from './NavCat';
import Hero from './Imagehero';
// import Pictures from '../Gallery';
// import LoadBtn from './Load';
import Footer from './Footer';
import Details from './Details';
import Card from './Card'
// import { Component } from 'react';
import firebase from '../config/Firebase';



export default class Addopen extends Component {
    constructor(props){
        super(props)
        this.state = {
            city: '',
            imgName: '',
            price: '',
            title: '',
            description: '',
            make: '',
            id : this.props.match.params.id,
            innerdata : [],
            finaldata : {},
            condition : '',
            name: '',
            

        }
    }
    
       
componentDidMount(){
    var promise = new Promise((resolve,reject)=>{
    firebase.database().ref().on('child_added',(data)=>{
           
        resolve(data.val())
        console.log("data",data.val())
        })
    })
    promise.then( (data)=>{
        this.setState({innerdata:[data]})
        console.log("innerdata",this.state.innerdata[0][this.state.id])
        this.setState({
            
            city: this.state.innerdata[0][this.state.id].City,
            imgName: this.state.innerdata[0][this.state.id].UploadLink,
            price: this.state.innerdata[0][this.state.id].Price,
            title: this.state.innerdata[0][this.state.id].Title,
            description: this.state.innerdata[0][this.state.id].Description,
            make: this.state.innerdata[0][this.state.id].Make,
            condition: this.state.innerdata[0][this.state.id].Condition,
            name: this.state.innerdata[0][this.state.id].Name,
            mobile: this.state.innerdata[0][this.state.id].Mobile,
            province : this.state.innerdata[0][this.state.id].Province,   
        })
    })

    
    
}
    render() {
        
        return (
            <div>
                {console.log("params =>", this.state.id)}
                <TitleBar />
                <NavCat />
                <Hero />
                <Details  city={this.state.city}  province={this.state.province} imgName={this.state.imgName}  price={this.state.price} title={this.state.title} description={this.state.description} make={this.state.make} condition={this.state.condition} name={this.state.name} mobile={this.state.mobile} />
                <Footer />

            </div>
        )
    }
}
