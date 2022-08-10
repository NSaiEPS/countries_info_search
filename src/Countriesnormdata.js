import React from 'react'

const Countriesnormdata = ({name,
    region,callingcode,
    capital }) => {
  return (
    <div>
        <div style={{display:'flex',backgroundColor:'lightblue',marginTop:'20px', width:'250px',
        padding:'10px', borderRadius:'5px',flexDirection:'column'
    }}>
     
    <div style={{display:'flex',justifyContent:'space-around'}}>
       <span style={{alignSelf:'center'}}>{name} </span> 
    region: {region}</div> 
   <div style={{marginTop:'10px'}}>
    calling code :{ callingcode}
   {` `}
   capital: {capital}</div> 
     </div>
    </div>
  )
}

export default Countriesnormdata