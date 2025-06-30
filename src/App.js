import { useState, useEffect } from "react";

const App = ()=> {
    const [windwSize, setWindowSize] = useState(window.innerWidth)
    
    const sizeControl = ()=>{
        setWindowSize(window.innerWidth)
    }

    useEffect( () => {
        console.log("useEffect !!")
        window.addEventListener("resize", sizeControl)
        return () => {
            console.log("cleanUp function")
            window.removeEventListener("resize", sizeControl)
        }
    })

    return (
        <div>
            <h1>Window width</h1>
            <h2>{windwSize}</h2>
        </div>
    )   
}

export default App