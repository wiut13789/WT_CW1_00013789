const form = document.querySelector("form")
const box = document.querySelector(".success_message_box")

const template = `
<p class='success'>Success!</p>
<h4 class='success_title'>Hi, NAME</h4>
<p class='success_msg'>Thank you for registration to the COURSE course</p>
<p>We will be in touch with you very soon!</p>
`

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let html = template
  html = html
    .replace("NAME", e.target[0].value)
    .replace("COURSE", e.target[2].value)
  box.insertAdjacentHTML("beforeend", html)

  setTimeout(() => {
    location.reload()
  }, 3000)
})
