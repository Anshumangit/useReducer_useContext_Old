import React, { createContext } from 'react'
import { useReducer } from 'react'
import ComA from './ComA'
import ComD from './ComD'

export const MyContext = createContext();
export const MyContextadd = createContext();

const istate = {
    name: 'anshu',
    addr: 'abc',
    phone: 123
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "CHANGE_ADDR":
            return {
                ...state,
                addr: action.payload
            }
        case "CHANGE_PHONE":
            return {
                ...state,
                phone: action.payload
            }
        default:
            return state;
    }
}

const App2 = () => {

    const [person, dispatch] = useReducer(reducer, istate);

    return (
        <>
            <MyContext.Provider value={{ nameval: person.name, addval: person.addr, namechange: dispatch }}>

                <ComA />
                <ComD />

            </MyContext.Provider>

        </>
    )
}

export default App2
