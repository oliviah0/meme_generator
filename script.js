//Initialize all elements
let memeCollection = document.getElementById("memeCollection")
let form = document.querySelector("form")
let inputTopText = document.getElementById("top_text")
let inputBotText = document.getElementById("bottom_text")
let inputImage = document.getElementById("imgURL")


form.addEventListener("submit", generateMeme)


function generateMeme(e) {
  //prevent the form from refreshing
  e.preventDefault()

  //Create new elements to add to output area
  let memeOutput = document.createElement("div")
  let memeTopText = document.createElement("div")
  let memeBotText = document.createElement("div")
  let memeImage = document.createElement("img")
  
  let overlay = document.createElement("div")
  let iconDiv = document.createElement("div")
  let icon = document.createElement("i")
  
  //add classes to the new elements for css formatting
  memeOutput.classList.add("output")
  memeTopText.classList.add("text", "top")
  memeBotText.classList.add("text", "bottom")
  
  overlay.classList.add("overlay")
  iconDiv.classList.add("iconDiv")
  icon.classList.add("fa", "fa-trash-o")
  
  //Set the new elements outputs to the value inputted
  memeTopText.innerText = inputTopText.value
  memeBotText.innerText = inputBotText.value
  memeImage.src = inputImage.value
  
  //add input values to the output container
  iconDiv.appendChild(icon)
  overlay.appendChild(iconDiv)

  memeOutput.appendChild(memeImage)
  memeOutput.appendChild(memeTopText)
  memeOutput.appendChild(memeBotText)
  memeOutput.appendChild(overlay)

  form.reset()

  //add the output mean to the meme collection area
  memeCollection.appendChild(memeOutput)

  memeOutput.addEventListener("click", function(e) {
    this.parentNode.removeChild(this);
  })
}