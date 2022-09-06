import React from "react"
import styles from "./Footer.module.scss"

interface Props {
  showForm: boolean
  silo: string
}

const Footer: React.FC<Props> = props => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__main}>
            <div className={`row ${styles.footer__navigation}`}>
              <div className="col-lg-12 col-xl-10">
                <div className="row">
                  <div className="col-6 col-md-6">
                    <div className={styles.h4}>Solutions</div>
                    <div className={styles["tablet-flex"]}>
                      <div>
                        <a href="/strategy-teams">Strategy Teams</a>
                        <a href="/design-teams">Design Teams</a>
                        <a href="/development-teams">Development Teams</a>
                      </div>
                      <div>
                        <a href="/marketing-teams">Marketing Teams</a>
                        <a href="/production-teams">Production Teams</a>
                        <a href="/technology-teams">Technology Teams</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-lg-5 offset-lg-1 col-xl-6 offset-xl-0">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className={styles.h4}>About</div>
                        <a href="/why-mindtrust">Why MindTrust</a>
                        <a href="/news">News</a>
                        <a href="/careers">Careers</a>
                        <a href="/contact">Contact</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 centered">
                <a href="tel:844646387878" className={styles.footer__phone}>
                  844-MINDTRUST
                </a>

                <div className={styles.footer__logo}>
                  <img loading="lazy" width="174" height="41" src="/media/img/mindtrust-logo--white.svg" alt="MindTrust logo" />
                </div>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/mindtrusthq/" target="_blank" rel="noopener" className={styles.social__button}>
                    <img loading="lazy" width="21" height="21" src="/media/img/icons/icon--facebook.svg" alt="Facebook" className={styles["social__button--icon"]} />
                  </a>
                  <a href="https://twitter.com/MindTrustHQ" target="_blank" rel="noopener" className={styles.social__button}>
                    <img loading="lazy" width="21" height="21" src="/media/img/icons/icon--twitter.svg" alt="Twitter" className={styles["social__button--icon"]} />
                  </a>
                  <a href="https://www.linkedin.com/company/mindtrust" target="_blank" rel="noopener" className={styles.social__button}>
                    <img loading="lazy" width="21" height="21" src="/media/img/icons/icon--linkedin.svg" alt="Linkedin" className={styles["social__button--icon"]} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__end}>
          <div className={`container ${styles.footer__end__container}`}>
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-md-between">
              <span className={styles.footerCopyright}>&copy; Copyright {new Date().getFullYear()} MindTrust</span>
              <div className="d-flex flex-column align-items-center flex-sm-row">
                <a className={styles.footerInfoLink} href="/privacy-policy">Privacy policy</a>
                <a className={styles.footerInfoLink} href="/cookie-policy">Cookie policy</a>
                <a className={styles.footerInfoLink} href="/website-terms">Terms of use</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
