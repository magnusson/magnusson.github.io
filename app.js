let gibberish = [
  '\u2588',
  '\u2593',
  '\u2592',
  '\u2591',
  '\u2588',
  '\u2593',
  '\u2592',
  '\u2591',
  '\u2588',
  '\u2593',
  '\u2592',
  '\u2591',
  '<',
  '>',
  '/'
]

const theBaffler = document.getElementById('baffle')

const baffleMe = () => {
  baffle(theBaffler, {
    characters: gibberish
  })
    .start()
    .reveal(500, 1000)
  setTimeout(baffleMe, 15000)
}

const observer = new MutationObserver(e => {
  document.title = theBaffler.textContent
})

observer.observe(theBaffler, {
  characterData: true,
  childList: true
})

window.onload = baffleMe
