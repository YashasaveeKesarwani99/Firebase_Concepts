import React, { useEffect, useState } from "react";
import "./contactForm.css";
export default function ContactForm(props) {
  const initialValues = {
    fullname: "",
    mobile: "",
    email: "",
    address: ""
  };

  var [values, setValues] = useState(initialValues);

  var inputHandler = (e) => {
    var value = e.target.value;
    var name = e.target.name;
    setValues({
      ...values,
      [name]: value
    });
  };

  var submitHandler = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="fullName"
        name="fullname"
        value={values.fullname}
        onChange={inputHandler}
      />
      <input
        onChange={inputHandler}
        placeholder="mobile"
        name="mobile"
        value={values.mobile}
      />
      <input
        onChange={inputHandler}
        placeholder="email"
        name="email"
        value={values.email}
      />
      <input
        onChange={inputHandler}
        placeholder="address"
        name="address"
        value={values.address}
      />
      <br />
      <input type="submit" title="save" />
    </form>
  );
}
