import React, { useEffect, useState } from "react";
import ContactForm from "./contactForm";
import "./head.css";
import fire from "../fire";
function Head() {
  var addOrEdit = (values) => {
    //building object for pushing data into database
    var firedb = fire.database().ref();
    firedb.child("contacts").push(values);
  };

  return (
    <>
      <div className="header">Contact Register</div>
      <ContactForm addOrEdit={addOrEdit} />
    </>
  );
}

export default Head;
