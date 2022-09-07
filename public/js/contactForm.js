;(function () {
  let firstNameHadError = false
  let lastNameHadError = false
  let emailHadError = false
  let phoneHadError = false
  let companyHadError = false
  let websiteHadError = false
  let messageHadError = false

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

  const firstNameInput = document.querySelector("input.first-name")
  const firstNameLabel = document.querySelector("label.first-name")
  const lastNameInput = document.querySelector("input.last-name")
  const lastNameLabel = document.querySelector("label.last-name")
  const emailInput = document.querySelector("input.email")
  const emailLabel = document.querySelector("label.email")
  const phoneInput = document.querySelector("input.phone")
  const phoneLabel = document.querySelector("label.phone")
  const companyInput = document.querySelector("input.company")
  const companyLabel = document.querySelector("label.company")
  const websiteInput = document.querySelector("input.website")
  const websiteLabel = document.querySelector("label.website")
  const messageInput = document.querySelector("textarea.message")
  const messageLabel = document.querySelector("label.message")
  const marketingCheckbox = document.getElementById("marketing-checkbox")
  const contactForm = document.querySelector("form#contact-form")

  firstNameInput.addEventListener("blur", e => {
    firstNameHadError = true
    onBlur(firstNameLabel, firstNameInput, false, false)
  })
  lastNameInput.addEventListener("blur", e => {
    lastNameHadError = true
    onBlur(lastNameLabel, lastNameInput, false, false)
  })
  emailInput.addEventListener("blur", e => {
    emailHadError = true
    onBlur(emailLabel, emailInput, true, false)
  })
  // phoneInput.addEventListener("blur", e => {
  //   phoneHadError = true
  //   onBlur(phoneLabel, phoneInput, false, true)
  // })
  companyInput.addEventListener("blur", e => {
    companyHadError = true
    onBlur(companyLabel, companyInput, false, false)
  })
  // websiteInput.addEventListener("blur", e => {
  //   websiteHadError = true
  //   onBlur(websiteLabel, websiteInput, false, false)
  // })
  messageInput.addEventListener("blur", e => {
    messageHadError = true
    onBlur(messageLabel, messageInput, false, false)
  })

  firstNameInput.addEventListener("keyup", e => {
    if (firstNameHadError) {
      onChange(firstNameLabel, firstNameInput, false, false)
    }
  })
  lastNameInput.addEventListener("keyup", e => {
    if (lastNameHadError) {
      onChange(lastNameLabel, lastNameInput, false, false)
    }
  })
  emailInput.addEventListener("keyup", e => {
    if (emailHadError) {
      onChange(emailLabel, emailInput, true, false)
    }
  })
  // phoneInput.addEventListener("keyup", e => {
  //   if (phoneHadError) {
  //     onChange(phoneLabel, phoneInput, false, true)
  //   }
  // })
  companyInput.addEventListener("keyup", e => {
    if (companyHadError) {
      onChange(companyLabel, companyInput, false, false)
    }
  })
  // websiteInput.addEventListener("keyup", e => {
  //   if (websiteHadError) {
  //     onChange(websiteLabel, websiteInput, false, false)
  //   }
  // })
  messageInput.addEventListener("keyup", e => {
    if (messageHadError) {
      onChange(messageLabel, messageInput, false, false)
    }
  })
  contactForm.addEventListener("submit", e => {
    onSubmit(e)
  })

  async function onSubmit(e) {
    if (
      firstNameInput.value !== "" &&
      messageInput.value !== "" &&
      lastNameInput.value !== "" &&
      emailRegex.test(emailInput.value) &&
      companyInput.value !== ""
    ) {
      e.preventDefault()
      // clearbit identify
      const uuid = generateUUID()
      const companyDomain = extractCompanyDomain(emailInput.value).domain
      

      // submit form
      fetch("https://api.hsforms.com/submissions/v3/integration/submit/441110/8387cb4d-782b-4adc-88d3-5001e8085f87", {
        method: "post",
        body: JSON.stringify({
          submittedAt: new Date().getTime(),
          fields: [
            {
              name: "firstname",
              value: firstNameInput.value,
            },
            {
              name: "lastname",
              value: lastNameInput.value,
            },
            {
              name: "email",
              value: emailInput.value,
            },
            {
              name: "phone",
              value: phoneInput.value,
            },
            {
              name: "company",
              value: companyInput.value,
            },
            {
              name: "website",
              value: websiteInput.value,
            },
            {
              name: "message",
              value: messageInput.value,
            },
          ],
          context: {
            // "hutk": ':hutk', // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
            pageUri: window.location.href,
            pageName: "Contact Us - MindTrust",
          },
        }),
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": "application/json",
        },
      })
        .then(res => res.json())
        .then(json => {
          if (window.location.hostname.includes("mindtrust.com")) {
            identifyClearbit(uuid, emailInput.value, companyDomain);
          }
          if (json.errors && json.errors.length > 0) {
            document.getElementById("form-message").style.display = "block"
            document.getElementById("form-message").innerHTML = json.errors[0].message.split("'. ")[1]
          } else {
            document.getElementById("form-message").style.display = "none"
            window.location.reload()
          }
        })

      e.preventDefault()
    } else {
      e.preventDefault()
      firstNameHadError = true
      lastNameHadError = true
      emailHadError = true
      phoneHadError = true
      companyHadError = true
      websiteHadError = true
      messageHadError = true

      onBlur(firstNameLabel, firstNameInput, false, false)
      onBlur(lastNameLabel, lastNameInput, false, false)
      onBlur(emailLabel, emailInput, true, false)
      // onBlur(phoneLabel, phoneInput, false, true)
      onBlur(companyLabel, companyInput, false, false)
      // onBlur(websiteLabel, websiteInput, false, false)
      onBlur(messageLabel, messageInput, false, false)
    }
  }

  function onBlur(label, input, email, phone) {
    if (email) {
      // Validation for email input
      if (!emailRegex.test(input.value) || input.value === "") {
        label.classList.add("error")
        input.classList.add("error")
      }
    } else {
      // Validation for everything else
      if (input.value === "") {
        label.classList.add("error")
        input.classList.add("error")
      }
    }
  }

  function onChange(label, input, email, phone) {
    if (email) {
      // Validation for email input
      if (emailRegex.test(input.value) && input.value.length > 0) {
        label.classList.remove("error")
        input.classList.remove("error")
      } else {
        label.classList.add("error")
        input.classList.add("error")
      }
    } else {
      // Validation for everything else
      if (input.value.length > 0) {
        label.classList.remove("error")
        input.classList.remove("error")
      } else {
        label.classList.add("error")
        input.classList.add("error")
      }
    }
  }
})()
