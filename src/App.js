import { useState } from 'react';
import './App.css';

function App() {

  let [ counter, setCounter ] = useState(15);
  // counter is variable and setCounter is function
  function incValue(){
    if(counter < 20){
      setCounter(counter + 1);
    }
    else setCounter(20);
    
  }
  function decValue(){
    if(counter > 0) setCounter(counter - 1);
    else setCounter(0);
  }

  return (
    <>
    <h1>Hello, world!</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={incValue}>Increment</button>
    <button onClick={decValue}>Decrement</button>
    </>
  );
}

export default App;
