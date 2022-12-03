import React from 'react'



const NavSegment = ({navMap, selected, color, setSelected}) => {
    return (
        <ul class={`nav nav-segment  ${color ? `bg-soft-${color}` : ''}`} id="projectsTab" role="tablist">
            {navMap.map(item => <li class="nav-item">
                <a class={`nav-link ${item.value === selected ? 'active' : ''}`} onClick={()  => setSelected(item.value)}>
                    {item.icon && <i class={`tio-${item.icon}`}></i>}
                    {item.label && item.label}
                </a>
            </li>)}
        </ul>
    )
}

export default NavSegment



export const FullNavSegment = ({navMap, selected, setSelected}) => {
    return (
        <ul class="nav nav-segment bg-soft-primary w-100" id="projectsTab" role="tablist">
            {navMap.map(item => <li class={`nav-item ${navMap.length > 2 ? 'w-33' : 'w-50'}`}>
                <a class={`nav-link text-center ${item.value === selected ? 'active' : ''}`} onClick={()  => setSelected(item.value)}>
                    {item.icon && <i class={`tio-${item.icon}`}></i>}
                    {item.label && item.label}
                </a>
            </li>)}
        </ul>
    )
}