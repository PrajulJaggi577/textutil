import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUppClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className='conainer text-center' style={{backgroundColor: props.mode==='light'?'white':'#343a40', color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#343a40', color: props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" placeholder='Enter text here' rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUppClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleClear}>Clear Text</button>
            
        </div>
        <div className="container my-5" style={{backgroundColor: props.mode==='light'?'white':'#343a40', color: props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ?text:"Enter text to preview here"}</p>
        </div>
        </>
    )
}