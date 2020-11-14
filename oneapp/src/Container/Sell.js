import React,{Component} from 'react';
import TitleBar from './TitleBar';
import NavCat from './NavCat';
import Hero from './Imagehero';
import Pictures from '../Gallery';
import LoadBtn from './Load';
import Footer from './Footer';
import Form from './AddPost';
// import { Component } from 'react';


export default class Sell extends Component {
    render() {
        return (
            <div>
                <TitleBar />
                <NavCat />
                <Form />
               
                
                <Footer />

            </div>
        )
    }
}
