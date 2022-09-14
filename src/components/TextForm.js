import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUppClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = () => {
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className='conainer'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" placeholder='Enter text here' rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUppClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-5">
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}