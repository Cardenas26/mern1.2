import {React, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './Components/nav';
import axios from 'axios';
import Data from './Components/data';



const apiURL='https://dogapi.dog/api/facts';
function App() {
  const [data,setData] =useState([]);

  useEffect(() => {
    axios
    .get(apiURL)
    .then((response) => {
      setData(response.data);
      
    })
    .catch((error) => {
      console.log(error);
    });
  }
  ,[]);
 
  return (
    <div className="App">
    <Example/>
    <Data data={data}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
    </div>
  );
}

export default App;
