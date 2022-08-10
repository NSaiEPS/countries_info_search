import React from 'react'

const Countriesdata = ({name,flagimg,population}) => {
  return (
    <div>
        <div style={{display:'flex',backgroundColor:'lightblue',marginTop:'20px', width:'250px',
        padding:'10px', borderRadius:'5px',flexDirection:'column'
    }}>
     
    <div style={{display:'flex',justifyContent:'space-around'}}>
       <span style={{alignSelf:'center'}}>{name} </span> 
     <img src={flagimg}  alt='img' style={{width:'50px'}}/></div> 
   <div style={{marginTop:'10px'}}>population: {population}</div> 
     </div>
    </div>
  )
}

export default Countriesdata