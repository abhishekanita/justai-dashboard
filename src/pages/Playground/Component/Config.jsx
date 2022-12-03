import React, {useState} from 'react'
import ConfigLayout from '../Layout/Config'
import Input from 'components/Forms/Input'
import Slider from 'components/Forms/Slider'
import ButtonGroup from 'components/Forms/ButtonGroup'
import TextArea from 'components/Forms/Textarea'
import Select from 'components/Forms/Select'
import Dropzone from 'components/Forms/Dropzone'
import Switch from 'components/Forms/Switch'

const Config = () => {

  const [value, setValue] = useState('')

  return (
    <ConfigLayout>
        <Input 
            label = "Prompt"
            value = {value}
            setValue = {setValue}
            description = "What do you want to see? You can use a single word or a full sentense"
            className='mb-3 mt-3 border-bottom pb-5 mb-3'
        />
        <Slider 
            label = "Prompt"
            value = {value}
            setValue = {setValue}
            description = "What do you want to see? You can use a single word or a full sentense"
            className='mb-3 mt-3'
        />
    </ConfigLayout>
  )
}

export default Config