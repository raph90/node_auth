import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

function useAuth() {
    const authState = useSelector(state => state.auth)
    const history = useHistory()

    useEffect(() => {
        console.log(authState)
        if (!authState.authenticated){
            history.push('/signin')
        }
    }, [])

}

export default useAuth
