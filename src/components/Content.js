import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import "../styles/Content.scss";
import Tests from "./Tests";
import Footer from "./Footer";

const Content = () => {
  return (
    <div className="content">
      <div className="content-header">
        <div className="text-row-small">
          <ArrowBackIos className="arrow-icon" />
          Go Home
        </div>
        <div className="text-row">
          <h3>Test Lab</h3>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <Tests />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
