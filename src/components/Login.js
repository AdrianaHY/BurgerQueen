import { useState } from "react"
import { auth } from '../firebase'
import React from 'react'
import { Redirect } from "react-router"

const initialInputs = {
  email: '',
  password: ''
}

export default function Login(props) {
  const [inputs, setInputs] = useState(initialInputs)

  function handleOnChange(e) {
    const { id, value } = e.target 
    const newObject = { ...inputs, [id]: value }
    setInputs(newObject)
  }

  function handleSubmit(e) {
    e.preventDefault()
    auth.signInWithEmailAndPassword(inputs.email, inputs.password)
  }

  if (props.user) {
    return <Redirect to="/home" />
  }

    return (
        <>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail: </label>
                <input id="email" type="email" value={inputs.email} onChange={handleOnChange} />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" value={inputs.password} onChange={handleOnChange} />
                <input type="submit" value="Log in" />
            </form>
        </>
    )
}