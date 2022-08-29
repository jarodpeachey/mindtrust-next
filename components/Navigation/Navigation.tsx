import React from "react"
import styles from "./Navigation.module.scss"
import SubMenu from "./SubMenu"
import { BRIDGE_APP_URL } from "../config"

const Navigation = class extends React.Component {
  render() {
    return (
      <nav role="navigation" aria-label="Main" className={styles.nav}>
        <div className="container container--wide">
          <div className={styles.menu__wrapper}>
            <div className={styles.logo} id="logo">
              <a href="/" aria-label="MindTrust Homepage">
                <svg width="174" height="41" viewBox="0 0 174 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="mindtrust-text">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M53.3529 13.7065C53.2518 13.5992 53.1191 13.5455 52.958 13.5455C52.7351 13.5455 52.5658 13.6396 52.4516 13.8302L46.8962 24.965L41.2751 13.8312C41.1861 13.6418 41.0156 13.5455 40.7682 13.5455C40.6078 13.5455 40.4727 13.5992 40.3662 13.7053C40.2597 13.8115 40.2063 13.9472 40.2063 14.1083V26.3073C40.2063 26.4694 40.2597 26.6051 40.3662 26.7113C40.4727 26.8175 40.6078 26.871 40.7682 26.871C40.9282 26.871 41.0636 26.8175 41.1713 26.7113C41.2773 26.6039 41.3309 26.4682 41.3309 26.3073V16.3262L46.3407 26.351C46.463 26.5832 46.6389 26.7015 46.8634 26.7015C47.0994 26.7015 47.2632 26.6116 47.3522 26.4344L52.3791 16.1774V26.3073C52.3791 26.4694 52.4358 26.6061 52.5484 26.7123C52.6597 26.8175 52.798 26.871 52.958 26.871C53.1191 26.871 53.2518 26.8175 53.3534 26.7101C53.4529 26.6039 53.5031 26.4682 53.5031 26.3073V14.1083C53.5031 13.9484 53.4529 13.8127 53.3534 13.7065H53.3529Z"
                      fill="#1A1919"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M60.7069 13.5455C60.5463 13.5455 60.4114 13.5992 60.3049 13.7053C60.1984 13.8115 60.1449 13.9472 60.1449 14.1083V26.3073C60.1449 26.4694 60.1984 26.6051 60.3049 26.7113C60.4114 26.8175 60.5463 26.871 60.7069 26.871C60.867 26.871 61.0025 26.8175 61.11 26.7113C61.216 26.6039 61.2696 26.4682 61.2696 26.3073V14.1083C61.2696 13.9472 61.216 13.8127 61.1095 13.7053C61.0025 13.5992 60.867 13.5455 60.7069 13.5455Z"
                      fill="#1A1919"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M77.9445 13.5455C77.7839 13.5455 77.649 13.5992 77.5424 13.7053H77.5419C77.436 13.8127 77.3824 13.9472 77.3824 14.1083V24.7887L68.903 13.7327C68.7905 13.6078 68.6463 13.5455 68.4732 13.5455C68.3126 13.5455 68.1777 13.5992 68.0712 13.7053C67.9647 13.8115 67.9112 13.9472 67.9112 14.1083V26.3073C67.9112 26.4694 67.9647 26.6051 68.0712 26.7113C68.1777 26.8175 68.3126 26.871 68.4732 26.871C68.6332 26.871 68.7686 26.8175 68.8763 26.7113C68.9823 26.6039 69.0357 26.4682 69.0357 26.3073V15.6278L77.5309 26.7003C77.6316 26.8141 77.7708 26.871 77.9445 26.871C78.0931 26.871 78.2258 26.8175 78.3384 26.7123C78.4502 26.605 78.507 26.4694 78.507 26.3073V14.1083C78.507 13.9472 78.4502 13.8115 78.3377 13.7043C78.2258 13.5992 78.0931 13.5455 77.9445 13.5455Z"
                      fill="#1A1919"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M94.2821 20.1995C94.2821 21.2679 94.0429 22.2446 93.5709 23.0995C93.0994 23.9557 92.4391 24.6344 91.6083 25.1172C90.7769 25.6001 89.8151 25.8454 88.7495 25.8454H86.2729V14.5702H88.7495C89.8158 14.5702 90.7776 14.8154 91.6083 15.2994C92.4391 15.7822 93.0994 16.4577 93.5709 17.3083C94.0429 18.1578 94.2821 19.1309 94.2821 20.1995ZM92.1873 14.3983C91.1807 13.8324 90.0237 13.5455 88.7495 13.5455H85.7102C85.5503 13.5455 85.4153 13.5959 85.3095 13.6955C85.2023 13.7962 85.1484 13.9352 85.1484 14.1083V26.3073C85.1484 26.4694 85.2018 26.6051 85.3083 26.7113C85.4148 26.8175 85.5497 26.871 85.7102 26.871H88.7495C90.0261 26.871 91.1827 26.5842 92.1873 26.0182C93.1928 25.4511 93.9898 24.6531 94.555 23.6448C95.1204 22.6365 95.4066 21.477 95.4066 20.1995C95.4066 18.9219 95.1204 17.7659 94.555 16.763C93.9898 15.7601 93.1935 14.9654 92.1873 14.3983Z"
                      fill="#1A1919"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M108.992 13.5455H99.436C99.2859 13.5455 99.1612 13.5937 99.0673 13.6889C98.9723 13.783 98.9247 13.908 98.9247 14.0578C98.9247 14.2078 98.9723 14.3327 99.0668 14.4268C99.1612 14.522 99.2859 14.5702 99.436 14.5702H103.652V26.3073C103.652 26.4682 103.705 26.6039 103.812 26.7113C103.918 26.8175 104.054 26.871 104.214 26.871C104.375 26.871 104.51 26.8175 104.617 26.7113C104.723 26.6039 104.776 26.4682 104.776 26.3073V14.5702H108.992C109.143 14.5702 109.267 14.522 109.36 14.4268C109.455 14.3315 109.503 14.2078 109.503 14.0578C109.503 13.908 109.455 13.7842 109.36 13.6889C109.267 13.5937 109.143 13.5455 108.992 13.5455Z"
                      fill="#1A1919"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M121.242 19.1047C120.975 19.5439 120.599 19.8898 120.126 20.1327C119.651 20.3758 119.102 20.4995 118.497 20.4995H115.835V14.672H118.497C119.103 14.672 119.652 14.7979 120.125 15.0464C120.599 15.2948 120.975 15.6475 121.242 16.0931C121.512 16.5375 121.649 17.0487 121.649 17.6116C121.649 18.1632 121.512 18.6657 121.242 19.1047ZM119.968 21.4169C120.809 21.1629 121.49 20.6986 121.994 20.0386C122.511 19.3621 122.773 18.5453 122.773 17.6116C122.773 16.8265 122.589 16.1171 122.226 15.5019C121.862 14.8866 121.349 14.4017 120.701 14.0589C120.055 13.7184 119.313 13.5455 118.497 13.5455H115.272C115.112 13.5455 114.977 13.5959 114.871 13.6955C114.764 13.7962 114.71 13.9352 114.71 14.1083V26.3073C114.71 26.4682 114.764 26.6051 114.87 26.7113C114.976 26.8175 115.111 26.871 115.272 26.871C115.444 26.871 115.583 26.8175 115.685 26.7101C115.785 26.6029 115.835 26.4672 115.835 26.3073V21.626H118.77L121.861 26.5744C121.92 26.6707 121.989 26.7451 122.062 26.7932C122.138 26.8448 122.24 26.871 122.363 26.871C122.554 26.871 122.704 26.834 122.808 26.7594C122.919 26.6806 122.976 26.5689 122.976 26.4266C122.976 26.3138 122.928 26.1738 122.832 26.0073L119.968 21.4169Z"
                      fill="#1A1919"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M138.047 13.5455C137.888 13.5455 137.752 13.5959 137.646 13.6955C137.539 13.7962 137.486 13.9352 137.486 14.1083V22.5006C137.486 23.1739 137.312 23.784 136.971 24.3149C136.628 24.8456 136.15 25.2661 135.549 25.5639C134.947 25.8627 134.248 26.0149 133.472 26.0149C132.696 26.0149 131.997 25.8627 131.395 25.5639C130.795 25.2672 130.32 24.8468 129.982 24.3159C129.646 23.7848 129.476 23.1751 129.476 22.5006V14.1083C129.476 13.9364 129.425 13.7972 129.324 13.6965C129.225 13.5959 129.086 13.5455 128.913 13.5455C128.754 13.5455 128.618 13.5959 128.512 13.6955C128.405 13.7962 128.352 13.9352 128.352 14.1083V22.5006C128.352 23.3995 128.57 24.2097 129.001 24.9069C129.432 25.6067 130.045 26.1607 130.822 26.5525C131.596 26.9434 132.488 27.1415 133.472 27.1415C134.457 27.1415 135.349 26.9434 136.122 26.5525C136.898 26.1617 137.514 25.6077 137.951 24.9069C138.388 24.2087 138.61 23.3995 138.61 22.5006V14.1083C138.61 13.9364 138.558 13.7972 138.458 13.6965C138.358 13.5959 138.22 13.5455 138.047 13.5455Z"
                      fill="#1A1919"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M149.317 19.2976C148.252 19.1214 147.454 18.8182 146.946 18.3977C146.444 17.9818 146.191 17.4606 146.191 16.8497C146.191 16.1162 146.448 15.5359 146.955 15.1255C147.466 14.7126 148.189 14.5035 149.105 14.5035C150.341 14.5035 151.297 14.9909 151.945 15.9498C152.07 16.1348 152.244 16.2289 152.466 16.2289C152.567 16.2289 152.641 16.2158 152.693 16.1895C152.792 16.1402 152.871 16.0736 152.925 15.9936C152.983 15.9115 153.012 15.8184 153.012 15.7165C153.012 15.6071 152.987 15.5065 152.936 15.4167C152.605 14.8584 152.088 14.3732 151.396 13.9758C150.702 13.5774 149.931 13.3759 149.105 13.3759C148.315 13.3759 147.605 13.5173 146.997 13.7954C146.387 14.0767 145.908 14.4763 145.573 14.9831C145.236 15.4921 145.066 16.0865 145.066 16.7479C145.066 17.6741 145.433 18.4711 146.155 19.116C146.874 19.7585 147.875 20.1756 149.132 20.3573C150.185 20.5019 150.99 20.8239 151.524 21.3163C152.054 21.8048 152.325 22.4308 152.325 23.1775C152.325 24.0479 152.049 24.7288 151.509 25.1997C150.964 25.6735 150.208 25.9134 149.258 25.9134C148.425 25.9134 147.702 25.759 147.113 25.4535C146.525 25.1503 146.075 24.7177 145.779 24.1695C145.668 23.9352 145.487 23.8158 145.24 23.8158C145.068 23.8158 144.927 23.8661 144.821 23.9668C144.714 24.0675 144.661 24.1946 144.661 24.3456C144.661 24.4223 144.679 24.4989 144.716 24.5733C145.102 25.3352 145.695 25.944 146.478 26.383C147.262 26.8199 148.196 27.0409 149.258 27.0409C150.082 27.0409 150.822 26.8855 151.451 26.5778C152.083 26.2703 152.58 25.8191 152.926 25.2367C153.274 24.6543 153.45 23.9613 153.45 23.1775C153.45 22.1288 153.114 21.2705 152.454 20.6244C151.796 19.9829 150.741 19.5363 149.317 19.2976Z"
                      fill="#1A1919"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M167.827 13.6889C167.731 13.5937 167.607 13.5455 167.457 13.5455H157.901C157.752 13.5455 157.628 13.5937 157.532 13.6889C157.438 13.783 157.391 13.908 157.391 14.0578C157.391 14.2078 157.438 14.3327 157.532 14.4268C157.628 14.522 157.752 14.5702 157.901 14.5702H162.117V26.3073C162.117 26.4682 162.171 26.6039 162.277 26.7113C162.385 26.8175 162.519 26.871 162.68 26.871C162.84 26.871 162.976 26.8175 163.082 26.7113C163.187 26.6039 163.241 26.4682 163.241 26.3073V14.5702H167.457C167.607 14.5702 167.731 14.522 167.827 14.4268C167.921 14.3315 167.969 14.2078 167.969 14.0578C167.969 13.908 167.921 13.7842 167.827 13.6889Z"
                      fill="#1A1919"
                    />
                  </g>
                  <g id="mindtrust-icon">
                    <path
                      id="mindtrust-center-shape"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.87728 17.3399L0 23.0541L9.87761 28.7649L19.7519 23.0541L29.6278 17.3399L19.7517 11.6255L9.87728 17.3399Z"
                      fill="#9E9F9E"
                    />
                    <path
                      id="mindtrust-shape-1"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.87724 17.3398L19.7517 11.6255L19.7518 11.6256V0.197266L9.87724 17.3398Z"
                      fill="#1A1919"
                    />
                    <path
                      id="mindtrust-shape-2"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.7518 0.197266V11.6256L29.6277 17.3398L19.7518 0.197266Z"
                      fill="#5F605F"
                    />
                    <path
                      id="mindtrust-shape-3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.7505 23.0543L9.87605 28.7685L9.87589 28.7683V40.1975L19.7505 23.0543Z"
                      fill="#1A1919"
                    />
                    <path id="mindtrust-shape-4" fillRule="evenodd" clipRule="evenodd" d="M9.87594 40.1975V28.7683L0 23.0543L9.87594 40.1975Z" fill="#5F605F" />
                  </g>
                  <g id="mindtrust-copyright">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M172.582 14.1031C172.642 14.1031 172.696 14.091 172.743 14.0667C172.79 14.0425 172.827 14.0085 172.854 13.9644C172.881 13.9205 172.894 13.8708 172.894 13.8159C172.894 13.7597 172.881 13.7094 172.854 13.6648C172.827 13.6203 172.79 13.5857 172.743 13.5609C172.696 13.5362 172.642 13.5237 172.582 13.5237H172.317V14.1031H172.582ZM173.014 14.6758C173.014 14.6879 173.009 14.6973 172.999 14.7039C172.99 14.7104 172.977 14.7138 172.958 14.7138C172.948 14.7138 172.938 14.7116 172.931 14.7072C172.926 14.7027 172.92 14.6961 172.915 14.6874L172.611 14.2021H172.317V14.6643C172.317 14.6786 172.312 14.6904 172.303 14.6998C172.295 14.7091 172.283 14.7138 172.266 14.7138C172.253 14.7138 172.241 14.7091 172.231 14.6998C172.223 14.6904 172.217 14.6786 172.217 14.6643V13.4742C172.217 13.4587 172.223 13.4466 172.231 13.4379C172.241 13.4291 172.253 13.4246 172.266 13.4246H172.582C172.661 13.4246 172.731 13.4412 172.794 13.4742C172.856 13.5072 172.904 13.5535 172.94 13.6129C172.975 13.6723 172.994 13.74 172.994 13.8159C172.994 13.9061 172.968 13.9839 172.918 14.0494C172.868 14.1149 172.8 14.1598 172.716 14.1839L173 14.6379C173.009 14.6532 173.014 14.6658 173.014 14.6758Z"
                      fill="#1A1919"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M172.558 12.8824C171.907 12.8824 171.376 13.4147 171.376 14.0688C171.376 14.7228 171.907 15.2549 172.558 15.2549C173.212 15.2549 173.743 14.7228 173.743 14.0688C173.743 13.4147 173.212 12.8824 172.558 12.8824ZM172.558 15.3313C171.865 15.3313 171.299 14.7649 171.299 14.0688C171.299 13.3726 171.865 12.8062 172.558 12.8062C173.254 12.8062 173.818 13.3726 173.818 14.0688C173.818 14.7649 173.254 15.3313 172.558 15.3313Z"
                      fill="#1A1919"
                    />
                  </g>
                </svg>{" "}
              </a>
            </div>
            <div className={styles["mobile-menu__toggle"]}>
              <div className={styles["mobile-menu__toggle--mask"]}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles["navigation-menu"]}>
              <ul className={styles.menu__main}>
                <li className={styles["has-submenu menu__item"]} id="menu__item--solutions">
                  <span className={`${styles.accent} ${styles.menu__item}`}>Solutions</span>
                  <div className={styles.menu__submenu}>
                    <div className={styles["menu__submenu--wrapper"]}>
                      <div className="row">
                        <div className="col-lg-6">
                          <a href="/strategy-teams" className={styles.submenu__item}>
                            <img loading="lazy" width="34" height="34" src="/media/img/icons/silos/navicon--strategy.svg" alt="Strategy" />
                            <div className={styles["submenu__item--content"]}>
                              <p className={styles["submenu__item--title"]}>Strategy</p>
                              <p>Top business experts for digital transformation, data science, fundraising, finance, product and project management.</p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-6">
                          <a href="/design-teams" className={styles.submenu__item}>
                            <img loading="lazy" width="34" height="34" src="/media/img/icons/silos/navicon--design.svg" alt="Design" />
                            <div className={styles["submenu__item--content"]}>
                              <p className={styles["submenu__item--title"]}>Design</p>
                              <p>Award winning designers deliver amazing brand, creative, UI, UX, prototypes, and interactive digital experiences.</p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-6">
                          <a href="/development-teams" className={styles.submenu__item}>
                            <img loading="lazy" width="34" height="34" src="/media/img/icons/silos/navicon--development.svg" alt="Development" />
                            <div className={styles["submenu__item--content"]}>
                              <p className={styles["submenu__item--title"]}>Development</p>
                              <p>
                                Expert software architects and engineers for full-stack web, mobile apps, and emerging technologies like blockchain, AI, and XR.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-6">
                          <a href="/marketing-teams" className={styles.submenu__item}>
                            <img loading="lazy" width="34" height="34" src="/media/img/icons/silos/navicon--marketing.svg" alt="Marketing" />
                            <div className={styles["submenu__item--content"]}>
                              <p className={styles["submenu__item--title"]}>Marketing</p>
                              <p>
                                Brilliant marketing insight professionals, digital strategists, and growth hackers deliver inbound, search, social, and paid ad
                                results.{" "}
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-6">
                          <a href="/production-teams" className={styles.submenu__item}>
                            <img loading="lazy" width="34" height="34" src="/media/img/icons/silos/navicon--production.svg" alt="Production" />
                            <div className={styles["submenu__item--content"]}>
                              <p className={styles["submenu__item--title"]}>Production</p>
                              <p>
                                Industry leading artists, illustrators, animators, 3D modelers, video, audio, game design, and AR/VR producers bring it to the
                                next level.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-6">
                          <a href="/technology-teams" className={styles.submenu__item}>
                            <img loading="lazy" width="34" height="34" src="/media/img/icons/silos/navicon--technology.svg" alt="Technology" />
                            <div className={styles["submenu__item--content"]}>
                              <p className={styles["submenu__item--title"]}>Technology</p>
                              <p>
                                Top technologists and cloud architects for infrastructure, DevOps, and CI/CD across AWS, GCP, Azure, and distributed Web 3.0
                                platforms.
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/why-mindtrust" className={`${styles.accent} ${styles.menu__item}`}>
                    Why MindTrust
                  </a>
                </li>
                {/* <li>
                  <a href="/blog" className={styles.accent menu__item}>
                    Blog
                  </a>
                </li> */}
                <li>
                  <a href="/contact" className={`${styles.accent} ${styles.menu__item}`}>
                    Contact
                  </a>
                </li>
              </ul>
              <div className={styles.menu__cta}>
                <a className={styles.accent} href="tel:844646387878">
                  844-MINDTRUST
                </a>
                <a href="/request-project/1" className="btn small">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation