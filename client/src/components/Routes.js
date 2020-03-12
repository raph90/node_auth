import React from 'react'
import { Route } from 'react-router-dom'
import Welcome from 'components/Welcome'
import SignIn from 'components/SignIn'
import Signup from 'components/auth/Signup'

function Routes() {
    return (
        <>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route path="/signup" component={Signup} />
        </>
    )
}

export default Routes
