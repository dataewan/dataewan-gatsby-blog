import React, { Component} from 'react';

import {
  Section, Subsection, Subsubsection, Paragraph, Figure, Code, BlockQuote, Linktree, Linknode, Layout
}from "../../../../components"


class ComponentsPage extends Component {

  render() {
    return (
      <Layout>
      <article>

        <Section name='Section component'>
          <Paragraph>
            The section component is the top level of the hierarchy in the document.
            I've taken this from LaTeX document formatting,
            as I find a hierarchy quite easy to think in.
            Use a <span className='mono'>Section</span> like this:
          </Paragraph>
          <Code language="javascript" code={
            `
<Section name='name of the section'>
  --CONTENT GOES HERE--
</Section>
            `} />

          <Paragraph>
            All the sections have automatic anchors added to them so that you can link to them.
            The name of the anchor is the name of the section,
            spaces and other punctuation removed,
            and converted to lowercase.
            You can refer to <a href='#codecomponent'>other sections</a> using this method.
          </Paragraph>
        </Section>

        <Section name='Subsection component'>
          <Paragraph>
            Exactly the same as a <span className='mono'>Section</span> component, 
            just with a different level of heading.
          </Paragraph>
          <Code language="javascript" code={
            `
<Subsection name='name of the subsection'>
  --CONTENT GOES HERE--
</Subsection>
            `} />
          <Subsection name="Example subsection">
            <Paragraph>
              Here is how a subsection looks.
            </Paragraph>
          </Subsection>
        </Section>

        <Section name='Subsubsection component'>
          <Paragraph>
            Exactly the same as a <span className='mono'>Section</span> component, 
            just with a different level of heading.
          </Paragraph>
          <Code language="javascript" code={
            `
<Subsubsection name='name of the subsubection'>
  --CONTENT GOES HERE--
</Subsubsection>
            `} />
          <Subsubsection name='Example subsubsection'>
            <Paragraph>
              Here is how a <span className='mono'>subsubsection</span> looks.
              You shouldn't need anything below a subsubsection, that would suggest you're getting too granular.
            </Paragraph>
          </Subsubsection>
        </Section>

        <Section name='Paragraph component'>
          <Paragraph>
            A paragraph is the lowest level of the document structure.
            Here is how you use one.
          </Paragraph>
          <Code language="javascript" code={
            `
<Paragraph note='a note that I want to put next to my paragraph'>
  Here is the place where I put my text.
</Paragraph>
            `} />
          <Paragraph note="Having the sidenotes next to the text makes life easier for the reader, you have to do less eye movement.">
            A useful feature is that you can put notes beside your paragraphs if you like.
            Notes are useful for information that isn't necessary, but might be interesting.
            Also it can be useful to have references in the notes.
          </Paragraph>
        </Section>

        <Section name='Figure component'>
          <Paragraph>
            Figures are used mainly to hold images,
            or other plots.
            They take two parameters, fullwidth and a caption.
            If <span className='mono'>fullwidth</span> is set to anything other than
            <span className='mono'>{true}</span> (the curly brackets are important),
            then the figure will be flush with the text.
            If it is set to true then the figure will take up the whole width of the page.
            Put your <span className='mono'>img</span> tags in the figure to have the content show up.
          </Paragraph>
          <Code language="javascript" code={
            `
<Figure 
  fullwidth={true}
  caption="Caption for the figure">
  --Content of the figure, for example an image--
</Figure>
            `} />
          <Figure caption='Some dinosaurs having fun' fullwidth={false}>
            <img src="https://lh3.googleusercontent.com/cwK3uuCsmzM3SXyyQ8Id7VhYaz7rvi5zkX8rPHrJzxGgEamFkeBxpgQUIlA6JduZDWgT5JxO3i8dsUNbODcEsnkIuNp_47cjw0p6CI7BuUTSom9S8I0LGNnFlaTGkol8Q5M1T14gZuVzcIKpP73Jkeix2ASiiVngAjvjiTghdJQ5hGJfoYn4RX6wVX0FYCswf08K_k5pDTfP5l0PZ1Ra68zM1QIKzpADKA-LUI3ULfVPwdThrAM4Map3fTjHBHRNdqIIS5Bws-KzRX1xhnIVri_Ewc9vsFEHEfJjf59xfmEKYKg64ugm4YefKCTN6nYEsfGwKdZZzMNaDH4JBptINzI8SLEkIiy2vqyiJ0X-UQ3NPUjrqLSokQSdzsgkDfVcOkuqvDwHz6rWKYzwF80ZDBo23nwK513OvKK4pUw_HrKw-jJwfug5Tr-9n13Z_AdYDUGUC75uxe9VMRRVTyd-mmdMo5c5hpX7trMOI622cJHjc8L3A-Yfr1zNZDLYw4eEyKRYFxmo0Vk7JZfjr3i4Pscd8iqzasAHhB9sBiv2ymZDTrCl98fIc6ZDlRrwh4cRcw7WfyMKmeB5udkV_CHCWZZoAzK2HFGFWnM0x593cAkzLU9UUFmCdB_LHl8gbzKwDoEe-DYz2_xKB0zR2UJgTfEMQqYV9Om4n3Y=w2068-h1550-no" />
          </Figure>
          <Paragraph>
            The figures are numbered. 
            Currently there is no way to link to a particular figure.
          </Paragraph>
        </Section>

        <Section name='Code component'>
          <Paragraph>
            For inserting code snippets into the document.
            The highlighting comes from <a href="https://github.com/conorhastings/react-syntax-highlighter">
              React syntax highlighter 
            </a> and uses any of the languages coming from <a href="http://prismjs.com/">Prism</a>.
            Note that the code is passed in as a parameter and uses backticks within a pair of curly braces.
          </Paragraph>
          <Code language="javascript" code={
            `
<Code 
  language='python'
  code={\`
  def showtime(x):
    print(x)
  \`}
  />
            `} />
          <Paragraph>
            That code would make something like this:
          </Paragraph>
          <Code
            language='python'
            code={`
def showtime(x):
    print(x)
            `} />
        </Section>
        <Section name='BlockQuote component'>
          <Code language="javascript" code={
            `
<BlockQuote 
  source='https://en.wikiquote.org/wiki/Cat%27s_Cradle'
  person="Kurt Vonegut, Cat's Cradle"
  >
  Dr. Hoenikker used to say that any scientist who couldn't
  explain to an eight-year-old what he was doing was a charlatan.
</BlockQuote>
            `} />
          <Paragraph>
            Produces:
          </Paragraph>
          <BlockQuote 
            source='https://en.wikiquote.org/wiki/Cat%27s_Cradle'
            person="Kurt Vonegut, Cat's Cradle"
            >
            Dr. Hoenikker used to say that any scientist who couldn't explain to an eight-year-old what he was doing was a charlatan.
          </BlockQuote>
        </Section>
      </article>
    </Layout>
    );
  }
}

export default ComponentsPage;
