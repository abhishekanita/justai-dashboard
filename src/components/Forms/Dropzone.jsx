import React, {useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import toast from 'react-hot-toast';

const Dropzone = ({onFileChange, label, description, labelClass, className, files, height, isMulti, type, limit}) => {
    
    const [fileName, setFileName] = React.useState();

    const onDrop = React.useCallback(acceptedFiles => {
        if(acceptedFiles.length > 0){
            if(acceptedFiles.some(item => item.size > 100000000)){
                toast.error(`Please upload a file which is less then 100MB. Files over that size are not allowed`)
                return;
            }
            if(isMulti) {
                setFileName(acceptedFiles.map(item => item.path).join(', '))
                onFileChange([...files, ...acceptedFiles].flat())
            }
            else {
                setFileName(acceptedFiles[0].path)
                onFileChange([acceptedFiles[0]])
            }
        } else{
            toast.error(`File submitted is not supported, please upload a file with following extensions: ${type}`)
        }
    }, [onFileChange])


    useEffect(() => {
        setFileName(files.map(item => item.path).join(', '))
    }, [files])

    
    const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({onDrop, accept: type, isMulti: isMulti})


    const style = React.useMemo(() => {
        return {
            ...{...baseStyle, minHeight: height || '20vh'},
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
        }
        // eslint-disable-next-line
    }, [ isDragActive, isDragReject, isDragAccept ]);

    return(
        <div className = {className}>
            <label className={`form-label`}>{label}</label>
            {description && <p className='text-white-50 mb-2 mt-n1'>{description}</p>}
            <div className = {`form-group ${labelClass}`}  {...getRootProps({style})}>
                <input  {...getInputProps()} className={`dropzonee`}/>
                {isDragActive ?
                    <p className = 'mb-0'>Drop the files here ...</p> :
                    fileName ? fileName : <p className = 'mb-0'>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
        </div>
    )
}

export default Dropzone;


  
const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderWidth: 1.4,
    borderRadius: 5,
    borderColor: 'rgb(0, 0, 0, 0.4)',
    borderStyle: 'dashed',
    backgroundColor: '#1e2022',
    color: 'rgba(255, 255, 255, .5)',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    textAlign: 'center',
};
  
const activeStyle = {
    borderColor: '#2196f3'
};
  
const acceptStyle = {
    borderColor: '#00e676'
};
  
const rejectStyle = {
    borderColor: '#ff1744'
};