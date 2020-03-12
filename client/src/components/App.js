import React from "react"
import Header from "components/Header"

const App = ({children}) => {
    return (
        <>
        <Header />
        { children }
        </>
    )
}

export default App