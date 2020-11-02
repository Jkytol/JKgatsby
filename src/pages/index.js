import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NameForm from "../components/form"
import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});




const trackingId = "G-WD4QKB7CNQ"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})

const IndexPage = () => (
  <Layout>
    <SEO title="Developer" keywords={[`Janne`, `Kytola`, `jannekytola`, `KytöläJanne`, `parasSeo`, `JanneSovelluskehitys`, `UnityPelinkehitys`]} />
    <LandingBio />

    <NameForm />

<div id="myDIVi"></div>
<div id="myDIVii"><a href="https://paypal.me/kahviraha/5"><img src="https://raw.githubusercontent.com/Jkytol/JKgatsby/master/src/images/cGIF.gif" alt="donateButton"/></a></div>

  </Layout>
)

export default IndexPage
