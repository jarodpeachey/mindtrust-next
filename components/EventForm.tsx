import React from "react"
import { Link, withPrefix } from "gatsby"
import "../styles/partials/_contact-form.scss"
import "../styles/partials/pages/_contact.scss"
import Option from "./Option"
import Select from "./Select"
import Checkbox from "./Checkbox"
import RadioButton from "./RadioButton"

interface Props {
  showForm: boolean
}

const EventForm: React.FC<Props> = props => {
  return (
    <>
      <div className="event-form" aria-label="Contact MindTrust">
        <div className="contact-form__card">
          <img loading="lazy" src="/media/img/icons/icon--mindtrust.svg" alt="MindTrust logo" className="logo" />
          <span className="info">
            Fields marked with a <span className="error-message">*</span> are required
          </span>
          <form className="contact-form">
            <div className="row">
              <div className="col-12">
                <label htmlFor="firstName" className="label first-name">
                  First name <span className="error-message">*</span>
                </label>
                <input type="text" id="firstName" placeholder="" className="input validate first-name" />
                <span className="error-message">Please enter your first name</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="lastName" className="label last-name">
                  Last name <span className="error-message">*</span>
                </label>
                <input type="text" id="lastName" placeholder="" className="input validate last-name" />
                <span className="error-message">Please enter your last name</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="companyName" className="label company">
                  Company name <span className="error-message">*</span>
                </label>
                <input type="text" id="companyName" placeholder="" className="input validate company" />
                <span className="error-message">Please enter a value</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="email" className="label email">
                  Business email <span className="error-message">*</span>
                </label>
                <input type="email" id="email" placeholder="" className="input validate email" />
                <span className="error-message">Please enter a valid email</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="phone" className="label phone">
                  Phone number <span className="error-message">*</span>
                </label>
                <input type="tel" id="phone" placeholder="" className="input validate phone" />
                <span className="error-message">Please enter a valid phone number</span>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input className="btn full-width" type="submit" value="Register" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EventForm
