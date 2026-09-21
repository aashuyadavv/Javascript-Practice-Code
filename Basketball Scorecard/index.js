let homeScore = 0
document.getElementById("home-score").textContent = homeScore
let homePlusOne = document.getElementById("home-plus-one")
homePlusOne.addEventListener("click", function() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
})

let homePlusTwo = document.getElementById("home-plus-two")

homePlusTwo.addEventListener("click", function() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
})

let homePlusThree = document.getElementById("home-plus-three")

homePlusThree.addEventListener("click", function() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
})

let guestScore = 0
document.getElementById("guest-score").textContent = guestScore

let guestPlusOne = document.getElementById("guest-plus-one")
guestPlusOne.addEventListener("click", function() {
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
})

let guestPlusTwo = document.getElementById("guest-plus-two")
guestPlusTwo.addEventListener("click", function() {
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
})

let guestPlusThree = document.getElementById("guest-plus-three")
guestPlusThree.addEventListener("click", function() {
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
})

let newGame = document.getElementById("new-game")
newGame.addEventListener("click", function() {
    homeScore = 0
    guestScore = 0
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
})