import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link class="navbar-brand" to="/">
            <img class="navbar-brand-logo" src="/assets/svg/logos/logo.svg" alt="Logo" />
        </Link>
    )
}

export default Logo
