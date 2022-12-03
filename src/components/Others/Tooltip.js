import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'


const Tooltip1 = ({tooltip}) => {
  return (
    <OverlayTrigger overlay = {<Tooltip>{tooltip}</Tooltip>}>
        <i class="tio-help-outlined text-body ml-1"></i>
    </OverlayTrigger>
  )
}


export const TooltipIconButton = ({tooltip, icon, onClick, position}) => {
  return (
    <OverlayTrigger placement={position} overlay = {<Tooltip>{tooltip}</Tooltip>}>
        <i class={icon} onClick = {onClick}></i>
    </OverlayTrigger>
  )
}

export default Tooltip1