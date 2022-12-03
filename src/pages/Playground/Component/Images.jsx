import React, {useEffect, useState} from 'react'
import ImagesLayout from '../Layout/Images'
import FsLightbox from 'fslightbox-react';


let images = [
    'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1524169220946-12efd782aab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
]


const Images = () => {


  return (
    <ImagesLayout>
        <div class="row">
            {images.map((item, index) => <div class="col-sm-6 mb-3 mb-sm-0">
                <Image image = {item}/>
            </div>)}
        </div>
    </ImagesLayout>
  )
}

export default Images


const Image = ({image}) => {
    
    const [toggler, setToggler] = useState(false)

    return (
        <div class="">
            <div onClick={() => setToggler(prev => !prev)}>
                <img class="img-fluid" src={image} alt="Image Description" />
            </div>
            <FsLightbox
                toggler={ toggler }
                sources={[image]}
            />
        </div>
    )
}