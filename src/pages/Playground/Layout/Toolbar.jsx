import React from 'react'


const Toolbar = ({children, Footer}) => {

  return (
    <aside class="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white " style = {{top: '62.5px'}}>
        <div class="navbar-vertical-container">
            <div class="navbar-vertical-footer-offset">
                {/* <Logo /> */}
                <div class="navbar-vertical-content">
                    <div class='nav nav-pills nav-vertical card-navbar-nav'>
                        {children}
                    </div>
                </div>
                <div class="navbar-vertical-footer">
                    {Footer}
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Toolbar



const Logo = () => {
    return (
        <a class="navbar-brand" href="../index.html" aria-label="Front">
            <img class="navbar-brand-logo mt-5" src="/assets/img/logo/just.svg" alt="Logo" data-hs-theme-appearance="dark" style = {{minWidth: '90px'}}/> 
        </a>
    )
}

