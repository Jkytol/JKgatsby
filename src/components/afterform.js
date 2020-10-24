import { navigate } from "gatsby"
import React, { useState } from "react";

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

    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })

      .then(() => navigate("/thankyou/"))
      .catch(error => alert(error));
  };
    
  return (
<div id="myDIV">
<p>Message sent</p><p class="succesfull">succesfully!</p>
<br></br>
<p>Check the <a href="/blog" class="bloglink" >Blog</a> if bored.</p>
<br></br>
<p> have a nice day!</p>
</div>
  );
}

export default NameForm
