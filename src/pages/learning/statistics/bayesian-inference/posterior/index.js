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

const Posterior = () => (
  <Layout>
    <Section name="Posterior">
      <Paragraph>
        The posterior is the part that we're trying to get a value for.
        Since we've observed this data and we have our model,
        what are the parameters of the model that the data implies?
      </Paragraph>
    </Section>
  </Layout>
);

export default Posterior;
