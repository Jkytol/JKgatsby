import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Developer" keywords={[`Janne`, `Kytola`, `jannekytola`, `KytöläJanne`, `parasSeo`, `JanneSovelluskehitys`, `UnityPelinkehitys`]} />
    <LandingBio />
  </Layout>
)

export default IndexPage
