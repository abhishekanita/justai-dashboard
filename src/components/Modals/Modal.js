import React from 'react'
import {Modal} from 'react-bootstrap'


export const SimpleModal = ({show, setShow, children, title, footer, size, widthSize, border}) => {

    return (
        <Modal 
            show = {show} 
            onHide = {() => setShow(false)}
            dialogClassName = {`modal-dialog  modal-dialog-centered ${size ? 'modal-' + size : '' }  py-1 `}
            centered = {true}
            
        >
            <div class="modal-content " >
                {title ? <div class={`modal-header  ${border ? 'border-bottom' : ''}`}>
                    <h4 class="modal-title">{title}</h4>
                    <button type="button" class="btn btn-xs btn-icon btn-ghost-secondary" onClick = {() => setShow(false)}>
                        <i class="tio-clear tio-lg"></i>
                    </button>
                </div> :
                <div class='position-absolute top-10 right-10 z-index-99'>
                    <button type="button" class="btn btn-xs btn-icon btn-ghost-secondary" onClick = {() => setShow(false)}>
                        <i class="tio-clear tio-lg"></i>
                    </button>
                </div>}
                <div class="modal-body">
                    {children}
                </div>
                {footer && <div class="modal-footer">
                    {footer}
                </div>}
            </div>
        </Modal>
    )
}