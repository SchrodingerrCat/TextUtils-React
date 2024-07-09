import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=> {
    setText(text.toUpperCase());
  }

  const handleLoClick = ()=> {
    setText(text.toLowerCase());
  }
  const handleOnChange = (event)=> {
    setText(event.target.value) ;
  }

  const [text,setText] = useState('Enter text here');
  return (
    <>
    
    <div className='container' style = {{color: props.mode==='light'?'black': 'white'}}>
    <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value = {text} onChange = {handleOnChange} rows="8" style={{backgroundColor: props.mode==='light' ? '#e0dede' : '#3b4045' , color: props.mode==='light'?'black': 'white' , borderColor: props.mode==='light'? 'black' : 'white' }}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert To Uppercase </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert To Lowercase </button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='light'?'black': 'white'}}>
      <h2> Your text summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length } Minutes read </p>
    </div>
    <div className="container my-3" style = {{color: props.mode==='light'?'black': 'white'}}>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : " Enter something to preview it here "}</p>
    </div>
    </>
  )
}
