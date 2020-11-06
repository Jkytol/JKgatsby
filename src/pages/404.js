import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <h4>Missing page... somebody made a wrong move.</h4>
  <img src="https://raw.githubusercontent.com/Jkytol/JKgatsby/master/src/images/chess.gif" alt="pageNotFound"/>
  </Layout>
)

export default NotFoundPage
