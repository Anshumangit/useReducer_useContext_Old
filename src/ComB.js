import React, { useContext } from 'react'
import ComC from './ComC'
import { MyContext } from './App2'

const ComB = () => {

    const namecont = useContext(MyContext);

    return (
        <div>
            <h2>COM-B {namecont.nameval}</h2>
            <button onClick={() => { namecont.namechange({ type: 'CHANGE_NAME', payload: 'anshuman' }) }}>Change Name</button>
            <ComC />
        </div>
    )
}

export default ComB
