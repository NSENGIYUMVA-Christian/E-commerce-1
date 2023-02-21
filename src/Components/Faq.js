import React from "react"
import {useState} from "react"

export default function Faq()
{
// setting the description
const descr = `Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur aut consequatur quia totam eaque, autem eius dolorem aliquid minima, quibusdam nobisimpedit earum tempore et adipisci blanditiis officia odit velit!`

// setting the readMore or less state
const [show,setShow] = useState(false)  
// toggling the show state  
const showDescr = () => setShow(prevShow=>!prevShow)


    return (
        <div >
            <h1>When have you started</h1>
          {show && <p>{descr}</p> }
            <button onClick={showDescr}>{show ? "Hide" : "Read more"}</button>
            </div>
        

    
    )
}


