import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

import Constants from "../components/constants"

import { rhythm } from "../utils/typography"

const header = () => (
  <header
    css={{
      width: Constants.leftwidth,
      borderBottom: `1px black solid`,
      marginBottom: rhythm(2)
    }}
  >
    <Link to='/'
      css={{
        textDecoration: `none`,
        color: `black`
      }}
    >
      <h1
      css={{
        marginBottom: rhythm(0.5)
      }}
      >dataewan</h1>
    </Link>
  </header>
)



const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {header()}
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
