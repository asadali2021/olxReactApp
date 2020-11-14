import React from 'react';
import LOGO from '../olx_logo.png';
import SELL from '../sell.PNG';
import firebase from '../config/Firebase'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


export default class TitleBar extends React.Component {
    constructor(){
        super()
        this.state={
            flag : null,
        }
    }
   fbLogin =() =>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        
        var user = result.user;
        console.log("user==>",user) 
        
        

            this.setState({flag : true})
        
      }).catch((error)=> {

        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        
        
        console.log("error==>",errorMessage)
        
      });
      
console.log("hello")   
}
logOut = ()=>{
    firebase.auth().signOut().then(()=> {
        // Sign-out successful.
        console.log("logout")
        this.setState({
            flag : false
        })
      }).catch((error)=> {
        // An error happened.
        console.log("error",error)
      });
  }
    render() {
       
        return (
            <div className="title-content d-flex">
                {console.log(this.state.flag)}
                <ul className="toplist">
                    <li><Link to='/'><img src={LOGO} width="60px" title="OLX Pakistan (Zindabaad)" className="pos" /></Link></li>
                    <li className="pos"><select className="SelectBar">
                        <option>Use Current Location</option>
                        <option>Recent Locations</option>
                        <option>Nazimabad</option>
                        <option>Clifton</option>
                        <option>Gulshan</option>
                    </select></li>
                    <li><input className="SearchBar pos" placeholder="Find Cars, Mobile Phones and more..." /></li>
                    {
                        this.state.flag==true ?<li id="login" className="pos"><button onClick={this.logOut}>Logout fb</button></li> :
                        <li id="login" className="pos"><button onClick={this.fbLogin}>Login fb</button></li>
                    }
                    
                    

                    <li id="selling" className="pos">
                        
                      <Link to='/Sell'><img src={SELL} width="80px" /></Link>  </li>
                </ul>
                
                 
            </div>
        )
    }
}
