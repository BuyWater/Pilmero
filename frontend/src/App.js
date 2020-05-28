//Files
import './App.css';
import ItemCard from './ItemCard';

//Dependencies
import React, { Component } from 'react';
import Axios from 'axios';





class App extends Component {

  state = {
    parts : []
  }

  componentDidMount(){
    Axios.get('http://localhost:5000/api/part')
      .then(res => {
        if(res.data){
          this.setState({
            parts: res.data
          })
        }
      })
      .catch(err => console.log(err));
  }
  
  render(){
    return (
        <div className="App">
            <ItemCard part={this.state.parts} />
        </div>
      )
  }
}

export default App;
