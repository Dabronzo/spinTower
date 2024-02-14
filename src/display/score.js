

export class ScoreDisplay {
    constructor() {
      this.score = 0;
  
      // Create a div element for the score display
      this.scoreElement = document.createElement('div');
      this.scoreElement.style.position = 'absolute';
      this.scoreElement.style.top = '10px'; // Adjust the top position as needed
      this.scoreElement.style.left = '50%'; // Center horizontally
      this.scoreElement.style.transform = 'translateX(-50%)'; // Center horizontally
  
      // Add styling to the score element
      this.scoreElement.style.color = 'white';
      this.scoreElement.style.fontFamily = 'Arial, sans-serif';
      this.scoreElement.style.fontSize = '24px';
  
      // Append the score element to the document body
      document.body.appendChild(this.scoreElement);
  
      // Initial update
      this.updateScore();
    }
  
    updateScore() {
      // Update the text content of the score element
      this.scoreElement.textContent = `Score: ${this.score}`;
    }
  
    incrementScore(points = 10) {
      // Increment the score by the specified points
      this.score += points;
      this.updateScore();
    }
  }
