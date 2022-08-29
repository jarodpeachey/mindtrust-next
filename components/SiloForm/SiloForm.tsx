import React from "react"

// import "../styles/partials/_silo-form.scss"
import Option from "../Option"
import Select from "../Select"
import Checkbox from "../Checkbox/Checkbox"
import RadioButton from "../RadioButton"
import { BRIDGE_API_URL } from "../../config"

interface Props {
  category: string
  title?: string
  silo?: string
  skill?: string
}

const SiloForm: React.FC<Props> = props => {
  return (
    <>
      <aside className="silo-form silo-form-container" aria-labelledby="silo-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 mt-animate__fade mt-animate">
              <h2 id="silo-form" className="section-heading display">
                {props.title
                  ? props.title
                  : props.category.toLowerCase() === "strategy"
                  ? "Ready to connect with top business strategists?"
                  : props.category.toLowerCase() === "development"
                  ? "Ready to connect with top developers?"
                  : `Ready to connect with top ${props.category.toLowerCase()} talent?`}
              </h2>
              <p className="section-description">
                Get the {props.category === "production" ? "creative" : props.category} help you need from a team of experts you can trust.
              </p>
              <div className="quote">
                <p className="silo-form__quote">“MindTrust delivers on time, within budget, and goes above and beyond to make our platform a success.”</p>
                <div className="silo-form__flex">
                  <img
                    loading="lazy"
                    className="silo-form__avatar"
                    width="60"
                    height="60"
                    src="https://assets.mindtrust.com/img/testimonials/nicholas-l.jpg?auto=format"
                    alt="Nicholas Longano"
                  />
                  <div className="silo-form__description">
                    <p className="silo-form__name">Nicholas Longano</p>
                    <p className="silo-form__company">CEO & Co-Founder @ Scuti AI</p>
                  </div>
                </div>
                <div className="silo-form__brands">
                  <img loading="lazy" src="/media/img/logos/logos-footer.svg" alt="Brands we've worked with" className="brand" />
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-lg-1 mt-animate mt-animate__slideup">
              <div className="silo-form__card">
                <form className="silo-form" data-api-url={BRIDGE_API_URL}>
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
                      <label htmlFor="email" className="label email">
                        Email <span className="error-message">*</span>
                      </label>
                      <input type="email" id="email" placeholder="" className="input validate email" />
                      <span className="error-message">Please enter a valid email</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="companyName" className="label company">
                        Company <span className="error-message">*</span>
                      </label>
                      <input type="text" id="companyName" placeholder="" className="input validate company" />
                      <span className="error-message">Please enter a value</span>
                    </div>
                  </div>

                  {/* hidden field */}
                  <div className="row" style={{ display: "none" }}>
                    <div className="col-12">
                      <label htmlFor="fromSilo" className="label silo">
                        Silo
                      </label>
                      <input type="text" id="fromSilo" placeholder="" value={props.silo} className="input validate silo" hidden />
                      <span className="error-message">Please enter a silo</span>
                    </div>
                  </div>

                  {/* hidden field */}
                  <div className="row" style={{ display: "none" }}>
                    <div className="col-12">
                      <label htmlFor="skill" className="label skill">
                        Skills Page Title
                      </label>
                      <input type="text" id="skill" placeholder="" value={props.skill} className="input validate skill" hidden />
                      <span className="error-message">Please enter a skill</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <button className="btn full-width" type="submit">
                        Request a Demo
                      </button>
                    </div>
                  </div>
                  <div id="form-message"></div>
                  <div className="row privacy-policy-quote">
                    <div className="col-12">
                      <p>
                        By requesting a demo you agree to MindTrust's <a href="/privacy-policy">Privacy Policy</a>, and you consent to receive marketing
                        communications from MindTrust.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SiloForm
