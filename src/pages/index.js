import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NameForm from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Developer" keywords={[`Janne`, `Kytola`, `jannekytola`, `KytöläJanne`, `parasSeo`, `JanneSovelluskehitys`, `UnityPelinkehitys`]} />
    <LandingBio />

    <NameForm />

<div id="myDIVi"></div>
<div id="myDIVii"><a href="https://paypal.me/kahviraha/5"><img src="https://raw.githubusercontent.com/Jkytol/JKgatsby/master/src/images/cGIF.gif" title="donateButton" /></a></div>

  </Layout>
)

export default IndexPage
