import React, { Component } from 'react'
import Hero from '../hero_bg_pk.jpg';
export default class Imagehero extends Component {
    render() {
        return (
            <div>
              <img src={Hero}  id="pic" />  
            </div>
        )
    }
}
