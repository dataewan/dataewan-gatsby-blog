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
  Layout
} from "../../../../../components";

const Prior = () => (
  <Layout>
    <Section name="Prior">
      <Paragraph>
        The prior describes before we look at the data, what are our beliefs of the parameters θ?
        This part can feel a bit strange, because it can feel like you're
        injecting some subjectivity into your analysis. You can get different
        results if you make different choices for the priors. How do you choose
        good values for your priors?
      </Paragraph>
      <Subsection name="Informative priors">
        <Paragraph>
          You might think to take a look at the distribution of any historic
          data, and use that distribution to give you a prior distribution for
          your parameters. Say for example you calculate the first statistical
          moment (the mean) and the second statistical moment (the variance).
          Why not use that for your prior?
          This is where the terminology <i>moment matching priors</i> comes
          from.
        </Paragraph>
        <Paragraph>
          Informative priors seem to be recommended against. There is a risk
          that a tight prior distribution will dominate the posterior inferences
          that you make.
        </Paragraph>
        <Paragraph>
          Some people talk about eliciting priors, where you talk to a lot of
          independent experts, or doing a literature review to get a range of
          values you can use for the prior. Here the priors are informative
          because they provide numeric information to the results, but these
          seem to be more acceptable because there is less room for bias. If you
          are using informative priors, then you have to be very explicit about
          having done it.
        </Paragraph>
      </Subsection>
      <Subsection name="Weakly informative priors">
        <Paragraph
          note={
            <div>
              <a href="https://andrewgelman.com/2017/04/28/prior-choice-recommendations-wiki/">
                Gelman blog
              </a>
              <br />
              <a href="https://github.com/stan-dev/stan/wiki/Prior-Choice-Recommendations">
                stan wiki
              </a>
            </div>
          }
        >
          The STAN wiki and Andrew Gelman's blog talk about a concept called{" "}
          <i>weakly informative priors</i>. The idea is that you flatten the
          informative prior distribution and make it less constraining. You
          still get some regularisation because you tell the model where the
          less likely values are, but you lower the risk of ruling out parts of
          the parameter space which should be explored.
        </Paragraph>
      </Subsection>
      <Subsection name="Uninformative priors">
        <Paragraph>
          There are techniques that you can use to create prior distributions that contain no information in them.
          For example the <a href="https://en.wikipedia.org/wiki/Jeffreys_prior">Jefferys prior</a>.
          These seem to be tricky to use in real world analysis,
          and don't give any real benefit other than making you feel better.
        </Paragraph>
      </Subsection>
      <Subsection name="Don't use constrained uniform priors unless it is a true constraint">
        <Paragraph>
          One bit of clear advice I've picked up is that you should be very careful when picking a probability distribution that has zero at any point.
          What you are saying with a prior that has zero values is that those values are impossible, and will never come through in the posterior distribution.
        </Paragraph>
        <Paragraph>
          The example where you see this most often is when using the constrained uniform prior.
          Say you want to describe the average lifespan of a human,
          it is very tempting to use a uniform prior constrained between 0-100 for example.
          This makes you feel better because you think that it is less informative than for example a normal distribution,
          but what it does is guarantee that you'll never explore the space above 100.
          This is bad and shouldn't be done.
        </Paragraph>
      </Subsection>
    </Section>
  </Layout>
);

export default Prior;
