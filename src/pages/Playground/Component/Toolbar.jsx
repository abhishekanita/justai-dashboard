import React, {useState} from 'react'
import ToolbarLayout from '../Layout/Toolbar'
import Input from 'components/Forms/Input'
import Slider from 'components/Forms/Slider'
import ButtonGroup from 'components/Forms/ButtonGroup'
import TextArea from 'components/Forms/Textarea'
import Select from 'components/Forms/Select'
import Dropzone from 'components/Forms/Dropzone'
import Switch from 'components/Forms/Switch'


const Toolbar = () => {

    const [value, setValue] = useState('')

  return (
    <ToolbarLayout
        Footer = {
            <div class='btn btn-soft-primary w-100'>
                <i class="bi-plus-circle me-2"></i>
                Generate
            </div>
        }
    >
        <Input 
            label = "Prompt"
            value = {value}
            setValue = {setValue}
            description = "What do you want to see? You can use a single word or a full sentense"
            className='mb-3 mt-3'
        />
        <Slider 
            label = "Prompt"
            value = {value}
            setValue = {setValue}
            description = "What do you want to see? You can use a single word or a full sentense"
            className='mb-3 mt-3'
        />
        <TextArea 
            label = "Prompt"
            value = {value}
            setValue = {setValue}
            description = "What do you want to see? You can use a single word or a full sentense"
            className='mb-3 mt-3'
        />
        <ButtonGroup 
            label = "Prompt"
            value = {value}
            setValue = {setValue}
            description = "What do you want to see? You can use a single word or a full sentense"
            className='mb-3 mt-3'
            options = {[{label: 'Option 1', value: 'option1'}, {label: 'Option 2', value: 'option2'}]}
        />
        <Select 
            label = "Prompt"
            value = {value}
            setValue = {setValue}
            description = "What do you want to see? You can use a single word or a full sentense"
            className='mb-3 mt-3'
            options = {[{label: 'Option 1', value: 'option1'}, {label: 'Option 2', value: 'option2'}]}
        />
        <Switch 
            label = "Prompt"
            value = {value}
            setValue = {setValue}
            description = "What do you want to see? You can use a single word or a full sentense"
            className='mb-3 mt-3'
            options = {[{label: 'Option 1', value: 'option1'}, {label: 'Option 2', value: 'option2'}]}
        />
        <Dropzone 
            onFileChange={(file) => console.log(file)}
            className = "mt-3"
            label = "Image to Image"
            description = "Upload an image to use as an inspiration"
            files = {[]}
            setValue = {setValue}
            height = "100px"
        />
    </ToolbarLayout>
  )
}

export default Toolbar