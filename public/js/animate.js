;(function () {
  const stackAnimateElements = document.querySelectorAll(".stack-animate")
  const donut = document.querySelector(".taas__donut")
  const taasTeamCards = document.querySelectorAll(".taas__team-card")
  const taasTeamCardsParentElement = document.getElementById("taas__wrapper")
  let filled = 0
  let animated = false
  let expandOpen = false
  const number = document.querySelector(".taas-animation__number")
  const expand = document.getElementById("expand")
  const expandWrapper = document.getElementById("expand__wrapper")

  expand &&
    expand.addEventListener("click", e => {
      if (expandOpen) {
        expandWrapper.style.maxHeight = "400px"
        expandOpen = false
        expand.innerHTML = "Show all"
      } else {
        expandWrapper.style.maxHeight = `${expandWrapper.firstElementChild.clientHeight}px`
        expandOpen = true
        expand.innerHTML = "Show less"
      }
    })

  document.addEventListener("scroll", e => {
    stackAnimateElements.forEach(parent => {
      const animateElements = parent.querySelectorAll(".animate")

      if (parent.getBoundingClientRect().top < 600) {
        animateElements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add("active")
          }, (index + 1) * 100)
        })
      }
    })

    if (taasTeamCardsParentElement && taasTeamCardsParentElement.getBoundingClientRect().top < 600) {
      taasTeamCards.forEach((teamCard, index) => {
        // if (index === 0) {
        // teamCard.classList.add("active")
        // } else {
        setTimeout(() => {
          teamCard.classList.add("active")
        }, index * 500)
        // }
      })
    }

    if (donut && !animated && donut.getBoundingClientRect().top < 600) {
      var data = [
        {
          fill: 30,
          color: "#008FEB",
        },
        {
          fill: 25,
          color: "#DF425A",
        },
        {
          fill: 10,
          color: "#6B00FF",
        },
        {
          fill: 20,
          color: "#C7C9CF",
        },
      ]

      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")

      svg.setAttribute("width", "100%")
      svg.setAttribute("height", "100%")
      svg.setAttribute("viewBox", "0 0 100 100")

      donut.appendChild(svg)

      data.forEach(function (o, i) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
          startAngle = 116.6,
          radius = 48.5,
          cx = 50,
          cy = 50,
          animationDuration = 750,
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
        circle.style.transition = "stroke-dashoffset " + currentDuration + "ms " + delay + "ms"
        circle.setAttribute("transform", "rotate(" + angle + " " + cx + " " + cy + ")")
        svg.appendChild(circle)
        filled += o.fill
        setTimeout(function () {
          circle.style["stroke-dashoffset"] = dashOffset
        }, 100)
      })

      const numberAnimationDuration = 1250

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

      animated = true
    }
  })
})()
