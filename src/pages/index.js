import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NameForm from "../components/form"
import Donate from "../images/cGif"

const IndexPage = () => (
  <Layout>
    <SEO title="Developer" keywords={[`Janne`, `Kytola`, `jannekytola`, `KytöläJanne`, `parasSeo`, `JanneSovelluskehitys`, `UnityPelinkehitys`]} />
    <LandingBio />

    <NameForm />

<div id="myDIVi"></div>
<div id="myDIVii"><a href="https://paypal.me/kahviraha/5"><img src={Donate} alt="corgi" title="donateButton"/></a></div>

  </Layout>
)

export default IndexPage
