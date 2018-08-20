import React from 'react'
import { initGA, logPageView } from '../utils/ga'
import ReactPixel from 'react-facebook-pixel'
import Head from 'next/head'

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
        <Head>
            <title>{this.props.title ? this.props.title + ` - ` : ''}ColdFront 2018 - a holistic conference about the future outlook for front-end and interfaces in Copenhagen, Denmark on November 13-14-15th 2018</title>
        </Head>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}