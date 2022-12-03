import React from 'react'
import {OverlayTrigger, Tooltip, Popover, Button} from 'react-bootstrap'


const Popup = ({popup, children, maxWidth, placement}) => {


    const popupOver = (
        <Popover 
            title="" 
            style={{maxWidth: maxWidth || "600px"}}
        >
            <div>Hey</div>
        </Popover>
    )

    return (
        <OverlayTrigger 
            trigger="click" 
            rootClose 
            placement={placement || "bottom"}
            overlay={popupOver}
        >
            {children}
        </OverlayTrigger>
    )
}

export default Popup
