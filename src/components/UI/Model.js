import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Model.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Model;
