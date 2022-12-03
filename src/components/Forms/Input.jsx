import React from 'react'

const Input = ({label, value, setValue, description, labelClass, className, type='text', placeholder, error }) => {
  return (
    <div class={`form-group ${className}`}>
        <label className={`form-label  ${labelClass}`}>{label}</label>
        {description && <p className='text-white-50 mb-2 mt-n1'>{description}</p>}
        <input 
            type={type} 
            class={`form-control  form-control-hover-light ${error ? 'is-invalid' : ''}`} 
            placeholder={placeholder}
            value = {value}
            onChange = {e => setValue(e.target.value)}
        />
        <div class='invalid-feedback'>{error}</div>
    </div>
  )
}

export default Input