
import React from 'react'
import Link from 'gatsby-link'

import {
  Paragraph, BlockQuote, Section, Subsection, Code, Figure,
  Linknode, Linktree
} from '../../../components'

const StatsIndexPage = () => (
  <Linktree>
    <Linknode to="./statistics/bayesian-inference" desc="How does Bayesian inference work"/>
  </Linktree>
)

export default StatsIndexPage
