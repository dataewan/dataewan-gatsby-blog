import React from "react";
import Link from "gatsby-link";

import Latex from "react-latex";

import {
  Paragraph,
  BlockQuote,
  Section,
  Subsection,
  Code,
  Figure,
  Linknode,
  Linktree,
  Layout,
  Equation
} from "../../../../../components";

const Likelihood = () => (
  <Layout>
    <Section name="Likelihood">
      <Paragraph>
        How likely are we to make the observations of <i>data</i> if the
        parameters of our model θ are correct.
      </Paragraph>
      <Paragraph>
        When you have your model, it is usually straightforward to calculate
        this likelihood. For a simple example, if we are modelling coin tosses
        as a fair coin being tossed, and we see two heads in a row,{" "}
        <Latex>$p(data | \theta)$</Latex> is given by:
      </Paragraph>
      <Paragraph>
        <Equation equation="$ = p(H | \theta) \times p(H | \theta)$" />
        <Equation equation="$ = \frac{1}{2} \times \frac{1}{2}$" />
        <Equation equation="$ = \frac{1}{4}$" />
      </Paragraph>
      <Subsection name="How to pick a good model?">
        <Paragraph
          note={
            <a href="https://uk.sagepub.com/en-gb/eur/a-student%E2%80%99s-guide-to-bayesian-statistics/book245409">
              Ben Lambert, §4.6
            </a>
          }
        >
          Picking a good model that you can parameterise is a key part of this
          process. Ben Lambert's book gives you this framework for picking a
          good model:
          <ol>
            <li>
              Write down the real life behaviour that the model should be
              capable of explaining.
            </li>
            <li>
              Write down the assumptions that it is believed are reasonable to
              achieve step 1.
            </li>
            <li>
              Look for probability models that are based on these assumptions.
              If necessary, combine multiple modles to capture all the
              assumptions.
            </li>
            <li>
              After fitting the model to the data, test its ability to explain
              the behaviour identified in step 1. If unsuccessful, go back to
              step 2 and assess which of your assumptions are invalidated. Then
              choose a new more general probability model that encompasses these
              new assumptions.
            </li>
          </ol>
        </Paragraph>
      </Subsection>
    </Section>
  </Layout>
);

export default Likelihood;
