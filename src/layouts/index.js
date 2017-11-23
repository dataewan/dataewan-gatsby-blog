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
      title="Things I wish I could remember"
      meta={[
        { name: 'description', content: 'dataewan things to remember' },
        { name: 'keywords', content: 'notebook, explaination' },
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
