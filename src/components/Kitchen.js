import React from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../firebase'

export default function Kitchen(props) {

    if (!props.user) {
        console.log('here', props.user)
        return <Redirect to="/" />
    }

    return (
        <>
            <h1>User {props.user.email} is in kitchen</h1>
        </>
    )
}