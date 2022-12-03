import Header from 'components/Layouts/Header'
import React from 'react'
import CallToAction from './Component/CallToAction'
import ModelsTable from './Component/ModelsTable'
import NavSegment from './Component/NavSegment'

const Home = () => {
    return (
        <div>
            <Header />
            <div style={{marginTop: '62.5px'}}>
                <div class="container-fluid px-10 py-8">
                    <div class="page-header">
                        <div class="row align-items-center">
                            <div class="col-sm mb-2 mb-sm-0">
                                <h1 class="page-header-title">👋 Good morning, Mark.</h1>
                                <p class="page-header-text">Here's what's happening with your store today.</p>
                            </div>
                        </div>
                    </div>
                    <CallToAction />
                    <NavSegment />
                    <ModelsTable />
                </div>
            </div>
        </div>
    )
}

export default Home