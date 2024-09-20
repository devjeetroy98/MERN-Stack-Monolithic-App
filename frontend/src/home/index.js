import styles from './style.module.css'
import { useEffect, useState } from "react"

function Home() {

    const [msg, setMsg] = useState("")

    useEffect(() => {
        loadMsg()
    }, [msg])

    function loadMsg() {
        fetch("http://localhost:8080/rest/hello").then((res) => { return res.json() }).then((data) => {
            console.log(data)
            setMsg(data.message)
        })
    }

    return (
        <div className="App">
            <h1>Welcome {msg}</h1>
            <h1 className={styles.header_color}>This is home page!</h1>
        </div>
    );
}

export default Home;