import React, { Component } from "react";
import Jumbotron from "../../components/layouts/Jumbotron.js";
import Accordd from "../layouts/Faq.js";
import { Container } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import BootstrapCarousel from "../layouts/Carousel.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid className="home">
          <Jumbotron />
          <BootstrapCarousel />
          <h2>Home page</h2>
          <br></br>
          <p style={{ fontFamily: "helvetica" }}>
            Direct Your Life is the only support group for offenders in the
            Greater Toronto Area. We provide a support system to help at-risk
            youth or recently released offenders find housing, employment and/or
            schooling support through a variety of coaching programs.
          </p>
          <p style={{ fontFamily: "helvetica" }}>
            We are a non-profit organization in the Greater Toronto Area run by
            Community Advisors with lived experience navigating the criminal
            justice system in Canada. All members of our team aspire to empower
            our participants by providing the tools and mentorship for success.
          </p>
          <p style={{ fontFamily: "helvetica" }}>
            Our objective is to prevent incarceration and recidivism among
            at-risk youth and recently released offenders. Our mentorship
            programs aims to help our participants establish strong leadership
            skills, meaningful connections as well as help guide them to a
            healthy and successful integration back to society. DIRECT YOUR LIFE
            adopts a Restorative approach to our mentoring programs. The
            Restorative paradigm sees “crime” as harm done to other people
            (physical, material and emotional) which are violations of
            relationships, and focuses on repairing trauma as well as
            restoration of relationships. It is used as a framework for
            individual engagement, for relationship building, and for building
            community systems and organizations. This approach can be used from
            every day human interaction to more serious trauma and harm-related
            events. A Restorative approach provides a framework and practice
            model which offers a platform for delivering individual and group
            mentoring support which is universally recognized around the world.
            The group component is referred to as “circles” or “peacemaking
            circles,” which builds on Indigenous and traditional communities’
            practices and values.
          </p>
        </Container>
        <br />
        <h2>Frequently Asked Questions (FAQs)</h2>
        <br />
        <Accordd />
        <br />
        <br />
        <br />
        <h2>Subscribe to our Newsletter</h2>
        <br />
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        <br />
        <br />

        <br />
      </div>
    );
  }
}

export default Home;
