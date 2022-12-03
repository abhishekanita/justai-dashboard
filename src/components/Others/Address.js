import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import toast from 'react-hot-toast'

const Address = ({address, size, isSmall, type, rightAlign, className, label}) => {

  const copyText = () => {
    navigator.clipboard.writeText(address)
    toast.success(`${type || 'Address'} has been copied on your clipboard`)
  }

  return (
    <div class={`d-flex align-items-center link-unstyled ${className}`}>
        <span 
            class={`text-truncate text-dark ${isSmall ? 'small' :''} text-truncate-${isSmall ? 'sm' : (size || 'lg')} `}
            style = {rightAlign ? {direction: 'rtl'} : {}}
        >{label ? label : address} </span>
        {address?.length > 10 && 
            <OverlayTrigger overlay={<Tooltip>Copy</Tooltip>}>
                <div class='btn btn-xs btn-icon btn-soft-dark ml-2' onClick={() =>copyText()}>
                    <i class='tio-copy'></i>
                </div>
            </OverlayTrigger>
        }
    </div>
  )
}

export default Address