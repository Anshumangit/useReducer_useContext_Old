import React, { useContext } from 'react'
import { MyContext } from './App2'

const ComE = () => {
    const namecon2 = useContext(MyContext)
    return (
        <div>
            <h2>COM-E {namecon2.addval}</h2>
            <button onClick={() => { namecon2.namechange({ type: 'CHANGE_ADDR', payload: 'def' }) }}>change address</button>
            <h3></h3>
        </div>
    )
}

export default ComE
