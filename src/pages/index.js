import React from 'react'
import Link from 'gatsby-link'

import {
  Paragraph, BlockQuote, Section, Subsection, Code, Figure,
  Linknode, Linktree
} from '../components'

const IndexPage = () => (
  <Section name='Things I wish I could remember'>
    <Paragraph>
      Written record of things have been in my head,
      but that have fallen out.
    </Paragraph>
    <Subsection name='Techniques'>
      <Paragraph>
        Ways to do things.
      </Paragraph>
      <Linktree>
        <Linknode to='techniques/explaining-things' desc='Explaining things' />
        <Linknode to='techniques/programming' desc='Programming' />
      </Linktree>
    </Subsection>
    <Subsection name="Learning">
      <Paragraph>
        Learning things from books and other sources.
      </Paragraph>
    </Subsection>
    <Subsection name="Investigating">
      <Paragraph>
        Learning by applying techniques.
      </Paragraph>
    </Subsection>
  </Section>
)

export default IndexPage
