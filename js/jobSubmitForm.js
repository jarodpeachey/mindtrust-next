;(function () {
  let firstNameHadError = false
  let lastNameHadError = false
  let emailHadError = false
  let linkedinBioHadError = false
  let participationRoleHadError = false
  let messageHadError = false

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

  const firstNameInput = document.querySelector("input.first-name")
  const firstNameLabel = document.querySelector("label.first-name")
  const lastNameInput = document.querySelector("input.last-name")
  const lastNameLabel = document.querySelector("label.last-name")
  const emailInput = document.querySelector("input.email")
  const emailLabel = document.querySelector("label.email")
  const linkedinBioInput = document.querySelector("input.mt_applicant_work_experience_linked_in_url")
  const linkedinBioLabel = document.querySelector("label.mt_applicant_work_experience_linked_in_url")
  const participationRoleInput = document.querySelector("input.mt_applicant_participation_role")
  const participationRoleLabel = document.querySelector("label.mt_applicant_participation_role")
  const messageInput = document.querySelector("textarea.message")
  const messageLabel = document.querySelector("label.message")
  const consentCheckbox = document.getElementById("consent-checkbox")
  const jobsubmitForm = document.querySelector("form.jobsubmit-form")

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
  linkedinBioInput.addEventListener("blur", e => {
    linkedinBioHadError = true
    onBlur(linkedinBioLabel, linkedinBioInput, false, true)
  })
  participationRoleInput.addEventListener("blur", e => {
    participationRoleHadError = true
    onBlur(participationRoleLabel, participationRoleInput, false, false)
  })
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
  linkedinBioInput.addEventListener("keyup", e => {
    if (linkedinBioHadError) {
      onChange(linkedinBioLabel, linkedinBioInput, false, true)
    }
  })
  participationRoleInput.addEventListener("keyup", e => {
    if (participationRoleHadError) {
      onChange(participationRoleLabel, participationRoleInput, false, false)
    }
  })
  messageInput.addEventListener("keyup", e => {
    if (messageHadError) {
      onChange(messageLabel, messageInput, false, false)
    }
  })
  jobsubmitForm.addEventListener("submit", e => {
    onSubmit(e)
  })

  async function onSubmit(e) {
    if (
      firstNameInput.value !== "" &&
      messageInput.value !== "" &&
      lastNameInput.value !== "" &&
      emailRegex.test(emailInput.value)
    ) {
      e.preventDefault()
      fetch("https://api.hsforms.com/submissions/v3/integration/submit/441110/fb33b2fe-b49f-4943-a73e-a7d413d4f564", {
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
              name: "mt_applicant_work_experience_linked_in_url",
              value: linkedinBioInput.value,
            },
            {
              name: "mt_applicant_participation_role",
              value: participationRoleInput.value,
            },
            {
              name: "message",
              value: messageInput.value,
            },
          ],
          context: {
            // "hutk": ':hutk', // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
            pageUri: window.location.href,
            pageName: "Join MindTrust - MindTrust",
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
      linkedinBioHadError = true
      participationRoleHadError = true
      messageHadError = true

      onBlur(firstNameLabel, firstNameInput, false, false)
      onBlur(lastNameLabel, lastNameInput, false, false)
      onBlur(emailLabel, emailInput, true, false)
      onBlur(linkedinBioLabel, linkedinBioInput, false, true)
      onBlur(participationRoleLabel, participationRoleInput, false, false)
      onBlur(messageLabel, messageInput, false, false)
    }
  }

  function onBlur(label, input, email) {
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

  function onChange(label, input, email) {
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