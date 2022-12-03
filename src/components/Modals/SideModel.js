import React from 'react'
import {Modal} from 'react-bootstrap'

const SideModel = ({setShow, show, children, title}) => {
    return (
        <Modal
            className="modal fade fixed-right"
            dialogClassName="modal-dialog modal-dialog-vertical min-w-40vw"
            show={show}
            onHide={() => setShow(false)}
        >
            <div class="card card-lg sidebar-card">
                <div class="card-header">
                    <h4 class="card-header-title">{title}</h4>
                    <span class="js-hs-unfold-invoker btn btn-icon btn-xs btn-ghost-dark ml-2" onClick={() => setShow(false)}>
                        <i class="tio-clear tio-lg"></i>
                    </span>
                </div>
                <div class="card-body sidebar-body sidebar-scrollbar">
                    {children}
                </div>
            </div>
        </Modal>
    );
  };
  
  export default SideModel;