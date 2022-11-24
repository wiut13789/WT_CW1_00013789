const SUBJECTS = [
  [
    "Math",
    [18, "months"],
    [900000, "UZS"],
    "Mr. John",
    ["6.00", "8.00", "PM"],
    ["Mon", "Wed", "Fri"],
    9,
  ],

  [
    "English",
    [9, "months"],
    [600000, "UZS"],
    "Mrs. Valeriya",
    ["6.00", "8.00", "PM"],
    ["Mon", "Wed", "Fri"],
    2,
  ],

  [
    "SAT",
    [12, "months"],
    [600000, "UZS"],
    "Ms. Marifat",
    ["5.00", "7.00", "PM"],
    ["Tue", "Thu", "Sat"],
    2,
  ],

  [
    "Russian",
    [6, "months"],
    [400000, "UZS"],
    "Ms. Katya",
    ["3.00", "6.00", "PM"],
    ["Tue", "Thu", "Sat"],
    0,
  ],

  [
    "Chemistry",
    [6, "months"],
    [1000000, "UZS"],
    "Mr. Vlad",
    ["3.00", "6.00", "PM"],
    ["Tue", "Wed", "Sat"],
    7,
  ],
]

// Row template stored as string
const rowTemplate = `
<tr>
    <td>course</td>
    <td>duration</td>
    <td>price</td>
    <td>teacher</td>
    <td>time</td>
    <td>days</td>
    <td>left</td>
    <td>
        <button class="section_btn">
            <a href="/pages/enroll.html">Enroll</a>
        </button>
    </td>
</tr>
`

const table = document.querySelector("table tbody")

SUBJECTS.forEach((subjectData) => {
  renderRow(table, rowTemplate, subjectData)
})

function renderRow(anchor, template, data) {
  // Replacing placeholders with actual data
  console.log(data[1])
  let node = template
    .replace("course", data[0])
    .replace("duration", `${data[1][0]} ${data[1][1]}`)
    .replace("price", `${data[2][0]} ${data[2][1]}`)
    .replace("teacher", data[3])
    .replace("time", `${data[4][0]}-${data[4][1]} ${data[4][2]}`)
    .replace("days", `${data[5][0]}, ${data[5][1]}, ${data[5][2]}`)
    .replace("left", data[6])
  //calling isertAdjacentHTML method for injecting HTML into the DOM target elem
  anchor.insertAdjacentHTML("beforeend", node)
}
