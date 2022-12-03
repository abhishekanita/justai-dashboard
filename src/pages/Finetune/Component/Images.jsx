import React, {useState} from 'react'
import Input from 'components/Forms/Input'
import Dropzone from 'components/Forms/Dropzone'

const Images = ({setStep}) => {

    const [name, setName] = useState('')
    const [files, setFiles] = useState([])

    return (
        <div>
             <Input 
                label = "Model Name!"
                placeholder = "Enter model name"
                value = {name}
                setValye = {setName}
            />
            <Dropzone
                onFileChange={(file) => setFiles(file)}
                className = "mt-5"
                label = "Image to Image"
                description = "Upload an image to use as an inspiration"
                files = {files}
                isMulti = {true}
                setValue = {setFiles}
                height = "100px"
            />
            <div class='card mt-5 '>
                <div class='card-body'>
                    <h3 class='mb-4'>Images to upload</h3>
                    <div className='row '>
                        {[...files, ...new Array(10-files.length).fill(null)].map(i => <div class='col-auto mb-3'>
                            {i ? <div class='position-relative'>
                                    <div class='position-absolute top-0  end-0 d-flex justify-content-center align-items-center mt-n1 '>
                                        <i class='bi-x-circle-fill text-dark cancel-btn'></i>
                                    </div>
                                    <img src = {URL.createObjectURL(i)} class='border border-1 bg-dark img-dashed'/>
                                </div> :
                                <div class='border bg-dark border-1 img-dashed' > 
                                </div>
                            }
                        </div>)}
                    </div>
                </div>
            </div>

            <div className='text-end mt-5'>
                <div class='btn w-25 btn-lg btn-soft-primary me-3' onClick={() =>setStep('guidelines')}>
                    <i class='bi-arrow-left me-2'></i>
                    Back
                </div>
                <div class='btn w-25 btn-lg btn-primary' onClick={() =>setStep('upload')}>
                    Upload Images
                    <i class='bi-arrow-right ms-2'></i>
                </div>
            </div>
        </div>
    )
}

export default Images