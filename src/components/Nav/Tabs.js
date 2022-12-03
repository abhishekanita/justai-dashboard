import React from 'react'





export const TabsRow = () => {
    return (
        <ul class="nav nav-tabs align-items-center">
            <li class="nav-item">
                <span class="nav-link" >Profile</span>
            </li>
            <li class="nav-item ml-auto">
                <a class="btn btn-sm btn-white mr-2">
                    <i class="tio-user-add mr-1"></i> Connect
                </a>
            </li>
        </ul>
    )
}