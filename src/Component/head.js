import React, { useEffect, useState } from "react";
import ContactForm from "./contactForm";
import "./head.css";
import fire from "../fire";
function Head() {
  var [contactObjects, setContactObjects] = useState(0);

  useEffect(() => {
    fire
      .database()
      .ref()
      .child("contacts")
      .on("value", (snapShot) => {
        if (snapShot.val() != null) {
          setContactObjects({ ...snapShot.val() });
        }
      });
  }, []); // analogous to componentDidMount

  var addOrEdit = (values) => {
    //building object for pushing data into database
    var firedb = fire.database().ref();
    firedb.child("contacts").push(values);
  };

  return (
    <>
      <div className="header">Contact Register</div>
      <ContactForm addOrEdit={addOrEdit} />
      <table>
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(contactObjects).map((obj) => {
            return (
              <tr>
                <td>{contactObjects[obj].Fullname}</td>
                <td>{contactObjects[obj].mobile}</td>
                <td>{contactObjects[obj].email}</td>
                <td>{contactObjects[obj].address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Head;
