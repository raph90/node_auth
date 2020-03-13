import React from 'react'
import useAuth from './useAuth'


function Feature() {
    useAuth()
    return (
        <div>
            I'm the feature page
        </div>
    )
}

export default Feature
