// searching for burger class in DOM
const burger = document.querySelector(".burger")
// searching for navbar_list class in DOM
const navbarList = document.querySelector(".navbar_list")

burger.onclick = () => {
  // toggling classes on burger icon click
  burger.classList.toggle("closed")
  burger.classList.toggle("opened")
  // removing scroll in order user not to be able to scroll
  if (burger.classList.contains("opened")) {
    document.body.style.overflow = "hidden"
  } else {
    //   returning scroll back to body elem
    document.body.style.overflow = "auto"
  }
}

// hiding menu while resizing the screen and there is no need for burger menu
window.onresize = () => {
  if (getComputedStyle(navbarList).display !== "none") {
    burger.classList.add("closed")
    burger.classList.remove("opened")
  }
}
