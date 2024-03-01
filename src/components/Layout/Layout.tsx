import React from 'react'
import Router from '../../routes/Router'
import {Navbar,Footer }from '../../components'


type Props = {}

const Layout = (props: Props) => {
  return (
    <div className="layout">
        <Navbar/>
        <Router/>
        <Footer/>
    </div>
  )
}

export default Layout