import React, { Component } from 'react';
import firebase from '../config/Firebase'

export default class AddPost extends Component {
    constructor() {
        super()
        this.state = {
            Make: "",
            Condition: "",
            Title: "",
            Description: "",
            Price: "",
            UploadLink: "",
            Province: "",
            City: "",
            Name: "",
            Mobile: "",
            key: '',
            file: null,
        }
        // this.set_Make = this.set_Make.bind(this);
    }

    set_Make = (e) => {
        e.preventDefault();

        var key = firebase.database().ref().push().key;
        this.state.key = key;
        console.log(key);
        
        var storageRef = firebase.storage().ref('/images');
        var file = this.state.file;
        var uploadTask = storageRef.child(`images/${this.state.file.name}`).put(file);
        uploadTask.on('state_changed', (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');

        }, (error) => {
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                return uploadTask.snapshot.ref.getDownloadURL()
            })
                .then(url => {
                    this.setState({ UploadLink: url });
                    console.log(this.state);
                    firebase.database().ref('/Adds').child(key).update(this.state);
                    console.log("done", url);
                })
        });        

        console.log("running  ",this.state);
        alert("Your Ad has been submitted")


    }



    inputEvent = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }
    textEvent = (e) => {
        console.log(e.target.value)
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }
    selectEvent = (e) => {
        console.log("select", e.target.value)

        this.setState({

            [e.target.name]: e.target.value,
        })
    }
    btNew = (e) => {
        e.preventDefault();
        this.setState({ Condition: "New" })

    }
    btUsed = (e) => {
        e.preventDefault();
        this.setState({ Condition: "Used" })
    }
    render() {
        return (


            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-6 mx-auto bot">
                        {/* {console.log(firebase)} */}
                        <form>
                            <label><h4>POST YOUR ADD</h4></label>
                            {/* <h2>{this.state.Description}</h2> */}
                            <div className="card w-75">
                                <div className="card-body">
                                    <h5 className="card-title">SELECTED CATEGORY</h5>

                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                                            <li> <a href="#" className="space"> Change</a></li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <div className="card w-75">
                                <div className="card-body">
                                    <h5 className="card-title">INCLUDE SOME DETAILS</h5>
                                    <p className="card-text">
                                        <label>Make*</label><br />
                                        <input type="text" name="Make" onChange={(e) => this.inputEvent(e)} value={this.state.Make} /></p>
                                    <label>Condition*</label><br />
                                    <button id="new" onClick={(e) => { this.btNew(e) }}>New</button> <button id="used"
                                        onClick={(e) => { this.btUsed(e) }}>Used</button>

                                </div>
                                <label>Add title*</label>
                                <textarea onChange={(e) => this.inputEvent(e)} name="Title" value={this.state.Title}></textarea>
                                <label>Description*</label>
                                <textarea onChange={(e) => { this.inputEvent(e) }} name="Description" value={this.state.Description}></textarea>
                            </div>
                            <div className="card w-75">
                                <div className="card-body">
                                    <h5 className="card-title">SET A PRICE</h5>
                                    <label>Price*</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bg-white">Rs</span>
                                        <input name="Price" type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" onChange={(e) => this.inputEvent(e)}
                                            value={this.state.Price} />

                                    </div>
                                </div>
                            </div>
                            <div className="card w-75">
                                <div className="card-body">
                                    <h5 className="card-title">UPLOAD UPTO 12 PHOTOS</h5>
                                    <input type="file" name="Upload" onChange={(e) => { this.setState({ file: e.target.files[0] }) }} />
                                </div>
                            </div>
                            <div className="card w-75">
                                <div className="card-body">
                                    <h5 className="card-title">CONFIRM YOUR LOCATION</h5>
                                    <br />
                                    <label>State*</label>
                                    <br />
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => this.selectEvent(e)} name="Province">
                                        <option >Please select State</option>
                                        <option value="Sindh">Sindh</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Balochistan">Balochistan</option>
                                    </select>
                                    <br />
                                    <label>City*</label>
                                    <br />
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => this.selectEvent(e)} value={this.state.City} name="City">
                                        <option  >Please select city</option>
                                        <option value="Karachi">Karachi</option>
                                        <option value="Lahore">Lahore</option>
                                        <option value="Islamabad">Islamabad</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card w-75">
                                <div className="card-body">
                                    <h5 className="card-title">REVIEW YOUR DETAILS</h5>
                                    <br />
                                    <label>Name</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={(e) => this.inputEvent(e)} name="Name" value={this.state.name} ></textarea>

                                    <br />
                                    <h5 className="card-title">LETS VERIFY YOUR ACCOUNT</h5>

                                    <p>We will send you a confirmation code by sms on the next step</p>
                                    <br />
                                    <label>Mobile phone Number*</label><br />
                                    <input type="text" name="Mobile" onChange={(e) => this.inputEvent(e)} value={this.state.Mobile} /><br />
                                    <p>Show my phone number on my ads. <button id="onoff">ON/OFF</button></p>
                                </div>
                            </div>
                            <div className="card w-75">
                                <button onClick={(e) => this.set_Make(e)} className="post bg-primary text-white w-50 text-center d">POST</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
