const ADD_PROJECT_REQUEST_MUTATION = `
mutation AddProjectRequestMutation($input: ProjectRequestInput!) {
  addProjectRequest(input: $input) {
    phoneNumber
    companyName
    websiteUrl
    type
    services
    skills
    budgetFromUsd
    budgetToUsd
    whenToStart
    additionalDetails
    firstName
    lastName
    email
    id
    createdAt
    optOutOfEmails
    privacyPolicyAccepted
  }
}
`

;(function () {
  let firstNameHadError = false
  let lastNameHadError = false
  let emailHadError = false
  // let phoneHadError = false
  let companyHadError = false

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // const websiteRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

  function isEmailValid(email) {
    return emailRegex.test(email)
  }

  // function isPhoneValid(phone) {
  //   return isMobilePhone(phone.replace(/(\(|\)|\s|-)/g, ""), undefined, { strictMode: true })
  // }

  // function isWebsiteValid(website) {
  //   return website !== "" ? websiteRegex.test(website) : true
  // }

  const firstNameInput = document.querySelector("input.first-name")
  const firstNameLabel = document.querySelector("label.first-name")
  const lastNameInput = document.querySelector("input.last-name")
  const lastNameLabel = document.querySelector("label.last-name")
  const emailInput = document.querySelector("input.email")
  const emailLabel = document.querySelector("label.email")
  // const phoneInput = document.querySelector("input.phone")
  // const phoneLabel = document.querySelector("label.phone")
  const companyInput = document.querySelector("input.company")
  const companyLabel = document.querySelector("label.company")
  // const websiteInput = document.querySelector("input.website")
  // const websiteLabel = document.querySelector("label.website")
  // const additionalDetailsInput = document.querySelector("textarea.additionalDetails")
  const privacyPolicyInput = document.querySelector("#privacy-policy")
  // const optOutInput = document.querySelector("#opt-out")
  const siloForm = document.querySelector("form.silo-form")

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
  //   companyHadError = true
  //   onBlur(websiteLabel, websiteInput, false, false, true)
  // })

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
  //   companyHadError = true
  //   onChange(websiteLabel, websiteInput, false, false, true)
  // })

  siloForm.addEventListener("submit", e => {
    e.preventDefault()
    onSubmit(e)
  })

  function onSubmit(e) {
    if (
      // siloForm.dataset.apiUrl !== "" &&
      firstNameInput.value !== "" &&
      lastNameInput.value !== "" &&
      isEmailValid(emailInput.value) &&
      // isPhoneValid(phoneInput.value) &&
      // isWebsiteValid(websiteInput.value) &&
      // privacyPolicyInput.checked &&
      companyInput.value !== ""
    ) {
      e.preventDefault()
      // clearbit identify
      const uuid = generateUUID()
      const companyDomain = extractCompanyDomain(emailInput.value).domain
      

      // submit form
      fetch("https://api.hsforms.com/submissions/v3/integration/submit/441110/c23ae27b-e348-4740-8fd8-0943d078dbc4", {
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
            // {
            //   name: "phone",
            //   value: phoneInput.value,
            // },
            {
              name: "company",
              value: companyInput.value,
            },
            // {
            //   name: "website",
            //   value: websiteInput.value,
            // },
            // {
            //   name: "message",
            //   value: messageInput.value,
            // },
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
            window.location.href = "https://meetings.mindtrust.com/meetings/sales-team-demo/web-demo-request"
          }
        })

      e.preventDefault()

      // const body = JSON.stringify({
      //   query: ADD_PROJECT_REQUEST_MUTATION,
      //   variables: {
      //     input: {
      //       companyName: companyInput.value,
      //       email: emailInput.value,
      //       firstName: firstNameInput.value,
      //       lastName: lastNameInput.value,
      //       phoneNumber: phoneInput.value,
      //       websiteUrl: websiteInput.value || null,
      //       additionalDetails: additionalDetailsInput.value || null,
      //       optOutOfEmails: optOutInput.checked,
      //       privacyPolicyAccepted: privacyPolicyInput.checked,
      //       isComplete: true,
      //       budgetFromUsd: null,
      //       budgetToUsd: null,
      //       services: null,
      //       skills: null,
      //       type: null,
      //       whenToStart: null,
      //     },
      //   },
      // })
      // window
      //   .fetch(siloForm.dataset.apiUrl, {
      //     method: "POST",
      //     mode: "cors",
      //     cache: "no-cache",
      //     credentials: "same-origin",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     redirect: "follow",
      //     referrerPolicy: "no-referrer",
      //     body,
      //   })
      //   .then(response => response.json())
    } else {
      e.preventDefault()

      firstNameHadError = true
      lastNameHadError = true
      emailHadError = true
      // phoneHadError = true
      companyHadError = true

      onBlur(firstNameLabel, firstNameInput, false, false)
      onBlur(lastNameLabel, lastNameInput, false, false)
      onBlur(emailLabel, emailInput, true, false)
      // onBlur(phoneLabel, phoneInput, false, true)
      onBlur(companyLabel, companyInput, false, false)
    }
  }

  function onBlur(label, input, email, phone, website) {
    if (email) {
      // Validation for email input
      if (!isEmailValid(input.value)) {
        label.classList.add("error")
        input.classList.add("error")
      }
    } else if (phone) {
      if (!isPhoneValid(input.value)) {
        label.classList.add("error")
        input.classList.add("error")
      }
    } else if (website) {
      if (!isWebsiteValid(input.value)) {
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

  function onChange(label, input, email, phone, website) {
    if (email) {
      // Validation for email input
      if (isEmailValid(input.value)) {
        label.classList.remove("error")
        input.classList.remove("error")
      } else {
        label.classList.add("error")
        input.classList.add("error")
      }
    } else if (phone) {
      // Validation for phone input
      if (isPhoneValid(input.value)) {
        label.classList.remove("error")
        input.classList.remove("error")
      } else {
        label.classList.add("error")
        input.classList.add("error")
      }
    } else if (website) {
      // Website for phone input
      if (isWebsiteValid(input.value)) {
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
