import React from "react"
import Checkbox from "./Checkbox"
import "../styles/partials/_jobsubmit-form.scss"
import "../styles/partials/pages/_contact.scss"

interface Props {
  showForm: boolean
}

const JobSubmitForm: React.FC<Props> = props => {
  return (
    <>
      <div className="jobsubmit-form" aria-label="JobSubmit MindTrust">
        <div className="jobsubmit-form__card">
          <form className="jobsubmit-form">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <label htmlFor="firstName" className="label first-name">
                  First name <span className="error-message">*</span>
                </label>
                <input type="text" id="firstName" placeholder="" className="input validate first-name" />
                <span className="error-message">Please enter your first name</span>
              </div>
              <div className="col-md-12 col-lg-6">
                <label htmlFor="lastName" className="label last-name">
                  Last name <span className="error-message">*</span>
                </label>
                <input type="text" id="lastName" placeholder="" className="input validate last-name" />
                <span className="error-message">Please enter your last name</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="email" className="label email">
                  Email <span className="error-message">*</span>
                </label>
                <input type="email" id="email" placeholder="" className="input validate email" />
                <span className="error-message">Please enter a valid email</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="mt_applicant_work_experience_linked_in_url" className="label mt_applicant_work_experience_linked_in_url">
                  Linkedin Bio
                </label>
                <input
                  type="text"
                  id="mt_applicant_work_experience_linked_in_url"
                  placeholder=""
                  className="input validate mt_applicant_work_experience_linked_in_url"
                />
                <span className="error-message">Please enter a value</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="mt_applicant_participation_role" className="label mt_applicant_participation_role">
                  Desired Team Member Role
                </label>
                <input type="text" id="mt_applicant_participation_role" placeholder="" className="input validate mt_applicant_participation_role" />
                <span className="error-message">Please enter a value</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="message" className="label message">
                  Message <span className="error-message">*</span>
                </label>
                <textarea id="message" className="input validate textarea message"></textarea>
                <span className="error-message">Please enter a value</span>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <p>
                  MindTrust is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and
                  to provide the products and services you requested from us.  From time to time, we would like to contact you about our products and services,
                  as well as other content that may be of interest to you.
                </p>
                <Checkbox id="consent-checkbox" className="consent-checkbox">I consent to my e-mail being used for marketing offers and updates.</Checkbox>
                <p>
                  You can unsubscribe at any time. To learn how, and read how committed we are to protecting and respecting your privacy, please review our
                  Privacy Policy.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input className="btn full-width" type="submit" value="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default JobSubmitForm