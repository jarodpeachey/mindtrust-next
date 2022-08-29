;(function () {
  const teamCardsParent = document.querySelector(".team-cards")
  const teamCards = teamCardsParent.querySelectorAll(".team-card")

  let hasScrolled = false
  let down = false

  document.addEventListener("scroll", e => {
    if (!down && teamCardsParent.getBoundingClientRect().top < 200) {
      teamCards.forEach(card => {
        card.classList.remove("reverse")
        card.classList.add("active")
      })
    } else if (down && teamCardsParent.getBoundingClientRect().top >= -50) {
      teamCards.forEach(card => {
        card.classList.remove("active")
        card.classList.add("reverse")
      })
    }

    if (teamCardsParent.getBoundingClientRect().top < -50) {
      down = true
    }

    if (teamCardsParent.getBoundingClientRect().top > 200) {
      down = false
    }
  })
})()
