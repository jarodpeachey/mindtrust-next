;(function () {
  const toggleButtons = document.querySelectorAll(".toggle__button")
  const toggleSlide = document.querySelector(".toggle__right")
  const doughnut = document.querySelector(".doughnut")
  const number = document.querySelector(".toggle-animation__number")
  let filled = 0
  let currentIndex = 0
  let previousSlide = null
  let firstTime = true
  let animationTimeout
  let scrolled = false

  if (toggleButtons[0].getBoundingClientRect().top < window.innerHeight && scrolled === false) {
    scrolled = true
    toggleSlide.classList.add("active")
    toggleSlide.classList.add("from-start")
    toggleSlide.classList.add("one")
    toggleButtons[0].classList.add("active")
    toggleButtons[0].classList.add("timer")

    toggleAnimation(document.getElementById(`toggle__button-${currentIndex}`))
  }

  document.addEventListener("scroll", e => {
    if (toggleButtons[0].getBoundingClientRect().top < window.innerHeight && scrolled === false) {
      scrolled = true
      toggleSlide.classList.add("active")
      toggleSlide.classList.add("from-start")
      toggleSlide.classList.add("one")
      toggleButtons[0].classList.add("active")
      toggleButtons[0].classList.add("timer")

      toggleAnimation(document.getElementById(`toggle__button-${currentIndex}`))
    }
  })

  toggleButtons.forEach(toggleButton => {
    toggleButton.addEventListener("click", () => toggleAnimation(toggleButton, true))
  })

  function toggleAnimation(toggleButton, click = false) {
    const toggleAnimationFunction = () => {
      currentIndex = parseInt(toggleButton.id.substring(toggleButton.id.length - 1, toggleButton.id.length))
      clearTimeout(animationTimeout)

      if (previousSlide === 0) {
        toggleSlide.classList.add("from-one")
        toggleSlide.classList.remove("from-two")
        toggleSlide.classList.remove("from-three")
        toggleSlide.classList.remove("from-start")
      } else if (previousSlide === 1) {
        toggleSlide.classList.add("from-two")
        toggleSlide.classList.remove("from-one")
        toggleSlide.classList.remove("from-three")
        toggleSlide.classList.remove("from-start")
      } else if (previousSlide === 2) {
        toggleSlide.classList.add("from-three")
        toggleSlide.classList.remove("from-one")
        toggleSlide.classList.remove("from-two")
        toggleSlide.classList.remove("from-start")
      }

      toggleButton.classList.remove("timer")
      setTimeout(() => {
        toggleButton.classList.add("timer")
      }, 0)

      if (currentIndex === 2) {
        animationTimeout = setTimeout(() => {
          toggleAnimation(document.getElementById(`toggle__button-${currentIndex + 1}`))
          clearTimeout(animationTimeout)
        }, 4000)
      } else {
        animationTimeout = setTimeout(() => {
          toggleAnimation(document.getElementById(`toggle__button-${currentIndex + 1}`))
        }, 4000)
      }

      toggleButtons.forEach((toggleButtonNew, index) => {
        if (index !== currentIndex) {
          toggleButtonNew.classList.remove("active")
        } else {
          toggleButtonNew.classList.remove("active")
          toggleButtonNew.classList.add("active")
        }
      })

      document.getElementById(`toggle__button-${currentIndex}`).classList.add("active")

      if (currentIndex === 1) {
        toggleSlide.classList.add("two")
        toggleSlide.classList.remove("one")
        toggleSlide.classList.remove("three")
      } else if (currentIndex === 2) {
        toggleSlide.classList.add("three")
        toggleSlide.classList.remove("one")
        toggleSlide.classList.remove("two")

        if (firstTime) {
          doughnut.innerHTML = ""
          filled = 0

          var data = [
            {
              fill: 80,
              color: "#008feb",
            },
          ]

          let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")

          svg.setAttribute("width", "100%")
          svg.setAttribute("height", "100%")
          svg.setAttribute("viewBox", "0 0 100 100")

          doughnut.appendChild(svg)

          data.forEach(function (o, i) {
            let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
              startAngle = 125.5,
              radius = 48.5,
              cx = 50,
              cy = 50,
              animationDuration = 3000,
              strokeWidth = 3,
              dashArray = 2 * Math.PI * radius,
              dashOffset = dashArray - (dashArray * o.fill) / 100,
              angle = (filled * 360) / 100 + startAngle,
              currentDuration = (animationDuration * o.fill) / 100,
              delay = (animationDuration * filled) / 100
            circle.setAttribute("r", radius)
            circle.setAttribute("cx", cx)
            circle.setAttribute("cy", cy)
            circle.setAttribute("fill", "transparent")
            circle.setAttribute("stroke", o.color)
            circle.setAttribute("stroke-width", strokeWidth)
            circle.setAttribute("stroke-dasharray", dashArray)
            circle.setAttribute("stroke-dashoffset", dashArray)
            circle.style.transition = "stroke-dashoffset " + currentDuration + "ms cubic-bezier(.22,-0.02,.17,1.01) " + delay + "ms"
            circle.setAttribute("transform", "rotate(" + angle + " " + cx + " " + cy + ")")
            svg.appendChild(circle)
            filled += o.fill

            setTimeout(function () {
              circle.style["stroke-dashoffset"] = dashOffset
            }, 100)
          })

          const numberAnimationDuration = 2000

          const numberFrameDuration = 1000 / 60

          const totalFrames = Math.round(numberAnimationDuration / numberFrameDuration)

          const easeOutQuad = t => t * (2 - t)

          let frame = 0
          const countTo = parseInt(number.getAttribute("data-animate"), 10)

          const counter = setInterval(() => {
            frame++

            const progress = easeOutQuad(frame / totalFrames)

            const currentCount = Math.round(countTo * progress)

            if (parseInt(number.innerHTML, 10) !== currentCount) {
              number.innerHTML = currentCount
            }

            if (frame === totalFrames) {
              clearInterval(counter)
            }
          }, numberFrameDuration)

          // firstTime = false
        }
      } else {
        toggleSlide.classList.add("one")
        toggleSlide.classList.remove("two")
        toggleSlide.classList.remove("three")
      }

      previousSlide = currentIndex
    }

    if (click) {
      const newCurrentIndex = parseInt(toggleButton.id.substring(toggleButton.id.length - 1, toggleButton.id.length))

      if (previousSlide !== newCurrentIndex) {
        toggleAnimationFunction()
      }
    } else {
      toggleAnimationFunction()
    }
  }
})()
