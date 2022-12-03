import React, {useState} from 'react'
import Input from 'components/Forms/Input'
import Dropzone from 'components/Forms/Dropzone'

const Images = ({setStep, setShowComplete}) => {

    const [name, setName] = useState('')
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(Array(10).fill(false))
    const [isUploaded, setIsUploaded] = useState(false)
    const inputFileRef = React.useRef();

    const uploadImage = () => {
        inputFileRef.current.click();
    }

    const deleteFile = (index) => {
        setFiles(files.filter((file, i) => i !== index))
    }

    const uploadFromInput = (e) => {
        setFiles([...files, e.target.files[0]])
    }

    const upload = () => {
        try{
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setErrors([true, false, false, false, false, false, false, false, false, false])
                setTimeout(() => {
                    console.log("Hey")
                    setShowComplete(true)
                }, 1000)
            }, 1400)
            // setLoading(false)
        } catch(err){
            setLoading(false)
            console.log(err)
        }
    }

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
            <input 
                type="file"
                ref = {inputFileRef}
                style={{display: 'none'}}
                onChange = {e => uploadFromInput(e)}
            />
            <div class='card mt-5 '>
                <div class='card-body'>
                    <h3 class='mb-4'>Images to upload</h3>
                    <div className='row '>
                        {[...files, ...new Array(10-files.length).fill(null)].map((i, index) => 
                            <div class='col-auto mb-3'>
                                {i ? 
                                    <div class='position-relative' style = {{overflow: 'none'}}>
                                        {!loading && <div class='position-absolute top-0  end-0 d-flex justify-content-center align-items-center mt-n1' onClick={() => deleteFile(index)}>
                                            <i class='bi-x-circle-fill text-dark cancel-btn'></i>
                                        </div>}
                                        {loading && <div class='position-absolute top-0 start-0 bottom-0 end-0 h-100 w-100 d-flex justify-content-center align-items-center opacity-50 bg-dark' style={{}}>
                                            <span class='spinner-border spinner-border-sm '></span>
                                        </div>}
                                        <img src = {URL.createObjectURL(i)} class={`border border-1 bg-dark img-dashed ${errors[index] && 'border-danger'}` }/>
                                        {errors[index] && <div class='d-block invalid-feedback'>Invalid photo</div>}
                                    </div> :
                                
                                    <div class='border pointer bg-dark border-1 img-dashed' onClick={() => uploadImage()}> 
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
                <div class='btn w-25 btn-lg btn-primary' onClick={() =>upload()}>
                    {loading && <span class='spinner-border spinner-border-sm me-2'></span>}
                    Upload Images
                    <i class='bi-arrow-right ms-2'></i>
                </div>
            </div>
        </div>
    )
}

export default Images