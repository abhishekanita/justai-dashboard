import React, {useState} from 'react'
import Header from 'components/Layouts/Header'
import Titlebar from './Component/Titlebar'
import Guidelines from './Component/Guidelines'
import Images from './Component/Images'
import Upload from './Component/Upload'


const Finetune = () => {

    const [step, setStep] = useState('guidelines')    
    const [showComplete, setShowComplete] = useState(false)


  return (
    <div>
        <Header />
        <div style={{marginTop: '62.5px'}}>
            <div class="container-fluid px-10 py-8">
                <div class='row justify-content-center'>
                    <div class='col-12 col-lg-10'>
                        {step !== 'guidelines' && <Titlebar 
                            step = {step}
                        />}
                        {step === 'guidelines' && <Guidelines
                            setStep={setStep}
                        />}
                        {step === 'images' && <Images
                            setStep={setStep}
                            setShowComplete = {setShowComplete}
                        />}
                        <Upload
                            show = {showComplete}
                            setShow = {setShowComplete}
                        />
                       
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Finetune
