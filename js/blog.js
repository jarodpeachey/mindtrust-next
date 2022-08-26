;(function () {
  //////////////////////////////////////////////////
  ////////// NEWSLETTER SELECT FUNCTIONS ///////////
  //////////////////////////////////////////////////
  const newsletterButton = document.querySelector(".newsletter__btn")
  const newsletterSelect = document.querySelector(".newsletter__select")
  const newsletterSelectValue = document.querySelector(".newsletter__select-value")
  const newsletterSelectCheckboxes = newsletterSelect.querySelectorAll("input")
  let open = false

  newsletterSelect.addEventListener("click", e => {
    if (open) {
      newsletterSelect.classList.remove("open")
      open = false
    } else {
      newsletterSelect.classList.add("open")
      open = true
    }
  })

  const updateValue = () => {
    let array = []
    Array.prototype.slice.call(newsletterSelectCheckboxes).forEach(item => {
      if (item.checked && item.value !== "all") {
        array.push(item.value)
      }
    })

    if (array.length > 0) {
      newsletterButton.disabled = false
      if (array.length === 1) {
        newsletterSelectValue.innerHTML = ""
        array.forEach((item, index) => {
          if (index === 0) {
            newsletterSelectValue.innerHTML += `${item}`
          } else {
            newsletterSelectValue.innerHTML += `, ${item}`
          }
        })
      } else {
        newsletterSelectValue.innerHTML = ""

        if (array.length === 8) {
          newsletterSelectValue.innerHTML += "All topics"
          document.querySelector('input[value="all"]').checked = true
        } else {
          newsletterSelectValue.innerHTML += `${array.length} selected`
        }
      }
    } else {
      newsletterSelectValue.innerHTML = "No topics"
      newsletterButton.disabled = true
    }
  }

  Array.prototype.slice.call(newsletterSelectCheckboxes).forEach(checkbox => {
    checkbox.addEventListener("change", e => {
      if (checkbox.value === "all") {
        if (e.target.checked) {
          Array.prototype.slice.call(newsletterSelectCheckboxes).forEach(item => {
            item.checked = true
          })
          newsletterButton.disabled = false
        } else {
          Array.prototype.slice.call(newsletterSelectCheckboxes).forEach(item => {
            item.checked = false
          })

          newsletterButton.disabled = true
        }
      } else if (e.target.checked === false) {
        document.querySelector('input[value="all"]').checked = false
      }

      updateValue()
    })
  })

  //////////////////////////////////////////////////
  //////////// EXPAND SKILLS FUNCTIONS /////////////
  //////////////////////////////////////////////////
  const expands = document.querySelectorAll(".expand")

  Array.prototype.slice.call(expands).length > 0 &&
    Array.prototype.slice.call(expands).forEach(expand => {
      let open = false

      const expandButton = expand.querySelector(".expand__button")
      const expandWrapper = expand.querySelector(".expand__wrapper")

      expandButton.addEventListener("click", e => {
        if (open) {
          expandWrapper.style.maxHeight = "400px"
          open = false
          expandButton.innerHTML = "Show all"
        } else {
          expandWrapper.style.maxHeight = `${expandWrapper.firstElementChild.clientHeight}px`
          open = true
          expandButton.innerHTML = "Show less"
        }
      })
    })
})()
