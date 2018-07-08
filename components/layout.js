import React from 'react'
import { initGA, logPageView } from '../utils/ga'
import ReactPixel from 'react-facebook-pixel'

import Header from './header'
import Footer from './footer'

export default class Layout extends React.Component {

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      ReactPixel.init('592531964472978');
      window.GA_INITIALIZED = true
    }
    logPageView()
    ReactPixel.pageView();     
  }
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}