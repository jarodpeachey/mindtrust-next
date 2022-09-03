import React from "react"
// import "../styles/partials/_footer.scss"
import styles from "./SiloFooter.module.scss"

interface FooterTalent {
  title: string
  url: string
}

interface Props {
  showForm?: boolean
  silo: string
  footerTalents: FooterTalent[]
}

const SiloFooter: React.FC<Props> = props => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__main}>
            <div className={`row ${styles.footer__navigation}`}>
              <div className="col-lg-12 col-xl-10">
                <div className="row">
                  <div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div className={`h4 ${styles.footerHeading}`}>{props.silo} Talent</div>
                    <div className={styles["tablet-flex"]}>
                      <div>
                        {props.footerTalents.map((item, index) => (
                          <a key={index} href={item.url}>
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div className={`h4 ${styles.footerHeading}`}>Solutions</div>
                    <div className={styles["tablet-flex"]}>
                      <div>
                        <a href="/strategy-teams">Strategy Teams</a>
                        <a href="/design-teams">Design Teams</a>
                        <a href="/development-teams">Development Teams</a>
                        <a href="/marketing-teams">Marketing Teams</a>
                        <a href="/production-teams">Production Teams</a>
                        <a href="/technology-teams">Technology Teams</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 footer-column">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className={`h4 ${styles.footerHeading}`}>About</div>
                        <a href="/why-mindtrust">Why MindTrust</a>
                        <a href="/news">News</a>
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
                    <img
                      loading="lazy"
                      width="21"
                      height="21"
                      src="/media/img/icons/icon--facebook.svg"
                      alt="Facebook"
                      className={styles["social__button--icon"]}
                    />
                  </a>
                  <a href="https://twitter.com/MindTrustHQ" target="_blank" rel="noopener" className={styles.social__button}>
                    <img
                      loading="lazy"
                      width="21"
                      height="21"
                      src="/media/img/icons/icon--twitter.svg"
                      alt="Twitter"
                      className={styles["social__button--icon"]}
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/mindtrust" target="_blank" rel="noopener" className={styles.social__button}>
                    <img
                      loading="lazy"
                      width="21"
                      height="21"
                      src="/media/img/icons/icon--linkedin.svg"
                      alt="Linkedin"
                      className={styles["social__button--icon"]}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__end}>
          <div className="container">
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-md-between">
              <span>&copy; Copyright {new Date().getFullYear()} MindTrust</span>
              <div className="d-flex flex-column align-items-center flex-sm-row">
                <a href="/privacy-policy">Privacy policy</a>
                <a href="/cookie-policy">Cookie policy</a>
                <a href="/website-terms">Terms of use</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default SiloFooter
