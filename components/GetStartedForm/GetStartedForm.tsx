import React from "react"

// import "../styles/partials/_getstarted-form.scss"
// import "../styles/partials/pages/_contact.scss"
import Option from "../Option"
import Select from "../Select"
import Checkbox from "../Checkbox/Checkbox"
import RadioButton from "../RadioButton"

interface Props {
  showForm: boolean
}

const GetStartedForm: React.FC<Props> = props => {
  return (
    <>
      <div className="getstarted-form" aria-label="Contact MindTrust">
        <div className="getstarted-form__card">
          <form className="getstarted-form">
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
                <label htmlFor="phone" className="label phone">
                  Phone number
                </label>
                <input type="tel" id="phone" placeholder="" className="input phone" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <label htmlFor="companyName" className="label company">
                  Company name <span className="error-message">*</span>
                </label>
                <input type="text" id="companyName" placeholder="" className="input validate company" />
                <span className="error-message">Please enter a value</span>
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
                <p>
                  By submitting this form you agree to MindTrust's{" "}
                  <a href="https://mindtrust.com/privacy-policy/" rel="noopener">
                    Privacy Policy
                  </a>
                  , and you consent to receive marketing communications from MindTrust.
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

export default GetStartedForm
