;(function () {
  const notBuild = typeof window !== "undefined"
  const isMobileDevice = isMobile()

  addScript("/js/navigation.js")
  addScript("/js/animate.js")
  addScript("/js/select.js")

  let hsScript = "<script></script>"

  console.log("Loading main script")

  if (notBuild && (window.location.pathname === "/request-project/1" || window.location.pathname === "/request-project/1/")) {
    console.log("Loading script!!!")
    addScript("/js/utils/helper.js")
    addScript("/js/utils/clearbitTrack.js")
    addScript("/js/getstartedForm.js")
    addScript("/js/requestProjectOne.js")

    // if ("hbspt" in window) {
    //   window.hbspt.forms.create({ region: "na1", portalId: "441110", formId: "d8bd52a5-f23d-4801-9517-0cd5f818f218", target: ".request-form", onFormSubmit: function($form){setTimeout(() => {window.location.href = "https://meetings.mindtrust.com/meetings/sales-team-demo/web-demo-request"}, 2000)} })
    // }
  }

  if (notBuild && (window.location.pathname === "/request-demo/1" || window.location.pathname === "/request-demo/1/")) {
    console.log("Loading script!!!")

    // if ("hbspt" in window) {
    //   window.hbspt.forms.create({ region: "na1", portalId: "441110", formId: "8c9325cd-179e-4953-b5f6-f66f66ff06ed", target: ".demo-form", onFormSubmit: function($form){setTimeout(() => {window.location.href = "https://meetings.mindtrust.com/meetings/sales-team-demo/web-demo-request"}, 2000)} })
    // }
  }

  if (notBuild && window.location.pathname === "/") {
    addScript("/js/toggle-animation.js", false)
  }

  if (notBuild && window.location.pathname.includes("blog")) {
    addScript("/js/infiniteLoad.js", true)
    addScript("/js/blog.js", true)
    addScript("/js/collapse.js", true)
  }

  if (notBuild && (window.location.pathname === "/" || window.location.pathname === "/why-mindtrust/")) {
    addScript("/js/talentCarousel.js")
    addScript("/js/testimonialCarousel.js")
  }

  if ((notBuild && window.location.pathname.includes("faq")) || window.location.pathname.includes("request-project")) {
    addScript("/js/collapse.js")
    addScript("/js/faq.js")
  }
  if (notBuild && window.location.pathname === "/why-mindtrust/") {
    addScript("/js/whyCollapse.js")
  }

  if (notBuild && window.location.pathname === "/contact/") {
    addScript("/js/utils/helper.js")
    addScript("/js/utils/clearbitTrack.js")
    addScript("/js/contactForm.js")
  }

  if (notBuild && (window.location.pathname.includes("blog") || window.location.pathname.includes("categories"))) {
    addScript("/js/newsletterForm.js")
  }

  if (notBuild && window.location.pathname.includes("news")) {
    addScript("/js/newsInfiniteLoad.js", true)
  }

  if (notBuild && window.location.pathname.includes("join-mindtrust")) {
    addScript("/js/jobSubmitForm.js", true)
    addScript("/js/joinMindtrustOne.js", true)
  }

  if (
    notBuild &&
    (window.location.pathname === "/development-teams/" ||
      window.location.pathname === "/design-teams/" ||
      window.location.pathname === "/strategy-teams/" ||
      window.location.pathname === "/production-teams/" ||
      window.location.pathname === "/marketing-teams/" ||
      window.location.pathname === "/technology-teams/" ||
      window.location.pathname === "/development-teams" ||
      window.location.pathname === "/design-teams" ||
      window.location.pathname === "/strategy-teams" ||
      window.location.pathname === "/production-teams" ||
      window.location.pathname === "/marketing-teams" ||
      window.location.pathname === "/technology-teams")
  ) {
    addScript("/js/utils/assertString.js")
    addScript("/js/utils/isMobilePhone.js")
    addScript("/js/utils/helper.js")
    addScript("/js/utils/clearbitTrack.js")
    addScript("/js/silo-toggle-animation.js", false)
    addScript("/js/siloTeamCards.js")
  }

  if ((notBuild && window.location.pathname === "/development-teams/") || window.location.pathname === "/development-teams") {
    addScript("/js/developmentForm.js")
  }
  if ((notBuild && window.location.pathname === "/design-teams/") || window.location.pathname === "/design-teams") {
    addScript("/js/designForm.js")
  }
  if ((notBuild && window.location.pathname === "/strategy-teams/") || window.location.pathname === "/strategy-teams") {
    addScript("/js/strategyForm.js")
  }
  if ((notBuild && window.location.pathname === "/marketing-teams/") || window.location.pathname === "/marketing-teams") {
    addScript("/js/marketingForm.js")
  }
  if ((notBuild && window.location.pathname === "/production-teams/") || window.location.pathname === "/production-teams") {
    addScript("/js/productionForm.js")
  }
  if ((notBuild && window.location.pathname === "/technology-teams/") || window.location.pathname === "/technology-teams") {
    addScript("/js/technologyForm.js")
  }

  if (
    notBuild &&
    (window.location.pathname.includes("development") ||
      window.location.pathname.includes("design") ||
      window.location.pathname.includes("technology") ||
      window.location.pathname.includes("strategy") ||
      window.location.pathname.includes("marketing") ||
      window.location.pathname.includes("production"))
  ) {
    // addScript("/js/testimonialCarousel.js")
    addScript("/js/collapse.js")
    // addScript("/js/animate.js")
  }

  if (
    notBuild &&
    (window.location.pathname.includes("/development-teams/") ||
      window.location.pathname.includes("/design-teams/") ||
      window.location.pathname.includes("/technology-teams/") ||
      window.location.pathname.includes("/strategy-teams/") ||
      window.location.pathname.includes("/marketing-teams/") ||
      window.location.pathname.includes("/production-teams/"))
  ) {
    addScript("/js/utils/helper.js")
    addScript("/js/slickSlide.js")
    addScript("/js/tertiaryPageForm.js")
  }

  if (notBuild && window.location.pathname === "/") {
    // if (isMobileDevice || (notBuild && window.innerWidth < 768)) {
    //   addWebglGlobeFallback()
    // } else {
    //   addWebglGlobe()
    // }
    addWebglGlobe()
  }

  if (notBuild && window.location.pathname === "/faq/") {
    addScript("/js/collapse.js")
    addScript("/js/faq.js")
  }

  function addScript(url) {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }

  function isMobile() {
    const mobileUserAgentRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    if (typeof window !== "undefined") {
      return mobileUserAgentRegex.test(navigator.userAgent)
    }
  }
  function addWebglGlobeFallback() {
    const element = document.getElementsByClassName("webgl-globe-fallback")[0]
    if (element) {
      element.classList.remove("webgl-element-hidden")
    }
  }
  function addWebglGlobe() {
    const element = document.getElementsByClassName("webgl-globe")[0]
    if (element) {
      element.classList.remove("webgl-element-hidden")
    }
    addScript("/js/webgl_globe/three.bundle.fda87c5a7877e101b399.js")
    addScript("/js/webgl_globe/globe-integration.fda87c5a7877e101b399.js")
  }
})()
