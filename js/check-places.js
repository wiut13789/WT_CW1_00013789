const tableRows = document.querySelectorAll("table tr")

tableRows.forEach((tableRow) => applyStyles(tableRow))

function applyStyles(row) {
  if (+row.cells[6].innerText < 5) {
    row.cells[6].style.color = "red"
  }

  if (+row.cells[6].innerText === 0) {
    console.log(row.cells[7].querySelector("button"))
    row.cells[7].querySelector("button").disabled = "disabled"
  }
}
