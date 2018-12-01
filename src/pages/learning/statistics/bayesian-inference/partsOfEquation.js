import React from "react";
import Link from "gatsby-link";

import Constants from "../../../../components/constants";

const PartsOfEquation = () => (
  <div>
    <div style={{ backgroundColor: Constants.lightyellow }}>
      <Link to="/learning/statistics/bayesian-inference/likelihood">
        <h3>Likelihood — p(data | θ) </h3>
        <p>
          Given our model, how likely is it that we would observe this data?
        </p>
      </Link>
    </div>
    <div style={{ backgroundColor: Constants.lightblue }}>
      <Link to="/learning/statistics/bayesian-inference/prior">
        <h3>Prior — p(θ) </h3>
        <p>
          Before doing the inference, describe what you think the parameters are
          by specifying the priors.
        </p>
      </Link>
    </div>
    <div style={{ backgroundColor: Constants.lightgreen }}>
      <Link to="/learning/statistics/bayesian-inference/evidence">
        <h3>Evidence — p(data) </h3>
        <p>
          The denominator of Bayes rule. I've also seen this called the{" "}
          <i>marginal probability</i>.
        </p>
      </Link>
    </div>
    <div style={{ backgroundColor: Constants.lightred }}>
      <Link to="/learning/statistics/bayesian-inference/posterior">
        <h3>Posterior — p(θ | data) </h3>
        <p>
          This is the thing that we're trying to calculate. What are the values
          of θ that we should use for our model?
        </p>
      </Link>
    </div>
  </div>
);

export default PartsOfEquation;
