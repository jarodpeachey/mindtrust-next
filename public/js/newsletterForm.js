// ;(function () {
//   let inputHadError = false
//   const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//   const contactForm = document.querySelector(".newsletter-form")
//   const input = document.querySelector("input.newsletter")
//   const label = document.querySelector("label.newsletter")

//   input.addEventListener("blur", e => {
//     inputHadError = true
//     onBlur(label, input, false, false)
//   })

//   input.addEventListener("keyup", e => {
//     if (inputHadError) {
//       onChange(label, input, false, false)
//     }
//   })

//   contactForm.addEventListener("submit", e => {
//     onSubmit(e)
//   })

//   function onSubmit(e) {
//     if (emailRegex.text(input.value)) {
//     } else {
//       e.preventDefault()

//       inputHadError = true

//       onBlur(label, input, false, false)
//     }
//   }

//   function onBlur(label, input, email, phone) {
//     if (!emailRegex.test(input.value) || input.value === "") {
//       label.classList.add("error")
//       input.classList.add("error")
//     }
//   }

//   function onChange(label, input, email, phone) {
//     if (emailRegex.test(input.value) && input.value.length > 0) {
//       label.classList.remove("error")
//       input.classList.remove("error")
//     } else {
//       label.classList.add("error")
//       input.classList.add("error")
//     }
//   }
// })()
