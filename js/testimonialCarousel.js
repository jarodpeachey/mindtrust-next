;(function () {
  // SLIDER ELEMENTS
  const slides = document.querySelectorAll(".testimonial-carousel__slide")
  const sliderScroll = document.querySelector(".testimonial-carousel__scroll")
  const sliderTrack = document.querySelector(".testimonial-carousel__track")
  const arrows = document.querySelector(".testimonial-carousel--arrows")
  const prev = document.querySelector(".testimonial-carousel__control--prev")
  const next = document.querySelector(".testimonial-carousel__control--next")

  // EVENT LISTENERS
  typeof next !== null && next.addEventListener("click", nextStep)
  typeof prev !== null && prev.addEventListener("click", previousStep)
  typeof sliderScroll !== null && sliderScroll.addEventListener("scroll", onScroll)

  // SLIDE TO NAVIGATE TO ON CLICK
  let nextSlide = slides[1]
  let previousSlide = null

  // SET WIDTH OF TRACK SO SLIDES LINE UP WITH ARROWS
  sliderTrack.style.width = `${
    slides.length * (slides[0].clientWidth + 24) + arrows.clientWidth + arrows.getBoundingClientRect().x - (slides[0].clientWidth + 12)
  }px`

  function updateSlidesToShow(direction) {
    if (direction === "forwards" && nextSlide) {
      // MOVE THE SCROLL TO THE NEXT SLIDE
      sliderScroll.scrollLeft = nextSlide.offsetLeft - 12
    } else if (direction === "backwards" && previousSlide) {
      // MOVE THE SCROLL TO THE LAST SLIDE
      sliderScroll.scrollLeft = previousSlide.offsetLeft - 12
    }
  }

  function onScroll() {
    // SET NEXT AND PREVIOUS SLIDES
    nextSlide = getClosestForwardItem()
    previousSlide = getClosestBackwardItem()
  }

  function getClosestForwardItem() {
    // VARIABLE INIT
    let closestItem = null
    let lowestOffsetLeft = 9999999

    slides.forEach(slide => {
      // IF SLIDE IS CLOSER TO THE ARROWS THAN THE OTHER SLIDES
      if (
        slide.getBoundingClientRect().x - arrows.getBoundingClientRect().x < lowestOffsetLeft &&
        slide.getBoundingClientRect().x - arrows.getBoundingClientRect().x > 4
      ) {
        lowestOffsetLeft = slide.getBoundingClientRect().x - arrows.getBoundingClientRect().x
        closestItem = slide
      }
    })

    return closestItem
  }

  function getClosestBackwardItem() {
    let closestItem = null
    let lowestOffsetLeft = 9999999

    slides.forEach(slide => {
      // IF SLIDE IS CLOSER TO THE ARROWS THAN THE OTHER SLIDES
      if (
        slide.getBoundingClientRect().x - arrows.getBoundingClientRect().x < lowestOffsetLeft &&
        slide.getBoundingClientRect().x - arrows.getBoundingClientRect().x < 0
      ) {
        lowestOffsetLeft = Math.abs(slide.getBoundingClientRect().x - arrows.getBoundingClientRect().x)
        closestItem = slide
      }
    })

    return closestItem
  }

  function nextStep(e) {
    e.preventDefault()

    // UPDATE SLIDES
    updateSlidesToShow("forwards")

    // PREVENT DOUBLE CLICKS
    next.removeEventListener("click", nextStep)

    setTimeout(() => {
      next.addEventListener("click", nextStep)
    }, 310)
  }

  function previousStep(e) {
    e.preventDefault()

    // UPDATE SLIDES
    updateSlidesToShow("backwards")

    // PREVENT DOUBLE CLICKS
    prev.removeEventListener("click", previousStep)

    setTimeout(() => {
      prev.addEventListener("click", previousStep)
    }, 310)
  }
})()
