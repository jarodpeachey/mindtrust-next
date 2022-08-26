;(function () {
  // SLIDER ELEMENTS
  const slides = document.querySelectorAll(".talent-carousel__slide")
  const sliderMask = document.querySelector(".talent-carousel__mask")
  const sliderTrack = document.querySelector(".talent-carousel__track")
  const prev = document.querySelector(".talent-carousel__control--prev")
  const next = document.querySelector(".talent-carousel__control--next")

  // EVENT LISTENERS
  typeof next !== null && next.addEventListener("click", nextStep)
  typeof prev !== null && prev.addEventListener("click", previousStep)

  // SLIDES TO SHOW FOR DIFFERENT SCREEN SIZES
  let slidesToShow = 2

  if (window.innerWidth > 576) {
    slidesToShow = 3
  } else if (window.innerWidth > 769) {
    slidesToShow = 4
  } else if (window.innerWidth > 992) {
    slidesToShow = 5
  } else if (window.innerWidth > 1400) {
    slidesToShow = 7
  }

  // ARRAY OF SLIDES IN ORDER (INDEX)
  let totalSlides = []

  // BUSY VARIABLE
  let busy = false

  // ADD LEFT POSITION TO ALL SLIDES
  for (let i = 0; i < slides.length; i++) {
    totalSlides.push(i)
    slides[i].style.left = "0px"
    slides[i].style.transform = "translateX(0px)"
  }

  function updateSlidesToShow(direction) {
    // GET TRANSLATE OF A MIDDLE SLIDE
    const slideTranslate = parseFloat(slides[6].style.transform.replace("translateX(", "").replace("px)", "")) || 0

    // CHECK IF THE SLIDE IS ONE POSITION TO THE RIGHT OF ORIGINAL INDEX
    const isAfterOriginalIndex =
      slideTranslate !== 0 && parseFloat(slides[6].style.left, 10) !== 0
        ? slideTranslate - Math.abs(parseFloat(slides[6].style.left, 10)) === 200 ||
          Math.abs(parseFloat(slides[6].style.left, 10)) - Math.abs(slideTranslate) === 200
        : slideTranslate - parseFloat(slides[6].style.left, 10) === -200

    // CHECK IF SLIDE IS ONE POSITION TO THE LEFT OF ORIGINAL INDEX
    const isBeforeOriginalIndex =
      Math.abs(slideTranslate) - parseFloat(slides[6].style.left, 10) === 200 && Math.abs(parseFloat(slides[6].style.left, 10)) !== 0

    // RESET ALL TO 0 IF SLIDES ARE 1 INDEX AWAY FROM ORIGINAL INDEX
    if (direction === "forwards" && isAfterOriginalIndex) {
      slides.forEach((slide, index) => {
        if (index === totalSlides[0]) {
          setTimeout(() => {
            slide.style.transition = "none"
            slide.style.left = "0px"
            slide.style.transform = "translateX(0px)"
          }, 310)
        } else {
          slide.style.transition = ".4s ease-in-out"
          slide.style.left = "0px"
          slide.style.transform = "translateX(0px)"
        }
      })

      // SHIFT INDEXES ARRAY FIRST ITEM TO END
      totalSlides.push(totalSlides.shift())
    } else if (direction === "backwards" && isBeforeOriginalIndex) {
      slides.forEach((slide, index) => {
        if (index === totalSlides[totalSlides.length - 1]) {
          setTimeout(() => {
            slide.style.transition = "none"
            slide.style.left = "0px"
            slide.style.transform = "translateX(0px)"
          }, 310)
        } else {
          slide.style.transition = ".4s ease-in-out"
          slide.style.left = "0px"
          slide.style.transform = "translateX(0px)"
        }
      })

      // SHIFT INDEXES ARRAY LAST ITEM TO START
      totalSlides.unshift(totalSlides.pop())
    } else {
      if (direction === "forwards") {
        slides.forEach((slide, index) => {
          // ADD TRANSITION
          slide.style.transition = ".4s ease-in-out"

          // GET CURRENT TRANSLATION
          const currentTranslate = parseFloat(slide.style.transform.replace("translateX(", "").replace("px)", "")) || 0

          // MOVE ALL SLIDES LEFT
          slide.style.left = `${parseFloat(slide.style.left, 10) - slide.clientWidth}px`

          // MOVE FIRST SLIDE TO END
          if (index === totalSlides[0]) {
            setTimeout(() => {
              // SET TRANSITION TO NONE
              slide.style.transition = "none"

              // SET NEW TRANSFORM
              if (currentTranslate !== 0) {
                slide.style.transform = `translateX(
                  ${slide.clientWidth * slides.length + currentTranslate}px
                )`
              } else {
                slide.style.transform = `translateX(
                  ${slide.clientWidth * slides.length}px
                )`
              }
            }, 310)
          }
        })

        // SHIFT INDEXES ARRAY FIRST ITEM TO END
        totalSlides.push(totalSlides.shift())
      } else if (direction === "backwards") {
        // TRANSFORM EACH SLIDE LEFT
        slides.forEach((slide, index) => {
          // ADD TRANSITION
          slide.style.transition = ".4s ease-in-out"

          // GET CURRENT TRANSLATION
          const currentTranslate = parseFloat(slide.style.transform.replace("translateX(", "").replace("px)", "")) || 0

          // MOVE ALL SLIDES LEFT
          slide.style.left =
            Math.abs(parseFloat(slide.style.left, 10)) === 0 ? `${slide.clientWidth}px` : `${parseFloat(slide.style.left, 10) + slide.clientWidth}px`

          // MOVE LAST SLIDE TO START
          if (index === totalSlides[totalSlides.length - 1]) {
            setTimeout(() => {
              // SET TRANSITION TO NONE
              slide.style.transition = "none"

              // SET NEW TRANSFORM
              if (currentTranslate === 0) {
                slide.style.transform = `translateX(
                  -${slide.clientWidth * slides.length}px
                )`
              } else {
                slide.style.transform = `translateX(
                  ${currentTranslate - slide.clientWidth * slides.length}px
                )`
              }
            }, 310)
          }
        })

        // SHIFT INDEXES ARRAY LAST ITEM TO START
        totalSlides.unshift(totalSlides.pop())
      }
    }
  }

  function nextStep(e) {
    e.preventDefault()

    updateSlidesToShow("forwards")

    next.removeEventListener("click", nextStep)

    setTimeout(() => {
      next.addEventListener("click", nextStep)
    }, 310)
  }

  function previousStep(e) {
    e.preventDefault()

    updateSlidesToShow("backwards")

    prev.removeEventListener("click", previousStep)

    setTimeout(() => {
      prev.addEventListener("click", previousStep)
    }, 310)
  }
})()
