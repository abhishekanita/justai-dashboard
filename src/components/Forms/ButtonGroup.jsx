import React from 'react'

const ButtonGroup = ({label, value, setValue, description, labelClass, colSize, className, options, error }) => {
  return (
    <div class={`form-group ${className}`}>
        <label className={`form-label  ${labelClass}`}>{label}</label>
        {description && <p className='text-white-50 mb-2 mt-n1'>{description}</p>}
        <div class='row no-gutters px-n2'>
            {options.map(i => <div class={`px-2 col-${colSize ? colSize : 6}`}>
                <div class={`btn btn-sm btn-block w-100 btn-outline-light text-white ${value === i.value ? 'active border border-primary' : ''}`} onClick={() => setValue(i.value)}>{i.label}</div>
            </div>)}
        </div>
        {error && <div class='invalid-feedback'>{error}</div>}
    </div>
  )
}

export default ButtonGroup