# Blackjack Game

This is a simple web-based Blackjack game built using HTML, CSS, and JavaScript. The game allows you to draw cards and try to reach a sum of 21 without going over, aiming to hit Blackjack.

## Features

- **Start a New Game**: Click the "START GAME" button to begin a new round of Blackjack.
- **Draw a New Card**: Click the "NEW CARD" button to draw another card and add its value to your sum.
- **Win or Lose**: Try to reach a sum of 21 (Blackjack) to win, but be careful not to exceed 21, or you'll lose the game!

## Live Demo

You can play the Blackjack game live [here](https://blackjack.dhiashalabi.live).

## Technologies Used

- **HTML**: Structuring the game interface, including buttons and display elements.
- **CSS**: Styling the game with a background image and visually appealing elements.
- **JavaScript**: Implementing the game logic, including card drawing, summing values, and determining win/loss conditions.

## How to Play

1. **Clone the repository** to your local machine.

2. **Open the `index.html` file** in your web browser.

3. **Click "START GAME"** to begin. Two random cards will be drawn, and their sum will be displayed.

4. **Click "NEW CARD"** to draw additional cards, aiming to reach a sum of 21.

5. The game will automatically notify you if you win (hit 21) or lose (exceed 21).

## Code Overview

### HTML

The HTML file provides the structure for the game, including headings, buttons, and sections to display messages, cards, and the sum.

### CSS

The CSS file is responsible for styling the game interface:

- A background image representing a casino table.
- Stylish buttons and text to enhance the user experience.

### JavaScript

The JavaScript file contains the core functionality of the game:

- **`getRandomCard()`**: Draws a random card with values between 1 and 11.
- **`startGame()`**: Initializes the game by drawing two cards and calculating their sum.
- **`renderGame()`**: Updates the display with the current cards and sum, and checks win/loss conditions.
- **`newCard()`**: Allows the player to draw an additional card if the game is still active.

## File Structure

- **`index.html`**: Main HTML file.
- **`index.css`**: CSS file for styling.
- **`index.js`**: JavaScript file for game logic.

## Future Enhancements

- Implement a betting system where players can place bets with their chips.
- Add a dealer to the game to create a more realistic Blackjack experience.
- Improve the UI/UX with animations and responsive design.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy playing the Blackjack game! Feel free to explore, modify, and enhance the code.
