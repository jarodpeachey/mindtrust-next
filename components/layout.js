import Head from "next/head"
import Script from "next/script"
import Image from "next/image"
import Link from "next/link"

const prevImageUrl = "/media/img/mindtrust-default-share-img.jpg"
const defaultDescription =
  "Plug into the Internet of Talent. MindTrust built the world’s first Teams as a Service (TaaS) platform to give you on-demand access to the top developers, designers, marketers, technologists, and business strategists."

export default function Layout(props, { children, home }) {
  console.log(props)
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={defaultDescription} />
        <title>{props.title}</title>

        <link rel="icon" type="image/svg+xml" href="/media/img/icons/favicon.svg"></link>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https:/mindtrust.com" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description || defaultDescription} />
        <meta property="og:image" content={`${prevImageUrl}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content={"summary_large_image"} />
        <meta name="twitter:site" content="@MindTrustHQ" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:image" content={`${prevImageUrl}`} />
        <meta name="twitter:description" content={props.description || defaultDescription} />
        {props.noindex ? <meta name="robots" content="noindex" /> : ""}
        <script type="application/ld+json">{props.schema}</script>

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
        <link rel="stylesheet" type="text/css" href="/js/slick/slick.css" />
        <link rel="stylesheet" type="text/css" href="/js/slick/slick-theme.css" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(w, d, s, i){var f = d.getElementsByTagName(s)[0],j = d.createElement(s);j.async = true;j.src = i+'/bundle.js';f.parentNode.insertBefore(j, f);})(window, document, 'script', 'https://ronaldo.mindtrust.com');",
          }}
        />
      </Head>

      <Script src="/js/sal.js" />
      <Script src="/js/animate.js" />
      <Script src="/js/navigation.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="lazyOnload" />
      <Script src="/js/slick/slick.min.js" strategy='lazyOnLoad' />

      <main>{props.children}</main>
    </>
  )
}
