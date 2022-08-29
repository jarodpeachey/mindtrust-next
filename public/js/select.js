;(function () {
  const selectElements = document.querySelectorAll(".select")
  const jobListings = document.querySelectorAll(".job-listing")
  const jobsList = document.querySelector(".jobs__list")

  const jobsArray = []

  let locationValue = "all"
  let categoryValue = "all"

  jobListings.forEach(job => {
    jobsArray.push({
      title: job.firstElementChild.firstElementChild.innerHTML,
      location: job.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML,
      hours: job.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML,
      link: job.firstElementChild.nextElementSibling.href,
      id: job.id,
      category: job.getAttribute("data-category"),
    })
  })

  selectElements.forEach(select => {
    // GET ELEMENTS
    const selectWrapper = select.children[0]
    const selectMenu = select.children[1]
    const selectLabelWrapper = selectWrapper.children[0]

    const options = selectMenu.querySelectorAll(":scope > .option")

    // ADD EVENT LISTENER
    selectWrapper.addEventListener("click", toggleSelect)

    options.forEach(option => option.addEventListener("click", onChange))

    // IMPORTANT VARIABLES
    let open = false
    let selectedValue = ""
    let selectedLabel = ""

    function toggleSelect() {
      if (open) {
        selectWrapper.classList.remove("open")
        selectMenu.classList.remove("open")

        open = false
      } else {
        selectWrapper.classList.add("open")
        selectMenu.classList.add("open")

        open = true
      }
    }

    function onChange(e) {
      e.preventDefault()

      selectedValue = e.target.value
      selectedLabel = e.target.innerHTML

      selectWrapper.classList.remove("open")
      selectMenu.classList.remove("open")

      open = false

      selectLabelWrapper.innerHTML = selectedLabel

      if (selectWrapper.id === "job-location") {
        locationValue = selectedValue
      } else {
        categoryValue = selectedValue
      }

      updateJobs()
    }
  })

  function updateJobs() {
    const newJobListings = document.querySelectorAll(".job-listing")

    newJobListings.forEach(job => {
      job.remove()
    })

    jobsArray.forEach(job => {
      if (locationValue !== "all" && categoryValue !== "all") {
        if (job.location.toLowerCase().includes(locationValue.toLowerCase()) && job.category.toLowerCase().includes(categoryValue.toLowerCase())) {
          const jobHTML = `
          <li class="job-listing" id=${job.id}>
            <div>
              <h3 class="job__title">${job.title}</h3>
              <div class="job__info">
                <img loading="lazy" src="/media/img/icons/icon--location.svg" alt="Location" class="icon" />
                <p>${job.location}</p>
                <img loading="lazy" src="/media/img/icons/icon--clock.svg" alt="Clock" class="icon" />
                <p>${job.hours}</p>
              </div>
            </div>
            <a href="/jobs/${job.id}" class="btn outlined light small">
              View Opening
            </a>
          </li>
        `

          jobsList.innerHTML = jobsList.innerHTML + jobHTML
        }
      } else if (locationValue !== "all") {
        if (job.location.toLowerCase().includes(locationValue.toLowerCase())) {
          const jobHTML = `
          <li class="job-listing" id=${job.id}>
            <div>
              <h3 class="job__title">${job.title}</h3>
              <div class="job__info">
                <img loading="lazy" src="/media/img/icons/icon--location.svg" alt="Location" class="icon" />
                <p>${job.location}</p>
                <img loading="lazy" src="/media/img/icons/icon--clock.svg" alt="Clock" class="icon" />
                <p>${job.hours}</p>
              </div>
            </div>
            <a href="/jobs/${job.id}" class="btn outlined light small">
              View Opening
            </a>
          </li>
        `

          jobsList.innerHTML = jobsList.innerHTML + jobHTML
        }
      } else if (categoryValue !== "all") {
        if (job.category.toLowerCase().includes(categoryValue.toLowerCase())) {
          const jobHTML = `
          <li class="job-listing" id=${job.id}>
            <div>
              <h3 class="job__title">${job.title}</h3>
              <div class="job__info">
                <img loading="lazy" src="/media/img/icons/icon--location.svg" alt="Location" class="icon" />
                <p>${job.location}</p>
                <img loading="lazy" src="/media/img/icons/icon--clock.svg" alt="Clock" class="icon" />
                <p>${job.hours}</p>
              </div>
            </div>
            <a href="/jobs/${job.id}" class="btn outlined light small">
              View Opening
            </a>
          </li>
        `

          jobsList.innerHTML = jobsList.innerHTML + jobHTML
        }
      } else {
        const jobHTML = `
          <li class="job-listing" id=${job.id}>
            <div>
              <h3 class="job__title">${job.title}</h3>
              <div class="job__info">
                <img loading="lazy" src="/media/img/icons/icon--location.svg" alt="Location" class="icon" />
                <p>${job.location}</p>
                <img loading="lazy" src="/media/img/icons/icon--clock.svg" alt="Clock" class="icon" />
                <p>${job.hours}</p>
              </div>
            </div>
            <a href="/jobs/${job.id}" class="btn outlined light small">
              View Opening
            </a>
          </li>
        `

        jobsList.innerHTML = jobsList.innerHTML + jobHTML
      }
    })

    const newerJobs = document.querySelectorAll(".job-listing")
    if (newerJobs.length === 0) {
      jobsList.innerHTML = `
        <p id="no-results" class="no-results">No results.</p>
      `
    }
    if (newerJobs.length > 0) {
      var noResult = document.getElementById("no-results");
      noResult.remove();
    }
  }
})()
