const fs = require('fs');

// Get user move from the issue body
const userMove = process.env.GITHUB_EVENT_NAME === 'issues' ? process.env.GITHUB_EVENT_PATH : null;

// Game logic
function determineWinner(userMove, computerMove) {
  // Implement your game logic here
  // For simplicity, let's say rock always wins against scissors, etc.
  if (userMove === 'rock' && computerMove === 'scissors') return 'User wins!';
  else if (userMove === 'scissors' && computerMove === 'paper') return 'User wins!';
  else if (userMove === 'paper' && computerMove === 'rock') return 'User wins!';
  else if (userMove === computerMove) return 'It\'s a tie!';
  else return 'Computer wins!';
}

// Simulate computer's move (randomly)
const possibleMoves = ['rock', 'paper', 'scissors'];
const computerMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

// Determine the winner
const result = determineWinner(userMove, computerMove);

// Update README with game result
const readmePath = 'README.md';
const readmeContent = fs.readFileSync(readmePath, 'utf-8');
const updatedReadme = readmeContent.replace(/<!--GAME_RESULT_PLACEHOLDER-->/g, result);
fs.writeFileSync(readmePath, updatedReadme, 'utf-8');

console.log(result);
