// Copyright (c) 2022 Ivan Teplov

const $ = document.querySelector.bind(document)

const openSheetButton = $("#open-sheet")
const sheet = $("#sheet")
const sheetContents = sheet.querySelector(".contents")
const draggableArea = sheet.querySelector(".draggable-area")

let sheetHeight // in vh

const setSheetHeight = (value) => {
  sheetHeight = Math.max(0, Math.min(100, value))
  sheetContents.style.height = `${sheetHeight}vh`

  if (sheetHeight === 100) {
    sheetContents.classList.add("fullscreen")
  } else {
    sheetContents.classList.remove("fullscreen")
  }
}

const setIsSheetShown = (value) => {
  sheet.setAttribute("aria-hidden", String(!value))
}

// Open the sheet when clicking the 'open sheet' button
openSheetButton.addEventListener("click", () => {
  setSheetHeight(Math.min(50, 720 / window.innerHeight * 100))
  setIsSheetShown(true)
})

// Hide the sheet when clicking the 'close' button
sheet.querySelector(".close-sheet").addEventListener("click", () => {
  setIsSheetShown(false)
})

// Hide the sheet when clicking the background
sheet.querySelector(".overlay").addEventListener("click", () => {
  setIsSheetShown(false)
})

const touchPosition = (event) =>
  event.touches ? event.touches[0] : event

let dragPosition

const onDragStart = (event) => {
  dragPosition = touchPosition(event).pageY
  sheetContents.classList.add("not-selectable")
  draggableArea.style.cursor = document.body.style.cursor = "grabbing"
}

const onDragMove = (event) => {
  if (dragPosition === undefined) return

  const y = touchPosition(event).pageY
  const deltaY = dragPosition - y
  const deltaHeight = deltaY / window.innerHeight * 100

  setSheetHeight(sheetHeight + deltaHeight)
  dragPosition = y
}

const onDragEnd = () => {
  dragPosition = undefined
  sheetContents.classList.remove("not-selectable")
  draggableArea.style.cursor = document.body.style.cursor = ""

  if (sheetHeight < 25) {
    setIsSheetShown(false)
  } else if (sheetHeight > 75) {
    setSheetHeight(100)
  } else {
    setSheetHeight(50)
  }
}

draggableArea.addEventListener("mousedown", onDragStart)
draggableArea.addEventListener("touchstart", onDragStart)

window.addEventListener("mousemove", onDragMove)
window.addEventListener("touchmove", onDragMove)

window.addEventListener("mouseup", onDragEnd)
window.addEventListener("touchend", onDragEnd)



//
const showMenu = (toggleId, navbarId, bodyId) => {
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId),
  bodypadding = document.getElementById(bodyId)

  if( toggle && navbar ) {
      toggle.addEventListener('click', ()=>{
          navbar.classList.toggle('expander');

          bodypadding.classList.toggle('body-pd')
      })
  }
}

showMenu('nav-toggle', 'navbar', 'body-pd')

/* LINK ACTIVE */
const linkColor = document.querySelectorAll('.nav__link')
function colorLink() {
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

/* COLLAPSE MENU */
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for(i=0;i<linkCollapse.length;i++) {
  linkCollapse[i].addEventListener('click', function(){
      const collapseMenu = this.nextElementSibling
      collapseMenu.classList.toggle('showCollapse')

      const rotate = collapseMenu.previousElementSibling
      rotate.classList.toggle('rotate')
  });
}

