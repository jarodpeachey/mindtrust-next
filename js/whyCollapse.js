;(function () {
  if (typeof window !== "undefined" && window.innerWidth < 992) {
    const collapseElements = document.querySelectorAll(".advantage__item")

    collapseElements.forEach(collapse => {
      // GET ELEMENTS
      const collapseTitle = collapse.children[0]
      const collapseContent = collapse.children[1]

      // ADD EVENT LISTENER
      collapseTitle.addEventListener("click", toggleCollapse)

      // IMPORTANT VARIABLES
      let open = false
      const childrenHeight = collapseContent.children[0].clientHeight + collapseContent.children[0].clientHeight + 24

      function toggleCollapse() {
        if (open) {
          collapse.classList.remove("open")
          collapseContent.style.maxHeight = "0px"

          open = false
        } else {
          collapse.classList.add("open")
          collapseContent.style.maxHeight = `${childrenHeight}px`

          open = true
        }
      }
    })
  }
})()
