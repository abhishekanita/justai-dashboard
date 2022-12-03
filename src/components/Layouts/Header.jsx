import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header" class="navbar navbar-expand-lg navbar-sidebar-detached navbar-fixed-lg navbar-light bg-light" style = {{marginLeft: '0px'}}>
        <div class="container">
            <div class="navbar-nav-wrap">
                <Logo />
                <div class="navbar-nav-wrap-content-end">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="dropdown">
                                <a class="navbar-dropdown-account-wrapper" href="javascript:;" id="accountNavbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation="">
                                    <div class="avatar avatar-sm avatar-circle">
                                        <img class="avatar-img" src="https://i.pravatar.cc/300" alt="Image Description" />
                                        <span class="avatar-status avatar-sm-status avatar-status-success"></span>
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account" aria-labelledby="accountNavbarDropdown" style={{width: "16rem"}}>
                                    <a class="dropdown-item" href="#">Sign out</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header



const Logo = () => {
    return (
        <Link to = "/app" class="" aria-label="Front">
            <img class="" src="/assets/img/logo/just.svg" alt="Logo" data-hs-theme-appearance="dark" style = {{minWidth: '90px'}}/> 
        </Link>
    )
}
