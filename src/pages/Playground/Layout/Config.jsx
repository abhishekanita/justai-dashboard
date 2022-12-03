import React from 'react'

const Config = ({children}) => {
  return (
    <div class=" splitted-content-bordered d-flex flex-column" style = {{
      top: '62.5px',
      right: '0px',
      position: 'fixed',
      width: '320px',
      height: 'calc(100vh - 62.5px)',
      zIndex: '1000',
    }}>
      <div class="offcanvas-body">
        <div class="d-flex  flex-column align-items-center h-100 p-4">
          {children}
          </div>
      </div>
    </div>
  )
}

export default Config