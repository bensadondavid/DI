import React, { useState } from "react";

const Car = (props) =>{

    const [color, setColor] = useState("red")


    return(
        <div>
            <h4>
            The model of my car is {props.model} and its color is {color}
            </h4>
        </div>
    )
}

export default Car