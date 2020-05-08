import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <footer>Footer</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
