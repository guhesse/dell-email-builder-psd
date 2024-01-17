import React from 'react'
import useCsvContext from './hook/useCsvContext.jsx'

export default function Teste(){

    const { csvValues } = useCsvContext();

    return (
        console.log("Valores Default CSV", csvValues)
    )
}