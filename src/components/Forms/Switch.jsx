import React from 'react'

const Switch = ({label, value, setValue, description, labelClass, className, type='text', placeholder, error }) => {
  return (
    <div class={`form-group ${className}`}>
        <div class="form-check form-switch form-switch-between d-flex mb-4">
            <label className={`form-check-label text-white  ${labelClass}`}>{label}</label>
            <input type="checkbox" class="form-check-input ms-auto" id="formSwitch1" />
        </div>
        {description && <p className='text-white-50 mb-2 mt-n3'>{description}</p>}
    </div>
  )
}

export default Switch