import React, { useState } from 'react'

export default function Home () {
    let [text,setText]=useState("")
    

    const OnChange=(e)=>{
      setText(e.target.value)
    }

    const ToUpper=()=>
    {
      let newtext=text.toUpperCase()
      setText(newtext)
    }
    const ToLower=()=>
    {
      let newtext=text.toLowerCase()
      setText(newtext)
    }
    const ToClear=()=>
    {
      setText("")
    }
    const Reverse=()=>{
      let newtext=text.split(" ").reverse().join(" ");
      setText(newtext)
    }

  return (
    <div className='container mt-5' >
      <h2>Enter your text here .....  </h2>
        <div className="">
        <textarea className="form-control " name="text"value={text} onChange={OnChange} cols="" rows="10"></textarea>
        </div>
        
        <button className="btn btn-primary mt-3 mx-2"  onClick={ToUpper}>UPPERCASE</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={ToLower}>lowercase</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={ToClear}>Clear</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={Reverse}>
       Text Reverse 
      </button>
        <div className="container mt-3">
          <h2>SUMMARY</h2>
          <h3>Total number of characters : {text.length}</h3>
          <h3>Total number of words  : {text.split(" ").length}</h3>
        </div>
    </div>
  )
}
