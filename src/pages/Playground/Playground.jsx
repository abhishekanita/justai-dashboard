import React from 'react'
import { useEffect } from 'react'
import Config from './Component/Config'
import Toolbar from './Component/Toolbar'
import Images from './Component/Images'
import Header from '../../components/Layouts/Header'

const Playground = () => {

    useEffect(() => {
        let classes = ['has-navbar-vertical-aside', 'navbar-vertical-aside-show-xl']
        classes.forEach((className) => {
            document.body.classList.add(className)
        })
        return () => {
            classes.forEach((className) => {
                document.body.classList.remove(className)
            })
        }
    }, [])

  return (
    <div>
        <Header />
        <Toolbar />
        <main class='main splitted-content-main'>
            <Images />
        </main>
        <Config />
    </div>
  )
}

export default Playground