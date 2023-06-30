import { useState, useRef } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(''); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = ''; 
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult((result) => 0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>React Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Current running total: {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        <div className="container">
          <div className="operator-buttons">
            <button onClick={plus}>Add</button> 
            <button onClick={minus}>Subtract</button> 
            <button onClick={times}>Multiply</button>
            <button onClick={divide}>Divide</button>
          </div>
          <div className="reset-buttons">
            <button onClick={resetInput}>Reset Input</button> 
            <button onClick={resetResult}>Reset Result</button>
          </div>
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
