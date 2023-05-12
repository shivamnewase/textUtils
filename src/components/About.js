import React, { useState } from "react";

export function About(props){
   let [myStyle, setMyStyle] = useState( {
    color:"black",
    backgroundColor:"white",
    });

    let [btnText, setBtnText] = useState("Enable Dark Mode")

  
    let toggleChangeColor = ()=>{
    if(myStyle.color == 'black'){
      
      setMyStyle({
        color:"white",
        backgroundColor:"black"
      })
      setBtnText("Enable Light Mode")
    }
    else{
      setMyStyle({
        color:"black",
        backgroundColor:"white"
      })
      setBtnText("Enable Dark Mode")
    }
  }

  return (
    <>
    <div className="container" >
      <h2 className={`my-4 text-${props.mode==='light' ? 'black': 'white'}`}>AboutUs</h2>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Information About Application
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Easily convert text between different letter cases:lower case, UPPER CASE.</strong>
        .
      </div>
    </div>
  </div>
</div>

</div>
{/* <div className="container "> */}
{/* <button className="btn btn-primary my-4" onClick={toggleChangeColor}>{btnText}</button> */}
{/* </div> */}
    </>
  )
} 

