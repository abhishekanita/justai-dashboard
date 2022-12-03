import React, {useState, useEffect} from 'react'
import useOuterClick from 'hooks/useOuterClick'
import { useHistory } from 'react-router-dom';

const Dropdown = ({children, popover, wrapperClassName, popoverClassName, size, position, minWidth}) => {

    const [show, setShow] = useState(false);
    const innerRef = useOuterClick(ev => setShow(false));


    return (
        <div class="dropdown" ref = {innerRef} >
            <span className = {wrapperClassName + ' '} onClick = {() => setShow(prev => !prev)}>
                {children}
            </span>
            <div class={`dropdown-menu ${size ? `dropdown-menu-${size}` : ''} ${popoverClassName} dropdown-menu-${position ? position : 'left'} ${show ? 'show' : ''}`} style = {{minWidth: minWidth ? minWidth : 'auto'}}>
                {popover}
            </div>
        </div>
    )
}

export default Dropdown





export const BigDropdown = ({children, wrapperClassName, popoverClassName, popover, position, style}) => {

    const history = useHistory()
    const [show, setShow] = useState(false);
    const innerRef = useOuterClick(ev => setShow(false));

    useEffect(() => {
        setShow(false)
    }, [history.location.pathname])


    return (
        <div class="dropdown" ref = {innerRef}>
            <span className = {wrapperClassName + ' btn'} onClick = {(e) => setShow(prev => !prev)}>
                {children}
            </span>
            <div 
                className={`hs-unfold-content dropdown-unfold dropdown-menu ${popoverClassName} dropdown-menu-${position ? position : 'right'} navbar-dropdown-menu hs-unfold-content-initialized hs-unfold-css-animation  ${show ? 'slideInUp' : 'hs-unfold-hidden'}`} 
                style = {{...style}}
            >
                {popover}
            </div>
        </div>
    )
}
