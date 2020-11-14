import React from 'react';
import { connect }  from 'react-redux';
import './style.css';

class Home extends React.Component{
  render(){
      console.log("props==>", this.props)
    return (
        <div>
         <h1>Home</h1>
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
    users: state.users,
})
export default connect(mapStateToProps, null)(Home);
