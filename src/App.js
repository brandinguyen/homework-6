import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

    const [data, setData] = useState({})
    const [input, setInput] = useState('')
    useEffect(() => {
        axios.post('/name', {input})
        .then((response) => {
                setData(response.data)
        })
    }, [input])


  return (
    <div className="App">
             <h1>Your Input Request to Server </h1>
             <input type = "text" value={input} placeholder="Enter your name here" onChange= {e => setInput(e.target.value)} />
             <h1>Response from Server </h1>
             {(typeof data.name == 'undefined') ? (
                <p>Loading...</p>
             ) : (
                <p> {data.name} </p>
             ) }
        </div>
  );
}

export default App;
