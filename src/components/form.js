// Adapted from:
// https://github.com/sw-yx/gatsby-netlify-form-example-v2/blob/master/src/pages/contact.js
// https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/

// This is what we'll use to navigate to the custom success page
// More on this here: https://www.gatsbyjs.org/docs/gatsby-link/#how-to-use-the-navigate-helper-function
import { navigate } from "gatsby"
import React, { useState } from "react";

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const NameForm = (props) => {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/thank-you/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  return (
    

<div id="myDIV">
<p>Looking to get in touch?</p>
<form name="Contact Form" method="POST" data-netlify="true" action="/" onSubmit={handleSubmit}>
    <input type="hidden" name="form-name" value="Contact Form"  />
    <div>
      <label></label>
      <input type="email" name="email" placeholder="Email" />
    </div>
    <div>
      <label></label>
      <textarea name="message" placeholder="Message"  onChange={handleChange} />
    </div>
    <button type="submit">Send</button></form>
</div>




  );
}

export default NameForm
