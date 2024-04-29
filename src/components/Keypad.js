// Code Keypad Component Here
import React from "react"

function Keypad (){
    function pass(){
        console.log(`Entering password...`)
    }
    return (
        <div>
            <form>
                <input type ="password" name ="password" onChange = {pass}/>
            </form>
        </div>
    )
}

export default Keypad;