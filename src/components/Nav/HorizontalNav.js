import React from "react"

const HorizontalNav = ({buttonsOnRight, className, navItems, selected, setSelected}) => {
    return (
        <div class={`js-nav-scroller hs-nav-scroller-horizontal ${className}`}>
            <ul class="nav nav-tabs align-items-center justify-content-end">
                {navItems.map((item) => <li class="nav-item" key = {item.value} onClick = {() => setSelected(item.value)}>
                    <span class={`nav-link pointer ${selected === item.value ? 'active' : ''}`}>{item.label}</span>
                </li>)}
                {buttonsOnRight ? <li>{buttonsOnRight}</li> : ''}
            </ul>
      </div>
    )
}

export default HorizontalNav