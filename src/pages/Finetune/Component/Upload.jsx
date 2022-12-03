import React from 'react'
import {SimpleModal} from 'components/Modals/Modal'

const Upload = ({show, setShow}) => {

  return (
    <SimpleModal
        show = {show}
        setShow = {setShow}
    >

        <div className='text-center '>
            <h1 class='mb-3'>Model successfully submitted</h1>
            <p class='mb-5 lead'>Your model has been successfully entered into queue. It should appear in your models once finetuned</p>
            <img class="img-fluid mb-5" src="https://htmlstream.com/front-dashboard/assets/svg/illustrations-light/oc-collaboration.svg" alt="Image Description" style={{maxWidth: '300px'}}/>
        </div>
    </SimpleModal>
  )
}

export default Upload