import React from "react"
import Layout from "../components/layout"
import Footer from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import ContactForm from "../components/ContactForm/ContactForm"
// import "../styles/partials/pages/_contact.scss"
import styles from "./Contact.module.scss"

const Contact = () => {
  return (
    <>
      <Layout
        title={"Contact MindTrust - Let's build something beautiful"}
        description={
          "Get in contact with MindTrust via phone, email, or our online form for more information on our Teams as a Service Platform or and other inquiries you may have."
        }
        bodyClass="contact"
        contactpage
      >
        <header>
          <Navigation />
        </header>

        <main>
          <section className={styles.hero}>
            <div className="container">
              <h1 className={`section-heading display ${styles.contactTitle}`}>Let's build something beautiful</h1>
              <p className={`section-description ${styles.contactSubtitle}`}>Fill out the form below and let us know how we can help.</p>
            </div>
          </section>
          <section className={styles.contact}>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <ContactForm />
                </div>
                <div className="col-lg-5">
                  <p>For immediate assistance, please call our sales line or email customer support.</p>
                  <h2 className="h3">Sales Inquiries</h2>
                  <p>
                    Toll Free: <a href="tel:844646387878">1-844-MINDTRUST</a>
                  </p>
                  <p>
                    International: <a href="tel:1-203-780-8000">1-203-780-8000</a>
                  </p>
                  <p>
                    <a href="mailto:sales@mindtrust.com">sales@mindtrust.com</a>
                  </p>
                  <h2 className="h3">Support</h2>
                  <p>
                    <a href="mailto:support@mindtrust.com">support@mindtrust.com</a>
                  </p>
                  <h2 className="h3">Media/Press Inquiries</h2>
                  <p>
                    <a href="mailto:media@mindtrust.com">media@mindtrust.com</a>
                  </p>
                  <h2 className="h3">Investment Opportunities</h2>
                  <p>
                    We build, launch, and grow some of the world’s most innovative technology companies. Investors interested in early and growth stage
                    opportunities and entrepreneurs interested in our residency programs please contact{" "}
                    <a href="mailto:investor-relations@mindtrust.com">investor-relations@mindtrust.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.locations}>
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <h2 className="section-heading display">
                    Where <br /> to find us
                  </h2>
                </div>
                <div className="col-lg-8">
                  <div className="row large">
                    <div className="col-sm-6 col-md-12">
                      <div className={styles.location}>
                        <img loading="lazy" src="/media/img/backgrounds/nh.svg" alt="" role="presentation" />
                        <h3 className="h2">New Haven HQ</h3>
                        <p>
                          MindTrust
                          <br />
                          470 James Street, Suite 11
                          <br />
                          New Haven, CT 06513
                        </p>
                        <p>
                          <a href="https://goo.gl/maps/d7Rfz6CZSAtfuypV7" target="_blank" rel="noopener">
                            Get Directions
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className={styles.location}>
                        <img loading="lazy" src="/media/img/backgrounds/ny.svg" alt="" role="presentation" />
                        <h3 className="h2">New York Mailing Address</h3>
                        <p>
                          MindTrust
                          <br />
                          228 Park Ave S #86988
                          <br />
                          New York, NY 10003-1502, USA
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className={styles.location}>
                        <img loading="lazy" src="/media/img/backgrounds/sf.svg" alt="" role="presentation" />
                        <h3 className="h2">San Fransisco Mailing Address</h3>
                        <p>
                          MindTrust
                          <br />
                          548 Market St.
                          <br />
                          San Fransisco, CA 94104-5401, USA
                        </p>
                      </div>
                    </div>
                  </div>

                  <picture>
                    <source srcSet="https://assets.mindtrust.com/img/contact/contact.jpg?w=500" media="(min-width: 1200px)" />
                    <source srcSet="https://assets.mindtrust.com/img/contact/contact.jpg?w=430" media="(min-width: 992px)" />
                    <source srcSet="https://assets.mindtrust.com/img/contact/contact.jpg?w=360" media="(min-width: 768px)" />
                    <img loading="lazy" alt="Hero image" className={styles.location__image} src="https://assets.mindtrust.com/img/contact/contact.jpg?w=360" />
                  </picture>
                </div>
              </div>
            </div>
          </section>
          <section className={`cut--top-right ${styles.benefits}`}>
            <div className="container">
              <h2 className={`section-heading display ${styles.benefitsTitle}`}>MindTrust is hiring</h2>
              <div className="row">
                <div className="col-lg-4">
                  <div className={`card ${styles.benefitsCard}`}>
                    <h3>Got what it takes?</h3>
                    <p>
                      When working with MindTrust, you'll gain access to a top-tier professional network, great clients, and resources you can leverage to
                      accelerate your career.
                    </p>
                    <a href="mailto:hr@mindtrust.com" className="btn outlined light">
                      Join the Team
                    </a>
                  </div>
                </div>
                <div className="col-lg-8">
                  <picture>
                    <source srcSet="https://assets.mindtrust.com/img/contact/hiring.jpg?w=717&auto=format" media="(min-width: 1200px)" />
                    <source srcSet="https://assets.mindtrust.com/img/contact/hiring.jpg?w=610&auto=format" media="(min-width: 992px)" />
                    <source srcSet="https://assets.mindtrust.com/img/contact/hiring.jpg?w=510&auto=format" media="(min-width: 576px)" />
                    <img
                      loading="lazy"
                      alt="Hero image"
                      className={styles.benefits__image}
                      src="https://assets.mindtrust.com/img/contact/hiring.jpg?w=500&q=50&auto=format"
                    />
                  </picture>
                  <img
                    loading="lazy"
                    width="64"
                    height="64"
                    role="presentation"
                    alt=""
                    src="/media/img/icons/icon--mindtrust-solid.svg"
                    className={styles["benefits__image--indicator"]}
                  />
                </div>
              </div>

              <div className={styles.quote__wrapper}>
                <div className={styles.quote__left}>
                  <p className={styles.quote}>
                    "Working at MindTrust has given me an opportunity to stay sharp on the latest technologies while making an impact when collaborating with
                    great clients."
                  </p>
                  <div>André Mendonça, MindTrust</div>
                </div>
                <div className={styles.quote__right}>
                  <picture>
                    <source srcSet="https://assets.mindtrust.com/img/featured-team/headshots/andre.jpg?w=352&auto=format" media="(min-width: 1200px)" />
                    <source srcSet="https://assets.mindtrust.com/img/featured-team/headshots/andre.jpg?w=299&auto=format" media="(min-width: 992px)" />
                    <source srcSet="https://assets.mindtrust.com/img/featured-team/headshots/andre.jpg?w=273&auto=format" media="(min-width: 768px)" />
                    <source srcSet="https://assets.mindtrust.com/img/featured-team/headshots/andre.jpg?w=199&auto=format" media="(min-width: 576px)" />
                    <img
                      loading="lazy"
                      alt="Hero image"
                      className={styles.quote__image}
                      src="https://assets.mindtrust.com/img/featured-team/headshots/andre.jpg?w=199&q=70&auto=format"
                    />
                  </picture>{" "}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer showForm={true} />
      </Layout>
    </>
  )
}

export default Contact
