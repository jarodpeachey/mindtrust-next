;(function () {
  const elements = document.querySelectorAll(".mt-animate")

  document.addEventListener("scroll", e => {
    elements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight - 100 || element.getBoundingClientRect().bottom < window.innerHeight - 100) {
        element.classList.add("mt-animate__active")
      }
    })
  })
})()
