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
  Constants,
  Layout,
  Equation
} from "../../../../../components";

const MCMCPage = () => (
  <Layout>
    <Section name="Markov Chain Monte Carlo (MCMC) sampling">
      <Paragraph>
        Markov Chain Monte Carlo (MCMC) uses this description of Bayes rule
      </Paragraph>
      <Paragraph>
        <Equation equation="$p(\theta | data) \propto p(data | \theta) p(\theta)$" />
      </Paragraph>
      <Paragraph>
        Where we say that the shape of the posterior distribution only depends
        on the likelihood (<i>p(data | θ)</i>), and the prior (<i>p(θ)</i>).
        We're able to generate samples from a distribution that has exactly the
        same shape as the posterior, but isn't normalised.
      </Paragraph>
      <Paragraph>
        MCMC is a set of techniques that draw samples from the posterior
        probability distribution, using this property.
      </Paragraph>
      <Paragraph
        note={
          <div>
            <a href="https://twiecki.github.io/blog/2015/11/10/mcmc-sampling/">
              MCMC sampling for dummies
            </a>
            <br />
            <a href="https://github.com/dataewan/handcut-mcmc">
              Handcut MCMC in python
            </a>
          </div>
        }
      >
        I'll demonstrate one type of MCMC called Metropolis sampling. There's a
        really good blog post called MCMC sampling for dummies, which
        demonstrates this technique using Python. I wrote out this Python code,
        and this gave me a good intuition of Metropolis sampling. It describes
        fitting a simple model to data: with 20 data points, what is the mean of
        the normal distribution that fits this data?
      </Paragraph>
      <Subsection name="1. Start with a parameter value">
        <Paragraph>
          We start with a value for the model parameter. This value that we pick
          is arbitrary. We'll call this value <Latex>$\mu_c$</Latex>.
        </Paragraph>
      </Subsection>
      <Subsection name="2. Propose a new value">
        <Paragraph>
          The next thing that we do is propose a new value for the model
          parameters. We do this by taking a sample from a normal distribution
          with mean value <Latex>$\mu_c$</Latex>, and with a standard deviation
          of a parameter called <i>step size</i>.
        </Paragraph>
        <Paragraph>
          <Equation equation="$\mu_p \sim \mathcal{N}(\mu_c, step\ size)$" />
        </Paragraph>
        <Paragraph>
          <i>step size</i> is a parameter we can set. If we set this bigger then
          we'll take larger jumps, if we set it smaller then we make smaller
          jumps from one point to the next.
        </Paragraph>
      </Subsection>
      <Subsection name="3. Calculate the likelihood and prior values for the current and proposed parameter">
        <Paragraph>
          We want to calculate the nominator part of Bayes rule:
        </Paragraph>
        <Paragraph>
          <Equation equation="$p(data | \theta) p(\theta)$" />
        </Paragraph>
        <Paragraph>
          This is the likelihood multiplied by the prior. The likelihood is how
          likely it is for the data to be generated from a normal distribution
          with that mean. We get the probability for each datapoint and multiply them together.
        </Paragraph>
        <Code
          language="python"
          code={`
# We're assuming that the standard deviation is fixed at 1, 
# and only the mean changes.
likelihood_current = stats.norm(mu_current, 1).pdf(data).prod()
likelihood_proposal = stats.norm(mu_proposal, 1).pdf(data).prod()
`}
        />
        <Paragraph>
          The prior is how credible we thought that value for
          mean was before we looked at the data. We described our prior as a normal distribution that we parameterised.
        </Paragraph>
        <Code
          language="python"
          code={`
prior_current = stats.norm(mu_prior_mu, mu_prior_sd).pdf(mu_current)
prior_proposal = stats.norm(mu_prior_mu, mu_prior_sd).pdf(mu_proposal)
`}
        />
      </Subsection>
      <Subsection name="4. Should we accept the new point?">
        <Paragraph>
          We calculate the ratio between these two numerator terms for the proposed and current points. 
          Call this <i>r</i>.
        </Paragraph>
        <Paragraph>
          <Equation equation="$r = \frac{p(data | \theta_p)p(theta_p)}{p(data | \theta_c)p(theta_c)}$" />
        </Paragraph>
        <Paragraph>
          If <i>r</i> is greater than 1, that means that the new parameter is a better description than the previous one, and we always accept this point.
        </Paragraph>
        <Paragraph>
          But we don't want to only accept better points.
          If we do that we get stuck at a maximum point of the distribution and don't explore the whole space.
          So if <i>r</i> is less than 1 we accept that point with probability equal to <i>r</i>.
        </Paragraph>
        <Paragraph>
          We now loop round to step 1 again,
          but with our new value for μ, or our old one if we rejected the new point.
        </Paragraph>
      </Subsection>
    </Section>
  </Layout>
);

export default MCMCPage;
