import React from 'react'

const Images = ({children}) => {
  return (
    <div class="splitted-content-fluid content-space" style={{paddingRight: '22rem'}}>
      <div class="">
            {children}
      </div>
    </div>
  )
}

export default Images