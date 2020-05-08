/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header
      sx={{
        variant: 'styles.header'
      }}>
      <Link href="/">
        <a
          sx={{
            height: '30px'
          }}>
          <img
            sx={{
              height: '30px'
            }}
            alt="UI Logo"
            src="https://www.onlinewebdesign.ro/_next/static/images/online-webdesign-logo-9ddcfc4f40adb03b73cf4a69f400d8a3.svg"
          />
          <span
            sx={{
              position: 'absolute',
              width: 1,
              height: 1,
              overflow: 'hidden',
              top: -9999
            }}>
            Home
          </span>
        </a>
      </Link>
      <div sx={{ mx: 'auto' }} />
      <Link href="/blog">
        <a
          sx={{
            variant: 'styles.navlink',
            ml: 3,
            py: 2
          }}>
          Blog
        </a>
      </Link>
      <Link href="/about">
        <a
          sx={{
            variant: 'styles.navlink',
            ml: 3,
            py: 2
          }}>
          About
        </a>
      </Link>
    </header>
  )
}

Header.propTypes = {}

export default Header
