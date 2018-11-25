import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import "./layout.css";

import Constants from "../components/constants";

import { rhythm } from "../utils/typography";

const header = () => (
  <div className="containerrow">
    <header className="content">
      <a href="https://twitter.com/dataewan" className="twitterlink">
        <img src="./twitter.png" alt="twitter link" width="25" />
      </a>
      <Link to="/">
        <h1>dataewan</h1>
      </Link>
      <link href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" rel="stylesheet" />
    </header>
  </div>
);

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Things I wish I could remember"
      meta={[
        { name: "description", content: "dataewan things to remember" },
        { name: "keywords", content: "notebook, explaination" }
      ]}
    />
    {header()}
    {children}
  </div>
);

export default Layout;
