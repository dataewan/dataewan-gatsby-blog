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
  Linktree
} from "../../components";

const LearningIndexPage = () => (
  <Linktree>
    <Linknode to="learning/statistics" desc="Brushing up on my statistics" />
  </Linktree>
);

export default LearningIndexPage;
