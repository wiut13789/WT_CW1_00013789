// accessing table rows
const tableRows = document.querySelectorAll("table tr")

// applying applyStyles fn for each tr
tableRows.forEach((tableRow) => applyStyles(tableRow))

// accepts row in params
function applyStyles(row) {
  // if places left is less than 5 make text color red
  if (+row.cells[6].innerText < 5) {
    row.cells[6].style.color = "red"
  }

  // if no places left make enroll button disabled
  if (+row.cells[6].innerText === 0) {
    row.cells[7].querySelector("button").disabled = "disabled"
  }
}
