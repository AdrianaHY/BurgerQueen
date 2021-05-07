import React from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../firebase'

export default function Home(props) {

    function handleLogout(e) {
        auth.signOut().then(()=> console.log('signout'))
    }

    if (!props.user) {
        console.log('here', props.user)
        return <Redirect to="/" />
    }

    return (
        <>
            <h1>User {props.user.email} is logged in</h1>
            <button onClick={handleLogout}>Log out</button>
        </>
    )
}