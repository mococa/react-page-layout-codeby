import React from 'react'

function Header() {
    return (
        <header>
            <img src={process.env.PUBLIC_URL+"/img/logo.png"} alt="Logo" />
            <h1>we have ideas to
growth your business</h1>
            <button onClick={()=>window.location.href="#growth-plans"}>SEE NOW</button>
        </header>
    )
}

export default Header
