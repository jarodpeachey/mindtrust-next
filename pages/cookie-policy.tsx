import React from "react"
import Layout from "../components/layout"
import Footer from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import styles from "./CookiePolicy.module.scss"
import { BRIDGE_APP_URL } from "../config"

const CookiePolicy = () => {
  return (
    <>
      <Layout title={"Cookie Policy - MindTrust"} bodyClass="cookie" contactpage noindex>
        <header>
          <Navigation />
        </header>

        <main>
          <section className={styles.hero}>
            <div className="container">
              <h1>Cookie Policy</h1>
              <p>Last Modified: September 9, 2021</p>
            </div>
          </section>
          <section className={styles.content}>
            <div className="container">
              <p>
                This Cookie Policy explains how MNDTRST, Inc. (“MindTrust”) uses cookies and similar technologies to recognize you when you visit our Website
                (www.mindtrust.com). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              <p>
                <strong>What are cookies?</strong>
              </p>
              <p>
                A cookie is a small file containing a string of characters that is sent to your computer when you visit a website. When you visit the site
                again, the cookie allows that site to recognize your browser. Cookies may store user preferences and other information.
              </p>
              <p>Cookies provide a convenience feature to save you time, or tell the Web server that you have returned to a specific page.</p>
              <p>
                Cookies set by the website owner (in this case, MindTrust) are called "first party cookies". Cookies set by parties other than the website owner
                are called "third-party cookies". Third party cookies enable third-party features or functionality to be provided on or through the website
                (e.g. advertising, interactive content and analytics). The parties that set these third-party cookies can recognize your computer both when it
                visits the website in question and also when it visits certain other websites.
              </p>
              <p>
                <strong>Why do we use cookies?</strong>
              </p>
              <p>
                We use first party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to
                operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of
                our users to enhance the experience on our Website and MindTrust Services. For example, MindTrust keeps track of the Website pages you visit in
                order to determine what portion of the MindTrust Website or MindTrust Services are the most popular or most used. This data is used to deliver
                customized content and promotions within the MindTrust Website and MindTrust Service to customers whose behavior indicates that they are
                interested in a particular subject area. Third parties serve cookies through our Website for advertising, analytics and other purposes. This is
                described in more detail below.
              </p>
              <p>
                <strong>What types of cookies do we use, and how do we use them?</strong>
              </p>
              <p>The specific types of first and third-party cookies served through our Website and the purposes they perform. These cookies include:</p>
              <ul>
                <li>Essential website cookies: These cookies are strictly necessary to provide you with services available through our Website.</li>
                <li>
                  Performance and functionality cookies: These cookies are used to enhance the performance and functionality of our Website but are
                  non-essential to their use. However, without these cookies, certain functionality may become unavailable.
                </li>
                <li>
                  Analytics and customization cookies: These cookies collect information that is used either in aggregate form to help us understand how our
                  Website is being used or how effective our marketing campaigns are, or to help us customize our Website experience for you.
                </li>
                <li>
                  Advertising cookies: These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same
                  ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases, selecting advertisements that
                  are based on your interests.
                </li>
                <li>
                  Social networking cookies: These cookies are used to enable you to share pages and content that you find interesting on our Websites through
                  third-party social networking and other websites. These cookies may also be used for advertising purposes.
                </li>
              </ul>
              <p>
                <strong>How can I control cookies?</strong>
              </p>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate
                opt-out links provided below.
              </p>
              <p>
                You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website
                though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your
                web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
              </p>
              <p>
                In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information,
                please visit <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a> or{" "}
                <a href="http://www.youronlinechoices.com">http://www.youronlinechoices.com</a>. You may opt out by clicking here:{" "}
                <a href="http://optout.aboutads.info/">http://optout.aboutads.info/</a> or{" "}
                <a href="http://optout.networkadvertising.org/">http://optout.networkadvertising.org/</a> (or if located in the European Union, by clicking
                here: <a href="http://www.youronlinechoices.eu/">http://www.youronlinechoices.eu/</a>). Please note this does not opt you out of being served
                advertising. You will continue to receive generic advertisements.
              </p>
              <p>
                Essential website cookies: Because these cookies are strictly necessary to deliver the Website to you, you cannot refuse them. You can block or
                delete them by changing your browser settings however, as described above.
              </p>
              <p>
                <strong>What about other tracking technologies, like web beacons?</strong>
              </p>
              <p>
                Cookies are not the only way to recognize or track visitors to a website. We employ a software technology called clear GIFs (also known as Web
                Beacons or Web Bugs), that help us better manage the Website and MindTrust Service offerings by informing us what content is effective. Clear
                GIFs are tiny graphics with a unique identifier, similar in function to cookies, and are used to track the online movements of Web users. In
                contrast to cookies, which are stored on a user's computer hard drive, clear GIFs are embedded invisibly on Web pages or in emails and are about
                the size of the period at the end of this sentence. We use clear GIFs or pixels in our HTML-based emails to let us know which emails have been
                opened by recipients. This allows us to gauge the effectiveness of certain communications and the effectiveness of our marketing campaigns. We
                tie the information gathered by clear GIFs in emails to our customers' Personal Information.
              </p>
              <p>
                <strong>Do you use Flash cookies or Local Shared Objects?</strong>
              </p>
              <p>
                The Adobe Flash Player (and similar applications) use technology to remember settings, preferences and usage similar to browser cookies, but
                these are managed through a different interface than the one provided by your Web browser. This technology creates locally stored objects that
                are often referred to as "Flash cookies." MindTrust does not use Flash cookies.
              </p>
              <p>
                <strong>Do you serve targeted advertising?</strong>
              </p>
              <p>
                Third parties may serve cookies on your computer or mobile device to serve advertising through our Website. These companies may use information
                about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in.
                They may also employ technology that is used to measure the effectiveness of advertisements. They accomplish this by using cookies or web
                beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of
                potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details or
                other personally identifying details unless you choose to provide these.
              </p>
              <p>
                <strong>How often will you update this Cookie Policy?</strong>
              </p>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational,
                legal or regulatory reasons. We will notify you of any material changes to this Cookie Policy prior to the changes becoming effective by posting
                the changes on this page and providing a more prominent notice with on-site or email notifications. Please therefore re-visit this Cookie Policy
                regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>
              <p>
                <strong>Where can I get further information?</strong>
              </p>
              <p>
                If you have any questions about our use of cookies or other technologies, please email us at{" "}
                <a href="mailto:privacy@mindtrust.com">privacy@mindtrust.com</a>.
              </p>
            </div>
          </section>
        </main>

        <aside aria-labelledby="footer-cta" className={styles["footer-cta"]}>
          <div className={`container ${styles["footer-cta__container"]}`}>
            <div className={`row ${styles["container__inner"]}`}>
              <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                <img
                  loading="lazy"
                  width="38"
                  height="56"
                  className={styles["footer-cta__image"]}
                  src="/media/img/icons/icon--mindtrust-white.svg"
                  alt="MindTrust Logo"
                />
                <h2 id="footer-cta" className={`section-heading ${styles["footer-cta__title"]}`}>
                  Great teams are hard to build. <br />
                  Let us help.
                </h2>
                <a href="/request-project/1" className={`btn ${styles["footer-cta__button"]}`}>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </aside>

        <Footer showForm={false} />
      </Layout>
    </>
  )
}

export default CookiePolicy
