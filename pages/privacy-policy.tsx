import React from "react"
import Layout from "../components/layout"
import Footer from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
// import "../styles/partials/pages/_privacy-policy.scss"
import styles from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <Layout title={"Privacy Policy - MindTrust"} bodyClass="privacy" contactpage noindex>
      <header>
        <Navigation />
      </header>

      <main>
        <section className={styles.hero}>
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>Updated September 9th, 2021</p>
          </div>
        </section>
        <section className={styles.content}>
          <div className="container">
            <p>
              We at MNDTRST, Inc. (“MindTrust”) are committed to protecting your privacy. This Privacy Policy applies to the information and data collected by
              MindTrust, including the information collected on our website at www.mindtrust.com (“Website”) or through other channels as described below. This
              Privacy Policy describes how we collect, receive, use, store, share, transfer, and process your personal information. It also describes your
              choices regarding use, as well as your rights of access and correction of your personal information. If you do not agree with the data practices
              described in this Privacy Policy, you should not use our Website.
            </p>
            <p>
              We will post any privacy policy changes on this page and, if the changes are material, we will provide a more prominent notice by sending you an
              email notification.
            </p>
            <p>
              While we will notify you of any material changes to this Privacy Policy prior to the changes becoming effective, we encourage you to review this
              Privacy Policy periodically. We will also keep prior versions of this Privacy Policy in an archive for your review.
            </p>
            <p>
              If you have any questions about this Privacy Policy or our treatment of the information you provide us, please email us at privacy@mindtrust.com
              or write to us by mail addressed to:
            </p>
            <p style={{ marginBottom: 0, marginTop: 0 }}>MNDTRST, Inc.</p>
            <p style={{ marginBottom: 0, marginTop: 0 }}>Attn: Privacy</p>
            <p style={{ marginBottom: 0, marginTop: 0 }}>228 Park Ave S #86988</p>
            <p style={{ marginBottom: 0, marginTop: 0 }}>New York, NY 10003-1502</p>
            <p style={{ marginTop: 0 }}>USA</p>

            <h3>What Information We Collect About You</h3>
            <p>
              <strong>When You Visit our Website</strong>
            </p>
            <p>
              You are free to explore the Website without providing any Personal Information about yourself. When you request to be contacted via the Website or
              sign up for any of our services (“MindTrust Service”), we request that you provide Personal Information about yourself, and we collect
              Navigational Information.
            </p>
            <p>
              <strong>"Personal Information"</strong>
            </p>
            <p>
              We collect personal information from you when you submit web forms or interact with our Website, for example subscribing to a MindTrust blog,
              signing up for a webinar, or requesting customer support. We also collect personal information when you sign up for MindTrust services.
            </p>
            <p>
              "Personal Information" refers to any information that identifies you personally, including contact information, such as your name, e-mail address,
              company name, address, phone number, and other information about yourself or your business. Personal Information can also include information
              about any transactions, both free and paid, that you enter into on the Website or App forms, and information about you that is available on the
              internet, such as from Facebook, LinkedIn, Twitter and Google, or information that we acquire from service providers.
            </p>
            <p>
              Personal Information includes Navigational Information or Payment Information where such information can directly or indirectly identify an
              individual.
            </p>
            <ul>
              <li>
                Navigational information refers to information about your computer and your visits to the Websites such as your IP address, geographical
                location, browser type, referral source, length of visit and pages viewed. Please see the "Use of Navigation Information" section below.
              </li>
              <li>
                Payment information includes information we collect and process from you when you subscribe to the MindTrust Service, including payment
                information, credit card numbers, and billing information, using third-party PCI-compliant service providers. Except for this, we do not collect
                other Sensitive Information from you.
              </li>
            </ul>
            <p>
              <strong>"Sensitive Information"</strong>
            </p>
            <p>
              This refers to credit or debit card numbers, financial account numbers or wire instructions, government issued identification numbers (such as
              Social Security numbers, passport numbers), biometric information, personal health information (or other information protected under any
              applicable health data protection laws), personal information of children protected under any child data protection laws, and any other
              information or combinations of information that falls within the definition of “special categories of data” under GDPR or any other applicable law
              relating to privacy and data protection.
            </p>
            <p>
              <strong>Log Files</strong>
            </p>
            <p>
              When you view content provided by us, we automatically collect information about your computer hardware and software. This information can include
              your IP address, browser type, domain names, internet service provider (ISP), the files viewed on our site (e.g., HTML pages, graphics, etc.),
              operating system, clickstream data, access times and referring website addresses. This information is used by MindTrust to provide general
              statistics regarding use of the Website. For these purposes, we do link this automatically-collected data to other Personal Information such as
              name, email address, address, and phone number.
            </p>
            <p>
              <strong>Information we collect from third parties</strong>
            </p>
            <p>
              From time to time, we may receive Personal Information about you from third-party sources including partners in joint marketing activities, and
              sources such as social media websites.
            </p>
            <p>
              <strong>Information About Children</strong>
            </p>
            <p>
              The Website is not intended for or targeted at children under 16, and we do not knowingly or intentionally collect personal information about
              children under 16 If you believe that we have collected personal information about a child under 16, please <a href="/contact">contact us</a>, so
              that we may delete the information.
            </p>
            <h3>How We Use Information We Collect</h3>
            <p>
              <strong>Compliance with Our Privacy Policy</strong>
            </p>
            <p>
              We use the information we collect only in compliance with this Privacy Policy. Customers who subscribe to our MindTrust Services are obligated
              through our agreements with them to comply with this Privacy Policy.
            </p>
            <p>
              <strong>We Never Sell Personal Information</strong>
            </p>
            <p>We will never sell your Personal Information to any third-party.</p>
            <p>
              <strong>Use of Personal Information</strong>
            </p>
            <p>In addition to the uses identified elsewhere in this Privacy Policy, we may use your Personal Information to:</p>
            <ul>
              <li>improve your browsing experience by personalizing the Websites;</li>
              <li>develop and improve our products and services;</li>
              <li>
                send information or MindTrust content to you which we think may be of interest to you by postal mail, email, or other means and send you
                marketing communications relating to our business;
              </li>
              <li>
                promote use of our services to you and share promotional and information content with you in accordance with your communication preferences;
              </li>
              <li>
                provide other companies with statistical information about our users -- but this information will not be used to identify any individual user
                and will only be shared on an aggregate and de-identified basis;
              </li>
              <li>contact you about billing, account management, and other administrative matters;</li>
              <li>
                send information to you regarding changes to our <a href="https://www.mindtrust.com/website-terms/">Terms of Use</a>,{" "}
                <a href="https://www.mindtrust.com/privacy-policy/">Privacy Policy</a> (including the{" "}
                <a href="https://www.mindtrust.com/cookie-policy/">Cookie Policy</a>), or other legal agreements;
              </li>
              <li>investigate and help prevent security issues and abuse; or</li>
              <li>meet legal requirements.</li>
            </ul>
            <p>
              We may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In
              those cases, we do not transfer your Personal Information to the third-party.
            </p>
            <p>
              <strong>Legal basis for processing Personal Information (EEA visitors only)</strong>
            </p>
            <p>
              If you are a visitor located in the European Economic Area ("EEA"), MindTrust is the data controller of your personal information. MindTrust's
              Data Protection Officer can be <a href="https://www.mindtrust.com/contact/">contacted here</a>.{" "}
            </p>
            <p>
              Our legal basis for collecting and using the personal information described above will depend on the personal information concerned and the
              specific context in which we collect it. However, we will normally collect personal information from you only where we have your consent to do so,
              where we need the personal information to perform a contract with you, or where the processing is in our legitimate interests and not overridden
              by your data protection interests or fundamental rights and freedoms. In some cases, we may also have a legal obligation to collect personal
              information from you.
            </p>
            <p>
              If we ask you to provide personal information to comply with a legal requirement or to perform a contract with you, we will make this clear at the
              relevant time and advise you whether the provision of your personal information is mandatory or not (as well as of the possible consequences if
              you do not provide your personal information). Similarly, if we collect and use your personal information in reliance on our legitimate interests
              (or those of any third-party), we will make clear to you at the relevant time what those legitimate interests are.
            </p>
            <p>
              <strong>Use of Navigational Information</strong>
            </p>
            <p>
              We use Navigational Information to operate and improve the Website and to provide you with a better experience when you interact with MindTrust.
              We may also use Navigational Information alone or in combination with Personal Information to provide you with personalized information about
              MindTrust. Navigational Information, such as IP address, is used to approximate your location. For example, we may use your approximate location
              to provide content that has been translated or send emails at certain times using your local time zone.
            </p>
            <p>
              You may disable the collection and use of your location data through browser, operating system- or device-level settings. Consent concerning
              location data may be withdrawn at any time here.
            </p>
            <p>
              <strong>Customer Testimonials and Comments</strong>
            </p>
            <p>
              We post customer testimonials and comments on our Website, which may contain Personal Information. We obtain each customer's consent via email
              prior to posting the customer's name and testimonial.
            </p>
            <p>
              <strong>Use of Payment Information</strong>
            </p>
            <p>
              If you give us Payment information, we use it solely as authorized by you in accordance with this Privacy Policy in order for you to use the
              MindTrust Services, including to check your financial qualifications and collect payment from you. We use a third-party service provider to manage
              credit card processing. This service provider is not permitted to store, retain, or use information you provide except for the sole purpose of
              credit card processing on our behalf.
            </p>
            <p>
              <strong>Security of your Personal Information</strong>
            </p>
            <p>
              We use a variety of security technologies and procedures to help protect your Personal Information from unauthorized access, use or disclosure. We
              secure the Personal Information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or
              disclosure. All Personal Information is protected using appropriate physical, technical and organizational measures.
            </p>
            <p>
              <strong>Social Media Features</strong>
            </p>
            <p>
              Our Website includes Social Media Features, such as the Facebook Like button and Widgets, such as the Share Button or interactive mini-programs
              that run on our sites. These features may collect your IP address, which page you are visiting on our sites, and may set a cookie to enable the
              feature to function properly. Social Media Features and Widgets are either hosted by a third-party or hosted directly on our Website. This Privacy
              Policy does not apply to these features. Your interactions with these features are governed by the privacy policy and other policies of the
              companies providing them.
            </p>
            <p>
              <strong>External Websites</strong>
            </p>
            <p>
              Our Website provides links to other websites of third parties. We do not control, and are not responsible for, the content or practices of these
              other websites. Our provision of such links does not constitute our endorsement of these other websites, their content, their owners, or their
              practices. This Privacy Policy does not apply to these other websites, which are subject to any privacy and other policies they may have.
            </p>
            <p>
              <strong>Retention of Personal Information</strong>
            </p>
            <p>
              How long we keep information we collect about you depends on the type of information, as described in further detail below. After such time, we
              will either delete or anonymize your information or, if this is not possible, then we will securely store your information and isolate it from any
              further use until deletion is possible.
            </p>
            <p>
              We retain Personal Information that you provide to us where we have an ongoing legitimate business need to do so (for example, as needed to comply
              with our legal obligations, resolve disputes, and enforce our agreements).
            </p>
            <p>
              When we have no ongoing legitimate business need to process your Personal Information, we securely delete the information or anonymize it or, if
              this is not possible, securely store your Personal Information and isolate it from any further processing until deletion is possible. We will
              delete this information at an earlier date if you so request, as described in the "How to Access & Control Your Personal Data" below.
            </p>
            <p>
              If you have elected to receive marketing communications from us, we retain information about your marketing preferences for a reasonable period of
              time from the date you last expressed interest in our content, products, or services, such as when you last opened an email from us or ceased
              using your MindTrust account. We retain information derived from cookies and other tracking technologies for a reasonable period of time from the
              date such information was created
            </p>
            <h3>How we Share Information we Collect</h3>
            <p>
              <strong>Service Providers</strong>
            </p>
            <p>
              We employ other third-party service providers to provide services on our behalf to visitors to our Website and our customers and users of the
              MindTrust Service and may need to share your information with them to provide information, products or services to you. We might also share data
              with third parties but only if the data has been de-identified in a way so it cannot be used to identify you. Examples may include removing
              repetitive information from prospect lists, analyzing data or performing statistical analysis on your use of the MindTrust Service or interactions
              on our Website, providing marketing assistance, processing payments, supplementing the information you provide us in order to provide you with
              better service, developing and improving the product and services, and providing customer service or support. These service providers are
              prohibited from using your Personal Information except for these purposes, and they are required to maintain the confidentiality of your
              information. In all cases where we share your information with such agents, we explicitly require the agent to acknowledge and adhere to our
              privacy and data protection policies and standards.
            </p>
            <p>
              <strong>Corporate Events</strong>
            </p>
            <p>
              If we (or our assets) are acquired by another company, whether by merger, acquisition, bankruptcy or otherwise, that company would receive all
              information gathered by MindTrust on the Websites and the MindTrust Service. In this event, you will be notified via email and/or a prominent
              notice on our website, of any change in ownership, uses of your Personal Information, and choices you may have regarding your Personal
              Information.
            </p>
            <p>
              <strong>Compelled Disclosure</strong>
            </p>
            <p>
              We reserve the right to use or disclose your Personal Information if required by law or if we reasonably believe that use or disclosure is
              necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or comply with a law, court order, or legal
              process.
            </p>
            <h3>How We Transfer Data We Collect Internationally</h3>
            <p>
              <strong>International Transfers within MindTrust’s Entities</strong>
            </p>
            <p>
              To facilitate our global operations, we transfer information to either Ireland or the United States and allow access to that information from
              countries in which the MindTrust affiliated entities have operations for the purposes described in this policy.
            </p>
            <p>
              This Privacy Policy shall apply even if we transfer Personal Information to other countries. We have taken appropriate safeguards to require that
              your Personal Information will remain protected. When we share information about you within and among MindTrust’s affiliated entities, we make use
              of standard contractual data protection clauses, which have been approved by the European Commission, and we have also certified to the EU-U.S.
              and Swiss-U.S. Privacy Shield Frameworks to help safeguard the transfer of information we collect from the European Economic Area (“EEA”), the
              United Kingdom, and Switzerland. Please see our Privacy Shield notice below for more information.
            </p>
            <p>
              <strong>International transfers to third parties</strong>
            </p>
            <p>
              Some of the third parties described in this privacy policy, which provide services to us under contract, are based in other countries that may not
              have equivalent privacy and data protection laws to the country in which you reside. When we share information of customers in the EEA or
              Switzerland, we make use of a variety of legal mechanisms to safeguard the transfer, including the European Commission-approved standard
              contractual data protection clauses, or other appropriate legal mechanisms. For transfers to or from the United Kingdom, we make use of the
              standard contractual clauses. Please contact us if you need more information about the legal mechanisms we rely on to transfer Personal
              Information outside the EEA, Switzerland, and the United Kingdom.
            </p>
            <p>
              <strong>Privacy Shield Notice</strong>
            </p>
            <p>
              MindTrust participates in and has certified its compliance with the EU-U.S. Privacy Shield Framework and the Swiss–U.S. Privacy Shield Framework.
              The following affiliated entities adhere to the Privacy Shield principles: MindTrust Ireland Limited, MindTrust Germany GmbH, MindTrust France
              S.A.S, MindTrust Australia Pty Ltd, MindTrust Asia Pte. Ltd., MindTrust Latin America S.A.S, and MindTrust Japan KK. MindTrust is committed to
              subjecting all personal data received from European Union (EU) member countries, the United Kingdom and Switzerland, in reliance on the Privacy
              Shield Framework, to the Framework’s applicable Principles. To learn more about the Privacy Shield Frameworks, visit the U.S. Department of
              Commerce’s Privacy Shield List at https://www.privacyshield.gov.
            </p>
            <p>
              MindTrust is responsible for the processing of personal data it receives under each Privacy Shield Framework and subsequently transfers to a third
              party acting as an agent on its behalf. MindTrust complies with the Privacy Shield Principles for all onward transfers of personal data from the
              EEA, the United Kingdom, and Switzerland, including the onward transfer liability provisions.
            </p>
            <p>
              With respect to personal data received or transferred pursuant to the Privacy Shield Framework, MindTrust is subject to the regulatory enforcement
              powers of the U.S. Federal Trade Commission. In certain situations, MindTrust may be required to disclose personal data in response to lawful
              requests by public authorities, including to meet national security or law enforcement requirements.
            </p>
            <p>
              You may direct any inquiries or complaints related to our Privacy Shield compliance{" "}
              <a href="https://privacyportal.onetrust.com/webform/9fd092df-0b2a-4194-89f1-820b83267af4/13da1ce4-8542-4d34-a84c-379495aa666c">here</a>. If you
              have an unresolved privacy or data use concern that we have not addressed satisfactorily, please contact our U.S.-based third-party dispute
              resolution provider (free of charge) at https://feedback-form.truste.com/watchdog/request.
            </p>
            <p>
              Under certain conditions, more fully described on the{" "}
              <a href="https://www.privacyshield.gov/article?id=How-to-Submit-a-Complaint">Privacy Shield website</a>, you may be entitled to invoke binding
              arbitration when other dispute resolution procedures have been exhausted.
            </p>
            <h3>Cookies and Similar Technologies</h3>
            <p>
              <strong>Cookies</strong>
            </p>
            <p>
              MindTrust and our partners use cookies or similar technologies (such as web beacons and JavaScript) to analyze trends, administer the website,
              track users’ movements around the website, and to gather demographic information about our user base as a whole. To find out more about how we use
              cookies on our Websites and how to manage your cookie preferences please see our <a href="/cookie-policy">Cookie Policy</a>.
            </p>
            <p>
              <strong>Flash Cookies and Other Third-party Tracking Technologies</strong>
            </p>
            <p>
              The Adobe Flash Player (and similar applications) use technology to remember settings, preferences and usage similar to browser cookies, but these
              are managed through a different interface than the one provided by your Web browser. This technology creates locally stored objects that are often
              referred to as "Flash cookies." MindTrust does not use Flash cookies.
            </p>
            <p>
              <strong>Third-party Tracking Technologies</strong>
            </p>
            <p>The use of cookies and web beacons by any tracking utility company is not covered by our Privacy Policy or Cookie Policy.</p>
            <h3>How to Access and Control your Personal Data</h3>
            <p>
              <strong>Reviewing, Correcting and Removing Your Personal Information</strong>
            </p>
            <p>You have the following data protection rights:</p>
            <ul>
              <li>
                You can request access, correction, updates or deletion of your personal information. You can object to processing of your personal information,
                ask us to restrict processing of your personal information or request portability of your personal information.
              </li>
              <li>
                If we have collected and processed your personal information with your consent, then you can withdraw your consent at any time. Withdrawing your
                consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect processing of your personal
                information conducted in reliance on lawful processing grounds other than consent.
              </li>
              <li>
                You have the right to complain to a data protection authority about our collection and use of your personal information. Contact details for
                data protection authorities in the EEA, Switzerland and certain non-European countries (including the US and Canada) are available{" "}
                <a href="https://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm">here</a>.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us by mail to MNDTRST, Inc., 228 Park Ave S #86988, New York, NY 10003-1502, USA, Attention:
              Privacy. We will respond to your request to change, correct, or delete your information within a reasonable timeframe and notify you of the action
              we have taken.
            </p>
            <p>
              <strong>Anti-Spam Policy / To Unsubscribe From Our Communications</strong>
            </p>
            <p>
              You may unsubscribe from our marketing communications by clicking on the "unsubscribe" link located on the bottom of our emails, updating your
              communication preferences, or by contacting us <a href="/contact">here</a> or postal mail to MNDTRST, Inc., 228 Park Ave S #86988, New York, NY
              10003-1502, USA, Attention: Privacy. Customers cannot opt out of receiving transactional emails related to their account with us or the MindTrust
              Service.
            </p>
            <h3>California Privacy Rights</h3>
            <p>
              This section applies only to California consumers. It describes how we collect, use, and share California consumers' Personal Information in our
              role as a business, and the rights applicable to such residents. The California Consumer Privacy Act ("CCPA") requires businesses to disclose
              whether they sell Personal Data. MindTrust is a business, and does not sell Personal Data. We may share Personal Data with third parties if those
              third parties are authorized service providers or business partners who have agreed to our contractual limitations as to their retention, use, and
              disclosure of such Personal Data.
            </p>
            <p>
              If you are unable to access this Privacy Policy due to a disability or any physical or mental impairment, please contact us and we will arrange to
              supply you with the information you need in an alternative format that you can access.
            </p>
            <p>For purposes of this section "Personal Information" has the meaning given in the California Consumer Privacy Act (“CCPA”).</p>
            <p>
              <strong>How We Collect, Use, and Share your Personal Information</strong>
            </p>
            <p>We have collected the following statutory categories of Personal Information in the past twelve (12) months:</p>
            <ul>
              <li>
                Identifiers, such as name, e-mail address, mailing address, and phone number. We collect this information directly from you or from third-party
                sources.
              </li>
              <li>Commercial information, such as customer records. We collect this information directly from you.</li>
              <li>Internet or network information, such as browsing and search history. We collect this information directly from your device.</li>
              <li>Geolocation data, such as IP address. We collect this information from your device.</li>
              <li>
                Financial information, such as Payment Information or financial account numbers in the process of providing you with our service. We collect
                this information from you.
              </li>
              <li>Inferences</li>
              <li>
                Other personal information, in instances when you interact with us online, by phone or mail in the context of receiving help through our help
                desks or other support channels; participation in customer surveys or contests; or in providing the MindTrust Service.
              </li>
            </ul>
            <p>
              The business and commercial purposes for which we collect this information are described in Section 2 of this Privacy Policy. The categories of
              third parties to whom we "disclose" this information for a business purpose are described in Section 3 of this Privacy Policy.
            </p>
            <p>
              <strong>Your California Rights</strong>
            </p>
            <p>
              You have certain rights regarding the Personal Information we collect or maintain about you. Please note these rights are not absolute, and there
              may be cases when we decline your request as permitted by law.
            </p>
            <p>
              The right of access means that you have the right to request that we disclose what Personal Information we have collected, used and disclosed
              about you in the past 12 months.
            </p>
            <p>
              The right of deletion means that you have the right to request that we delete Personal Information collected or maintained by us, subject to
              certain exceptions.
            </p>
            <p>The right to non-discrimination means that you will not receive any discriminatory treatment when you exercise one of your privacy rights.</p>
            <p>
              <strong>How to Exercise your California Rights</strong>
            </p>
            <p>
              You can exercise your rights yourself or you can alternatively designate an authorized agent to exercise these rights on your behalf. Please note
              that to protect your Personal Information, we will verify your identity by a method appropriate to the type of request you are making. We may also
              request that your authorized agent have written permission from you to make requests on your behalf, and we may also need to verify your
              authorized agent's identity to protect your Personal Information.
            </p>
            <p>Please use the contact details below, if you would like to:</p>
            <ul>
              <li>Access this policy in an alternative format;</li>
              <li>Exercise your rights;</li>
              <li>Learn more about your rights or our privacy practices; or</li>
              <li>Designate an authorized agent to make a request on your behalf.</li>
            </ul>
            <h3>Data Protection Officer</h3>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, or if you have a disability and need to access this notice in a
              different format, please contact us by mail at:
            </p>
            <p>Data Protection</p>
            <p>MNDTRST, Inc.</p>
            <p>228 Park Ave S #86988</p>
            <p>New York, NY 10003-1502, USA</p>
          </div>
        </section>
      </main>

      <aside aria-labelledby="footer-cta" className={styles["footer-cta"]}>
        <div className={`container ${styles["footer-cta__container"]}`}>
          <div className={`row ${styles["container__inner"]}`}>
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <img loading="lazy" width="38" height="56" className={styles["footer-cta__image"]} src="/media/img/icons/icon--mindtrust-white.svg" alt="MindTrust Logo" />
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

export default PrivacyPolicy
