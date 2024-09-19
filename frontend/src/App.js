import logo from './logo.svg';
import { useEffect, useState } from "react"
import './App.css';


function App() {

  const [msg, setMsg] = useState("")

  useEffect(() => {
    loadMsg()
  }, [msg])

  function loadMsg() {
    fetch("http://localhost:8080/hello").then((res) => { return res.json() }).then((data) => {
      console.log(data)
      setMsg(data.message)
    })

  }
  return (
    <div className="App">
      <h1>{msg}</h1>
    </div>
  );
}

export default App;
