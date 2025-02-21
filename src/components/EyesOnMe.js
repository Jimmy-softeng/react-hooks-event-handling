import React from "react";

function EyesOnMe(){
    function handleChange(event){
        console.log("Good!")
     }
     function blurChange(event){
         console.log("Hey! Eyes on me!")
     }
    return (
        <button onFocus={handleChange} onBlur={blurChange}>Eyes on me</button>
    )
}
export default EyesOnMe;