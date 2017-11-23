import React from 'react'
import Link from 'gatsby-link'

import {
  Paragraph, BlockQuote, Section, Subsection, Code, Figure,
  Linknode, Linktree
} from '../components'

const IndexPage = () => (
  <Section name='Things I wish I could remember'>
    <Paragraph>
      Written record of things that I know,
      but that fall out of my head.
    </Paragraph>
    <Subsection name='Ways that I do things'>
      <Linktree>
        <Linknode to='techniques/explaining-things' desc='Explaining things' />
      </Linktree>
    </Subsection>
    <Subsection name="Learning">
    </Subsection>
    <Subsection name="Investigating">
    </Subsection>
  </Section>
)

export default IndexPage
