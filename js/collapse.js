;(function () {
  const collapseElements = document.querySelectorAll(".collapse")

  collapseElements.forEach(collapse => {
    // GET ELEMENTS
    const collapseTitle = document.querySelector(`.${collapse.id}--title`)
    const collapseContent = document.querySelector(`.${collapse.id}--content`)

    // ADD EVENT LISTENER
    collapseTitle.addEventListener("click", toggleCollapse)

    // IMPORTANT VARIABLES
    let open = false
    const childrenHeight = collapseContent.children[0].clientHeight + 40

    function toggleCollapse() {
      closeAllOpenedCollapse();

      collapse.classList.add("open")
      collapseContent.style.maxHeight = `${childrenHeight}px`

      // if (open) {
      //   collapse.classList.remove("open")
      //   collapseContent.style.maxHeight = "0px"

      //   open = false

      // } else {
      //   closeAllOpenedCollapse();

      //   collapse.classList.add("open")
      //   collapseContent.style.maxHeight = `${childrenHeight}px`

      //   open = true
      // }
    }
  })
})()

function closeAllOpenedCollapse() {
  const collapseElements = document.querySelectorAll(".collapse")

  collapseElements.forEach(collapse => {
    const collapseContent = document.querySelector(`.${collapse.id}--content`)

    collapse.classList.remove("open")
    collapseContent.style.maxHeight = "0px"
  })
}