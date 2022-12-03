import React from 'react'

const TextArea = ({label, value, height, setValue, description, labelClass, className, type='text', placeholder, error }) => {
  return (
    <div class={`form-group ${className}`}>
        <label className={`form-label  ${labelClass}`}>{label}</label>
        {description && <p className='text-white-50 mb-2 mt-n1'>{description}</p>}
        <textarea 
            type='textarea' 
            class={`form-control  form-control-hover-light ${error ? 'is-invalid' : ''}`} 
            placeholder={placeholder}
            value = {value}
            onChange = {e => setValue(e.target.value)}
            style = {{height: height ? height : '100px'}}
        />
        <div class='invalid-feedback'>{error}</div>
    </div>
  )
}

export default TextArea