var treasure = Math.floor(Math.random() * (7 + 1))
var bomb = Math.floor(Math.random() * (7 + 1))
var counter = 4
// const changeToImage = () => {
//   let img = document.createElement("img"); // create new image element
//   img.src = "https://freesvg.org/img/money-3221936.png"; // set image source
//   document.getElementById("chest").innerHTML = ""; // clear the inner HTML of the clicked element
//   document.getElementById("chest").appendChild(img); // append the new image element to the clicked element
// }

const alert1 = (location) => {
  // alert(`${treasure} ${bomb}`)
  counter -= 1
  document.getElementById("turns").innerHTML = counter
  if (treasure === bomb) {
    treasure = Math.floor(Math.random() * 8);
  }
  
  if (location === treasure.toString()) {
    alert("You found the treasure! Enjoy your spoils!");
    document.getElementById(location).innerHTML = "🌟"
    // document.getElementById(location).innerHTML = changeToImage
  } 
  else if (location === bomb.toString()) {
    alert("You found the bomb! You lost!")
    document.getElementById(location).innerHTML = "💣"
  } 
  else if (location !== treasure.toString()) {
    document.getElementById(location).innerHTML = "Empty"
  }

  if (counter === 0) {
    alert("You've used all your turns!")
  }
}
//innerHTML allows us to change the value of whatever the passed value is