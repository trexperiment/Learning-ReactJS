import React, {useState} from 'react'

export default function Textform(props) {
  
    // Set the typing value in textArea.
    const handleOnChnage = (event) => {
        setText(event.target.value);
    }

    // To change UpperCase value.
    const handleUpClick = () =>{
        const newText = text.toUpperCase();
        setText(newText)
    }

    // To clear the text value.
    const handleClearText = () =>{
        //const newText = text.toUpperCase();
        setText("")
    }

    // To download the text.
    const downloadText = () =>{
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('myBox').value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myTextFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    // To change UpperCase value.
    const handleLoClick = () =>{
        const newText = text.toLowerCase();
        setText(newText)
    }

    const [text, setText] = useState("");

  
    return (
    
        <>     
        <div className='container'>  
        <div className="mb-3">
              
            <label for="myBox" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleOnChnage}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText} >Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={downloadText} >Download Text</button>
         </div>
        
        <class className="container">
            <h2>Text Summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.03 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </class>

    </>
 
  );
}
