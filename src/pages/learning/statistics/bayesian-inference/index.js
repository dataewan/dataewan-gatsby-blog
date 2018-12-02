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
  Layout,
  Equation
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
        Bayes rule gives you a way to get from <i>p(data | θ)</i> to{" "}
        <i>p(θ | data)</i>, flipping round the equation to give you the
        posterior. An alternative way of thinking about it is that it gives you
        a way to update your beliefs when new data comes in.
      </Paragraph>
      <Paragraph>
        We go to a lot of hard work to calculate the posterior distribution,
        which is what the data tells you about the parameters of your model.
        From the posterior you can make summaries of your analysis to state the
        likely values of the parameters of the model, and you can also make
        predictions from the posterior. It is pretty cool!
      </Paragraph>
      <Subsection name="Sampling to get the posterior">
        <Paragraph>
          The posterior is really hard to calculate exactly, because the
          evidence term is usually a horrible integral. We take advantage of
          something we found in{" "}
          <Link to="./learning/statistics/bayesian-inference/evidence/">
            the section about evidence
          </Link>{" "}
          to rewrite Bayes rule as a similarity relation.
        </Paragraph>
        <Paragraph>
          <Equation equation="$p(\theta | data) = \frac{p(data | \theta) p(\theta)}{p(data)}$" />
          <Equation equation="$p(\theta | data) \propto p(data | \theta) p(\theta)$" />
        </Paragraph>
        <Paragraph>
          This trick lets us use a family of techniques called <Link to="./learning/statistics/bayesian-inference/mcmc/">Markov Chain Monte Carlo sampling</Link>.
          These techniques let us get a very good approximation of the posterior distribution, and allows us to solve real world problems.
        </Paragraph>
      </Subsection>
    </Section>
  </Layout>
);

export default StatsIndexPage;
