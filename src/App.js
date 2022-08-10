// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Countriesdata from './Countriesdata';
import Countriesnormdata from './Countriesnormdata';

function App() {
  let [input,setinput]=useState('')

  let [coutriesinfo,setCountriesinfo]=useState([])
  let REACT_APP_ACCESS_KEY=`7e989419cc1e19e36bb9d48c3e583738`;

  let handlegetapi=(e)=>{
     e.preventDefault()
    //  axios.get(`https://api-ninjas.com/api/country?name=${input}`,headers={ 'X-Api-Key': 'YOUR_API_KEY'}).then((data)=>{
     axios.get(`https://apis.ccbp.in/countries-data?`).then((data)=>{
      // 7e989419cc1e19e36bb9d48c3e583738
    //  axios.get(`https://restcountries.eu/rest/v2/all`).then((data)=>{
      // axios.get(`http://api.countrylayer.com/v2/all?access_key=${REACT_APP_ACCESS_KEY}`).then((data)=>{
      // 
      console.log(data)
      setCountriesinfo(data.data)
    }).catch((e)=>console.error(e))
  }
 

 
  return (
    <div className="App" style={{backgroundColor:'rgb(10,20,40)'}}>

      <div style={{paddingTop:'15px'}}>
   <input placeholder='Type the countrys name'   onChange={(e)=>{setinput(e.target.value)

   }} style={{border:'2px solid white',padding:'5px',outline:'none'}}
    />
   <button onClick={handlegetapi
    }
    
    style={{backgroundColor:'lightgreen', border:'2px solid white',padding:'5px'}}
    
    >Submit</button></div>

    <div className='countries_data' style={{display:'flex', flexWrap:'wrap',
    justifyContent:'space-around'}}> 

      { Array.isArray(coutriesinfo) && coutriesinfo?.map((name,indx)=>{
        return(
          <div key={Math.random()}>
            <Countriesdata name={name.name}
            flagimg={name.flag} population={name.population}
/>
            
            </div>
        )
      })}

       {/* { Array.isArray(coutriesinfo) && coutriesinfo?.map((name,indx)=>{
        return(
          <div key={Math.random()}>
            <Countriesnormdata name={name.name}
            region={name.region} callingcode={name.callingCodes[0]}
            capital={name.capital}
/>
            
            </div>
        )
      })} */}

    </div>
    </div>
  );
}

export default App;
