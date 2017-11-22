import React from 'react'
import Link from 'gatsby-link'

import Paragraph from "../components/paragraph"
import BlockQuote from "../components/blockquote"
import Section from "../components/section"
import Subsection from "../components/subsection"
import Code from "../components/code"

const IndexPage = () => (
  <Section name="Hi People">
    <Paragraph>
      Ball tip ribeye meatloaf boudin spare ribs kielbasa chicken turkey bacon. Cupim buffalo kevin boudin, shoulder ground round beef ribs brisket tail frankfurter hamburger bresaola chicken. Rump beef ribs ham pork loin, ribeye pancetta strip steak swine drumstick ham hock pastrami. Prosciutto shank rump pork loin.
      <a href="#herewego">section</a>
    </Paragraph>
    <Paragraph note="Can I do this with multilines? What
      happens if I make it even longer
      And even longer still even what happens then
      ">
      testing does this work?
      Ball tip ribeye meatloaf boudin spare ribs kielbasa chicken turkey bacon. Cupim buffalo kevin boudin, shoulder ground round beef ribs brisket tail frankfurter hamburger bresaola chicken. Rump beef ribs ham pork loin, ribeye pancetta strip steak swine drumstick ham hock pastrami. Prosciutto shank rump pork loin.
    </Paragraph>
    <BlockQuote person="Ewan Nicolson" source="http://localhost">
      Here is a nice blockquote that I wrote. I probably want it to be many lines long so I can see how it fits in so I'm just going to ramble for a bit and see what happens.
    </BlockQuote>
    <Subsection name="Here we go">
      <Paragraph>
        I can use subsections as well, I just want them to be smaller versions of the big one.
      </Paragraph>
    </Subsection>
    <Code language="python">
      print(1+2)
    </Code>
  </Section>
)

export default IndexPage
