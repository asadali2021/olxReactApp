import React, { Component } from 'react';
import Card from './Container/Card';
import Sdata from "./Container/Sdata";
// import C1 from './Images/car 1.webp';
import Redux from 'react-redux';
import { connect }  from 'react-redux';
import firebase from './config/Firebase';

export default class Gallery extends Component {


constructor(){
    super()
    this.state = {
        dvalue : [],
        udata:[]
    }
   
          
            
           
}
componentDidMount(){
    var promise = new Promise((resolve,reject)=>{
    firebase.database().ref().on('child_added',(data)=>{
           
        resolve(data.val())
        // console.log("data",data.val())
        })
    })
    promise.then( (data)=>{
        this.setState({dvalue:[data]});
        // console.log("dvalue",this.state.dvalue)

        const elements = Object.keys(this.state.dvalue[0]);
    console.log("element",elements);
    this.setState({udata:elements})
    console.log("udata",this.state.udata)


    // elements.map((item,index)=>{
    //     // console.log(elements[index])
    //     // console.log(this.state.dvalue[0].[elements[index]] )    
    //     console.log((this.state.dvalue[0][elements[index]]).City)
        
    // })
    // const nextElements = Object.keys(elements[0]);
    
    // nextElements.map((index,item)=>{
    //     console.log(nextElements[index])
    // })


    })
    .catch(error=>console.log(error))
    

    const elements = Object.keys(this.state.dvalue);
    console.log(elements);
    // elements.map(()=>{
    //     console.log(elements)
    // })
    const nextElements = Object.keys(elements);
    this.setState({udata:nextElements})
    console.log(nextElements)
    // nextElements.map((index)=>{
    //     console.log(nextElements[index])
    // })
}
    render() {
        return (
            <>
            <div className="container">
            <div className="row gy-4 ">
        {/* <h2>{this.state.dvalue}</h2> */}
            

            

            {/* {
            this.state.dvalue.map((item,index)=>{
                return(
                    // <Card imgName={item.imgName} name={item.Name} key={index} price={item.Price} currency={item.Currency} description={item.Description} />
                    console.log(this.state.dvalue[0])
                )
            })} */}
            {
                this.state.udata.map((item,index)=>{
                    return(
                    // console.log(elements[index])
                    // console.log(this.state.dvalue[0].[elements[index]] )    
                    // console.log((this.state.dvalue[0][this.state.udata[index]]).UploadLink)
                   <Card city = {(this.state.dvalue[0][this.state.udata[index]]).City} 
                    imgName = {(this.state.dvalue[0][this.state.udata[index]]).UploadLink}
                    price = {(this.state.dvalue[0][this.state.udata[index]]).Price}
                    title = {(this.state.dvalue[0][this.state.udata[index]]).Title}
                    description = {(this.state.dvalue[0][this.state.udata[index]]).Description}
                    make = {(this.state.dvalue[0][this.state.udata[index]]).Make}
                    id = {[this.state.udata[index]]}
                    key = {index}

                    /> 
                    // imgName={item.imgName}
                    //  name={item.Name} 
                    //  key={index} 
                    //  price={item.Price} 
                    //  currency={item.Currency} 
                    //  description={item.Description} 
                    
                
                    
                )
                })
            }
            
            
            </div>
            </div>
            </>
            
            )
                // export default (state = INITIAL_STATE , action) => {
                //     return state;
                // }
    }
}
