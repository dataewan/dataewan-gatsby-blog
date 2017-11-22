import React from 'react'
import Link from 'gatsby-link'

import Paragraph from "../components/paragraph"
import BlockQuote from "../components/blockquote"
import Section from "../components/section"
import Subsection from "../components/subsection"
import Code from "../components/code"
import Figure from "../components/figure"

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
    <Figure caption="Some fun dinos" fullwidth={false}>
      <img src="https://lh3.googleusercontent.com/cwK3uuCsmzM3SXyyQ8Id7VhYaz7rvi5zkX8rPHrJzxGgEamFkeBxpgQUIlA6JduZDWgT5JxO3i8dsUNbODcEsnkIuNp_47cjw0p6CI7BuUTSom9S8I0LGNnFlaTGkol8Q5M1T14gZuVzcIKpP73Jkeix2ASiiVngAjvjiTghdJQ5hGJfoYn4RX6wVX0FYCswf08K_k5pDTfP5l0PZ1Ra68zM1QIKzpADKA-LUI3ULfVPwdThrAM4Map3fTjHBHRNdqIIS5Bws-KzRX1xhnIVri_Ewc9vsFEHEfJjf59xfmEKYKg64ugm4YefKCTN6nYEsfGwKdZZzMNaDH4JBptINzI8SLEkIiy2vqyiJ0X-UQ3NPUjrqLSokQSdzsgkDfVcOkuqvDwHz6rWKYzwF80ZDBo23nwK513OvKK4pUw_HrKw-jJwfug5Tr-9n13Z_AdYDUGUC75uxe9VMRRVTyd-mmdMo5c5hpX7trMOI622cJHjc8L3A-Yfr1zNZDLYw4eEyKRYFxmo0Vk7JZfjr3i4Pscd8iqzasAHhB9sBiv2ymZDTrCl98fIc6ZDlRrwh4cRcw7WfyMKmeB5udkV_CHCWZZoAzK2HFGFWnM0x593cAkzLU9UUFmCdB_LHl8gbzKwDoEe-DYz2_xKB0zR2UJgTfEMQqYV9Om4n3Y=w2068-h1550-no" />
    </Figure>
  </Section>
)

export default IndexPage
