;(function () {
  // FAQ PAGE ELEMENTS
  const menu = document.querySelector(".main__menu")
  const menuItems = document.querySelectorAll(".main__menu--item")
  const sections = document.querySelectorAll(".faq__section")
  const indicator = document.querySelector(".menu__indicator")

  // VARIABLES
  const currentActiveMenu = window.location.hash.replace("#", "") || null
  let firstLoad = true

  if (currentActiveMenu && firstLoad) {
    const menuTop = menu.getBoundingClientRect().top

    window.scrollTo(
      0,
      Math.abs(document.querySelector("header").getBoundingClientRect().top - document.getElementById(`${currentActiveMenu}`).getBoundingClientRect().top - 3)
    )

    menuItems.forEach(menuItem => {
      if (menuItem.id === `menu-item-${currentActiveMenu}`) {
        menuItem.classList.add("active")
        indicator.style.top = `${menuItem.getBoundingClientRect().top - menuTop}px`
      }
    })

    firstLoad = false
  }

  document.addEventListener("scroll", onScroll)

  function onScroll(e) {
    const menuTop = menu?.getBoundingClientRect().top

    nextSection = getClosestForwardItem()
    previousSection = getClosestBackwardItem()

    if (!previousSection) {
      menuItems.forEach(menuItem => {
        if (menuItem.id === `menu-item-${nextSection.id}`) {
          menuItem.classList.add("active")
          indicator.style.top = `${menuItem.getBoundingClientRect().top - menuTop}px`
        } else {
          menuItem.classList.remove("active")
        }
      })
    } else if (Math.abs(nextSection.getBoundingClientRect().top) < Math.abs(previousSection.getBoundingClientRect().top)) {
      menuItems.forEach(menuItem => {
        if (menuItem.id === `menu-item-${nextSection.id}`) {
          menuItem.classList.add("active")
          indicator.style.top = `${menuItem.getBoundingClientRect().top - menuTop}px`
        } else {
          menuItem.classList.remove("active")
        }
      })
    }
  }

  function getClosestForwardItem() {
    let closestItem = null
    let lowestOffsetTop = 9999999

    sections.forEach(section => {
      if (section.getBoundingClientRect().top < lowestOffsetTop && section.getBoundingClientRect().top > 0) {
        lowestOffsetTop = section.getBoundingClientRect().top
        closestItem = section
      }
    })

    return closestItem
  }

  function getClosestBackwardItem() {
    let closestItem = null
    let lowestOffsetTop = 9999999

    sections.forEach(section => {
      if (section.getBoundingClientRect().top < lowestOffsetTop && section.getBoundingClientRect().top < 0) {
        lowestOffsetTop = Math.abs(section.getBoundingClientRect().top)
        closestItem = section
      }
    })

    return closestItem
  }
})()
