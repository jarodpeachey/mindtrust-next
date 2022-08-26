import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import "../styles/_layout.scss"
import { title } from "process"

interface Props {
  title: string
  bodyClass?: string
  homepage: boolean
  whypage: boolean
  faqpage: boolean
  silopage: boolean
  contactpage: boolean
  description: string
  image: string
  schema: string
  noindex: boolean
}

// function is_mobile() {
//   const MOBILE_USER_AGENT_REGEX = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
//   if (typeof window !== "undefined") {
//     return MOBILE_USER_AGENT_REGEX.test(navigator.userAgent)
//   }
// }

const Head: React.FC<Props> = props => {
  const {
    bodyClass = "",
    homepage = false,
    whypage = false,
    silopage = false,
    faqpage = false,
    contactpage = false,
    title,
    image,
    description,
    schema,
    noindex = false,
  } = props

  const prevImageUrl = "/media/img/mindtrust-default-share-img.jpg"
  const defaultDescription =
    "Plug into the Internet of Talent. MindTrust built the world’s first Teams as a Service (TaaS) platform to give you on-demand access to the top developers, designers, marketers, technologists, and business strategists."

  return (
    <Helmet bodyAttributes={{ class: bodyClass, homepage, faqpage, contactpage }}>
      <html lang="en-US" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={defaultDescription} />
      <title>{props.title}</title>

      <link rel="icon" type="image/svg+xml" href="/media/img/icons/favicon.svg"></link>

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https:/mindtrust.com" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`${prevImageUrl}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:site" content="@MindTrustHQ" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={`${prevImageUrl}`} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {noindex ? <meta name="robots" content="noindex" /> : ""}
      <script type="application/ld+json">{schema}</script>

      <script src={withPrefix("js/sal.js")} type="text/javascript" defer="true" />
      <script src={withPrefix("js/main.js")} type="text/javascript" defer="true" />

      {/* <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap" rel="stylesheet"></link> */}
    </Helmet>
  )
}

export default Head
