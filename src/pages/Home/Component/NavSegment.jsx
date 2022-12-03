import React, {useState} from 'react'
import HorizontalNav from 'components/Nav/HorizontalNav'

const NavSegment = () => {

    const [selected, setSelected] = useState('CUSTOM')


  return (
    <div className='mt-5'>
        <HorizontalNav 
            selected={selected}
            setSelected={setSelected}
            navItems = {[
                {value: 'CUSTOM', label: 'Custom'},
                {value: 'GLOBAL', label: 'Global'},
            ]}
        />
    </div>
  )
}

export default NavSegment