import React, { Component } from "react";
import ContactForm from "./contactForm";
import "./head.css";
class Head extends Component {
  addOrEdit(values) {}

  render() {
    return (
      <>
        <div className="header">Contact Register</div>
        <ContactForm addOrEdit={this.addOrEdit} />
      </>
    );
  }
}

export default Head;
