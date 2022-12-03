import React from 'react'

const VerticalNav = ({selected, setSelected, list, size}) => {
  return (
    <div class="list-group">
        {list.map(item => <span class={`list-group-item  pointer list-group-item-action ${selected === item.value ? 'active' : ''}`} onClick = {() => setSelected(item.value)}>
            {item.icon && <i class={`tio-${item.icon} list-group-icon`}></i>} {item.label}
        </span>)}
    </div>
  )
}

export default VerticalNav