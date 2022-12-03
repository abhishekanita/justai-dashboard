import Dropdown, { BigDropdown } from 'components/Forms/Dropdown'
import React, { useState } from 'react'
import { addOpacity, VBColorToHEX } from 'utilis/helpers'

const Tags = ({tags, isClearOption, clearTag}) => {
    return (
        <div class>
            {tags && tags.map((item, index) => <span 
                class={`badge mr-2 ${typeof item.color ==='string' ? `badge-soft-${item.color ? item.color : 'primary'}` : "border border-secondary"}`} 
                key = {index}
                style = {(item.color && typeof item.color !== 'string') ? {color: VBColorToHEX(item.color), backgroundColor: addOpacity(VBColorToHEX(item.color), 0.2)} : {}}
            >
                {item.icon && <i class={'mr-1 tio-' + item.icon}></i>}
                {item.label}
                {isClearOption && <i class='tio-clear ml-2 pointer' onClick={() => clearTag(item.value)}></i>}
            </span>)}
        </div>
    )
}


export const AddTag = ({newTag, setNewTag, createNew, position, tags, label}) => {

    return (
        <Dropdown
            wrapperClassName = "" 
            popoverClassName = "navbar-dropdown-account"
            popover = {<div class=''>
                <div class='mx-3'>
                    <input 
                        class='form-control form-control-sm ' 
                        placeholder='Search or create tags'
                        value = {newTag}
                        onChange = {e => setNewTag(e.target.value)}
                    />
                </div>
                <div class='mt-2'>
                    <div style={{maxHeight: '140px', overflow: 'scroll'}}>
                        {tags.filter(item => {
                            if(newTag) {
                                return item.label.toLowerCase().includes(newTag.toLowerCase())
                            } else return true
                        }).map(item => <div class={`dropdown-item ${item.color ? 'hover-soft-'+item.color : ''}`} onClick={() => createNew(item.label, item.color)}>
                            <div className='d-flex align-items-center'>
                                {item.color && <i class={`tio-circle mr-2 text-${item.color}`}></i>}
                                <span class='text-truncate' >{item.label}</span>
                            </div>
                        </div>)}
                    </div>
                    
                    {newTag && newTag.length > 0 && <>
                        <div class="dropdown-divider"></div>
                        <div class='dropdown-item ' onClick={() => createNew()}>
                            <span class='text-primary ml-n3'>+ Add tag :</span> {newTag}
                        </div>
                    </>}
                </div>
            </div>}
            minWidth = "14rem"
            position = {position || 'left'}
        >
            {label ? label : <div class>
                <span class={`badge badge-soft-secondary pointer`}>
                    <i class={'mr-1 tio-label'}></i> Add tag
                </span>
            </div>}
        </Dropdown>
    )
}

export default Tags