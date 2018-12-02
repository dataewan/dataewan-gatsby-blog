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
} from "../../../components";

const StatsIndexPage = () => (
  <Layout>
    <Linktree>
      <Linknode
        to="/learning/statistics/bayesian-inference"
        desc="How does Bayesian inference work"
      />
    </Linktree>
  </Layout>
);

export default StatsIndexPage;
