import React from "react";
import pavao from "../pavão.jpg"

export default function InfoUsuario(){
    const usuario= "Luiz Fernando";

    return(
        <>
            <img src={pavao} alt="" />
            <h4>{usuario}</h4>
        </>
    )
}