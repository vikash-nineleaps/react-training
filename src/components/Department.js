import Car from "./Car";
import React from "react";
export default function Department(props){
return (
    <>

    <h1>I am {props.level} manager and my name is {props.name}</h1>
    <Car color="red"/>
    </>
)
}