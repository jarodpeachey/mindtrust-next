import React from "react"
import Script from "../../node_modules/next/script"

// import "../../styles/partials/_contact-form.scss"
// import "../../styles/partials/pages/_contact.scss"
import styles from "./ContactForm.module.scss"

interface Props {
  showForm: boolean
}

const ContactForm: React.FC<Props> = props => {
  return (
    <>
      <Script src="/js/contactForm.js" strategy="lazyOnload" />
      <div className={styles["contact-form"]} aria-label="Contact MindTrust">
        <div className={styles["contact-form__card"]}>
          <div id="form-message"></div>
          <img loading="lazy" src="/media/img/icons/icon--mindtrust.svg" alt="MindTrust logo" className={styles.logo} />
          <span className={styles.info}>
            Fields marked with a <span className={styles["error-message"]}>*</span> are required
          </span>
          <form id="contact-form" className={styles["contact-form"]}>
            <div className="row">
              <div className="col-12">
                <label htmlFor="firstName" className="label first-name">
                  First name <span className={styles["error-message"]}>*</span>
                </label>
                <input type="text" id="firstName" placeholder="" className="input validate first-name" />
                <span className={styles["error-message"]}>Please enter your first name</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="lastName" className="label last-name">
                  Last name <span className={styles["error-message"]}>*</span>
                </label>
                <input type="text" id="lastName" placeholder="" className="input validate last-name" />
                <span className={styles["error-message"]}>Please enter your last name</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="email" className="label email">
                  Business email <span className={styles["error-message"]}>*</span>
                </label>
                <input type="email" id="email" placeholder="" className="input validate email" />
                <span className={styles["error-message"]}>Please enter a valid email</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="phone" className="label phone">
                  Phone number
                </label>
                <input type="tel" id="phone" placeholder="" className="input phone" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <label htmlFor="companyName" className="label company">
                  Company name <span className={styles["error-message"]}>*</span>
                </label>
                <input type="text" id="companyName" placeholder="" className="input validate company" />
                <span className={styles["error-message"]}>Please enter a value</span>
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="companyWebsite" className="label website">
                  Website URL
                </label>
                <input type="text" id="companyWebsite" placeholder="" className="input website" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="message" className="label message">
                  Let us know what you're looking for and how we can help <span className={styles["error-message"]}>*</span>
                </label>
                <textarea id="message" className="input validate textarea message"></textarea>
                <span className={styles["error-message"]}>Please enter a value</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>
                  MindTrust is committed to protecting and respecting your privacy. We use the information you provide to us to contact you about our relevant
                  content, services, and special offers. You may unsubscribe from these communications at any time. For more information, check out our{" "}
                  <a href="/privacy-policy/">Privacy Policy</a>.
                </p>
                {/* <Checkbox id="marketing-checkbox">Marketing offers and updates</Checkbox> */}
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input className="btn full-width" type="submit" value="Send a Message" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm
