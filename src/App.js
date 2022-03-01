import React, { useReducer } from "react";

const istate = {
  name: 'ramesh',
  wish: ['code', 'eat', 'sleep'],
  addr: 'abc'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'CHANGE_ADDR':
      return {
        ...state,
        addr: action.payload
      }


    default:
      return state;
  }
}

const data = 'https://jsonplaceholder.typicode.com/users'

const App = () => {

  const [namestate, dispatch] = useReducer(reducer, istate)
  const [namestate2, dispatch2] = useReducer(reducer, istate)

  const getdata = async () => {
    const userdata = await fetch(data);
    const resp = await userdata.json();
    console.log(resp[0].name);
    dispatch({ type: 'CHANGE_NAME', payload: resp[0].name })
  }

  return (
    <>
      <h2>{namestate.name}</h2>
      <h2>I wish to {namestate.wish[0]}</h2>
      <h2>{namestate.addr}</h2>
      <br />
      <h2>{namestate2.name}</h2>
      <button onClick={() => { dispatch({ type: 'CHANGE_NAME', payload: 'anshuman' }) }}>Change name1</button>
      <button onClick={() => { dispatch({ type: 'CHANGE_ADDR', payload: 'def' }) }}>Change addr</button>

      <button onClick={() => { dispatch2({ type: 'CHANGE_NAME', payload: 'anshuman2' }) }}>Change name2</button>
      <button onClick={getdata}>Change name api</button>



    </>
  )
}

export default App;