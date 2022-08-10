// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  let [input,setinput]=useState('')

  let handlegetapi=(e)=>{
     e.preventDefault()
    //  axios.get(`https://api-ninjas.com/api/country?name=${input}`,headers={ 'X-Api-Key': 'YOUR_API_KEY'}).then((data)=>{
     axios.get(`https://apis.ccbp.in/countries-data`).then((data)=>{
      console.log(data)
    }).catch((e)=>console.error(e))
  }
 

 
  return (
    <div className="App">
   <input placeholder='type the countrys name'   onChange={(e)=>{setinput(e.target.value)

   }}/>
   <button onClick={handlegetapi
    }>Submit</button>
    </div>
  );
}

export default App;
