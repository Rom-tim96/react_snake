import React from 'react'

export default function Field({type}){
    
    return (
        <div className={`field field-${type}`} />
    )
}