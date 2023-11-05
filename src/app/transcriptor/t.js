"use client"
import React, { useState, useEffect } from 'react';


export default function scren() {
    const [recording, setRecording] = useState("");

    const record = async() => {
        console.log("recording")
    }

    useEffect(() => {
        if (recording === "true"){
            record()
        }

        console.log(recording)
      }, [recording]);

  return (
    <div>
    <button onClick={()=>{setRecording("true")}}>Start</button>
    <button onClick={()=>{setRecording("false")}}>Stop</button>
    </div>
  )
}
