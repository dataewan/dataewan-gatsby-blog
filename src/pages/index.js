import React from "react";
import { Link } from "gatsby";

import {
  Paragraph,
  BlockQuote,
  Section,
  Subsection,
  Code,
  Figure,
  Linknode,
  Linktree,
  Layout
} from "../components";

const IndexPage = () => (
  <Layout>
    <Section name="Things I wish I could remember">
      <Paragraph>
        Written record of things have been in my head, but that have fallen out.
      </Paragraph>
      <Subsection name="Techniques">
        <Paragraph>Ways to do things.</Paragraph>
        <Linktree>
          <Linknode
            to="techniques/explaining-things"
            desc="Explaining things"
          />
          <Linknode to="techniques/programming" desc="Programming" />
        </Linktree>
      </Subsection>
      <Subsection name="Learning">
        <Paragraph>Learning things from books and other sources.</Paragraph>
      </Subsection>
      <Subsection name="Investigating">
        <Paragraph>Learning by applying techniques.</Paragraph>
        <Linktree>
          <Linknode
            to="investigations/what-whisky"
            desc="Using data to find what whisky I should purchase"
          />
        </Linktree>
      </Subsection>
      <Subsection name="Projects">
        <Linknode
          to="projects/papa-baiden"
          desc="Project investigating homelessness data in England"
        />
      </Subsection>
      <Subsection name="Talks">
        <Paragraph>
          <a href="https://dataewan.github.io/data-science-lessons-software-engineers/">
            Pydata Edinburgh: lessons data science can learn from software
            engineers
          </a>
        </Paragraph>
      </Subsection>
    </Section>
  </Layout>
);

export default IndexPage;
