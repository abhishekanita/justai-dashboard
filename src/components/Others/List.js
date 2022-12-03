import React from 'react'

const List = ({list}) => {
    return (
    <div class="list-group list-group-flush list-group-no-gutters">
        {list.map((item, index) => <div class="list-group-item">
            <div class="row align-items-center " key = {index}>
                <div class="col">
                    
                    <p class=" mb-0">{item.icon && <i class={`${item.icon} mr-2`}></i>}{item.label}</p>
                </div>
                <div class="col-auto">
                    {item.value}
                </div>
            </div>
        </div>)}
    </div>
    )
}

export default List