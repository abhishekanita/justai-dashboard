import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div class='row'>
        <div class='col-6'>
            <Link to = "/finetune" class="card card-hover-shadow pointer" >
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <img class="avatar avatar-lg avatar-4x3" src="https://htmlstream.com/front-dashboard/assets/svg/illustrations-light/oc-megaphone.svg" alt="Image Description" style={{minHeight: "5rem"}} data-hs-theme-appearance="dark" />
                        </div>
                        <div class="flex-grow-1 ms-4">
                            <h3 class="text-inherit mb-1">Fine tune your images</h3>
                            <span class="text-body">Create a new product</span>
                        </div>
                        <div class="ms-2 text-end">
                            <i class="bi-chevron-right text-body text-inherit"></i>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        <div class='col-6'>
            <Link to = "/playground" class="card card-hover-shadow pointer" >
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <img class="avatar avatar-lg avatar-4x3" src="https://htmlstream.com/front-dashboard/assets/svg/illustrations-light/oc-megaphone.svg" alt="Image Description" style={{minHeight: "5rem"}} data-hs-theme-appearance="dark" />
                        </div>
                        <div class="flex-grow-1 ms-4">
                            <h3 class="text-inherit mb-1">Play with editor picked models</h3>
                            <span class="text-body">Create inferences from editor picked models</span>
                        </div>
                        <div class="ms-2 text-end">
                            <i class="bi-chevron-right text-body text-inherit"></i>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default CallToAction