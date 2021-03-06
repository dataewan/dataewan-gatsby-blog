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
} from "../../components";

const LearningIndexPage = () => (
  <Layout>
    <Linktree>
      <Linknode to="learning/statistics" desc="Brushing up on my statistics" />
    </Linktree>
  </Layout>
);

export default LearningIndexPage;
