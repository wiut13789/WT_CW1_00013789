// Constant for an array of objects describing subjects
const SUBJECTS = [
  {
    title: "Math",
    imgUrl: "/WT_CW1_00013789/assets/images/math.jpeg",
    duration: 18,
  },
  {
    title: "English",
    imgUrl: "/WT_CW1_00013789/assets/images/english.jpeg",
    duration: 9,
  },
  {
    title: "SAT",
    imgUrl: "/WT_CW1_00013789/assets/images/sat.jpeg",
    duration: 12,
  },
  {
    title: "Russian",
    imgUrl: "/WT_CW1_00013789/assets/images/russian.jpeg",
    duration: 6,
  },
]
// Constant for card template that has placeholders (HEADER, URL, DURATION). HTML is stored as a string.
const cardTemplate = `
<div class="card">
    <div class="card_header">
        <h3>HEADER</h3>
    </div>
    <div class="card_body">
        <img src="URL" alt="ALT" width="200" height="200"/>
    </div>
    <div class="card_footer">
        <span><strong>Duration:</strong> DURATION months</span>
        <button><a href="/WT_CW1_00013789/pages/enroll.html">Enroll</a></button>
    </div>
</div>
`

// Searching for wrapper class that should be inside the element with classes - section and subjects
const cardsContainer = document.body.querySelector(".section.subjects .wrapper")

// Applying Array.prototype.forEach to render card for each subject in SUBJECTS array.
SUBJECTS.forEach((subjectData) => {
  // Here each subject is put into subjectData
  // Calling renderCard fn
  renderCard(cardsContainer, cardTemplate, subjectData)
})

//Declaring renderCard fn with 3 params - anchor, template and data
// anchor is the DOM element where elems will be injected
// template is a param for a cardTemplate
// data will accept subjectData
function renderCard(anchor, template, data) {
  // Replacing placeholders with actual data
  let node = template
    .replace("HEADER", data.title)
    .replace("URL", data.imgUrl)
    .replace("DURATION", data.duration)
    .replace("ALT", data.title + " " + "course")
  //calling isertAdjacentHTML method for injecting HTML into the DOM target elem
  anchor.insertAdjacentHTML("beforeend", node)
}
