let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let bet = 0
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let chipsEl = document.getElementById("chips-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    bet = parseInt(document.getElementById("bet-input").value)
    
    // Validation to ensure the bet is a valid number
    if (isNaN(bet) || bet > player.chips || bet <= 0) {
        alert("Please enter a valid bet amount!")
        return
    }
    
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ")
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += bet * 2
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= bet
    }
    
    messageEl.textContent = message
    chipsEl.textContent = "Chips: $" + player.chips

    if (player.chips <= 0) {
        messageEl.textContent = "You're out of chips! Game over!"
        isAlive = false
        document.querySelector("button[onclick='newCard()']").disabled = true
    }
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
