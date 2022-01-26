import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setext] = useState('');
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setext(newText);
        props.showAlert("success","Converted to upper case!!");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setext(newText);
        props.showAlert("success","Converted to lower case!!");
    }
    const handleClear = ()=>{
        setext('');
        props.showAlert("success","Cleared!!");
    }
    
    const handleCopy = ()=>{
        var text = document.getElementById("myID");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success","Cpoied to clipboard!!");
    }
    const handleExtraSpaces = ()=>{
        var newtext = text.split(/[ ]+/);
        setext(newtext.join(" "))
        props.showAlert("success","Extra spaces removed!!");
    }
    
    const handleOnChange = (event)=>{
        setext(event.target.value);
    }

    
    return(
    <>
    <div className="container my-3" style={{color:props.mode === 'light'?'black':'white'}}>
        <h1>TextINFO</h1>
        <div className="mb-3"  >
        <textarea className="form-control"  value = {text} style={{backgroundColor:props.mode === 'light'?'white':'#061922',color:props.mode ==='light'?'black':'white'}} placeholder="Write your text here" onChange={handleOnChange} id="myID" rows="7"></textarea>
        </div>
        <button className="btn btn-info mx-1" onClick={handleUpClick}>Convert to Upper case</button>
        <button className="btn btn-info mx-1" onClick={handleLoClick}>Convert to Lower case</button>
        <button className="btn btn-info mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-info mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-info mx-1" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'light'?'black':'white'}}>
        <h3>Summary of your text</h3>
        <p>{text.split(" ").length -1} words, {text.length} letters</p>
        <p>{(text.split(" ").length-1) * 0.008} Minutes reading time</p>
        <h3>Preview of your text</h3>
        <p >  {(text.length === 0)?"Enter something in the above textbox to Preview it":text}</p>
    </div>
    </>
    )
}
