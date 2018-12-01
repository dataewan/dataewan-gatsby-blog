import React from "react";
import Link from "gatsby-link";

import {
  Paragraph,
  BlockQuote,
  Section,
  Subsection,
  Code,
  Figure,
  Linknode,
  Linktree,
  Constants,
  Layout
} from "../../../../components";

import PartsOfEquation from "./partsOfEquation";

import bayes_rule from "./bayes_rule.png";

const StatsIndexPage = () => (
  <Layout>
    <Section name="Bayesian inference">
      <Paragraph>
        Bayesian inference is a way of drawing statistical inferences from data.
        You make a model with parameters θ. You then use Bayes rule to get the
        probability distribution for those parameters after we observe data.
      </Paragraph>
      <Figure caption="Bayes rule for the probability of θ given data">
        <img src={bayes_rule} />
      </Figure>
      <Paragraph>
        There are four parts to this equation.
        <PartsOfEquation />
      </Paragraph>
      <Paragraph>
        Bayes rule gives you a way to get from <i>p(data | θ)</i> to <i>p(θ | data)</i>,
        flipping round the equation to give you the posterior.
        An alternative way of thinking about it is that it gives you a way to update your beliefs when new data comes in.
      </Paragraph>
    </Section>
  </Layout>
);

export default StatsIndexPage;
