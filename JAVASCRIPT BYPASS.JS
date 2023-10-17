// Prompt the user for the student number
var studentNumber = prompt("Enter the student number:");

// Select the target element by its class name
var targetElement = document.querySelector('.mantine-Text-root.mantine-br57bs');

if (targetElement) {
  // Check if the studentNumber exists and update the content and style accordingly
  if (studentNumber) {
    targetElement.textContent = "Student " + studentNumber + "'s fees are up to date";
    targetElement.style.color = 'rgb(255, 125, 0)';
  } else {
    alert("Invalid student number. No changes were made.");
  }
}

// Find the elements based on their class and style attributes
var elements = document.querySelectorAll('.mantine-Text-root.mantine-1d7g8is');
elements.forEach(function(element) {
    // Check the element's current content and style
    if (element.textContent.trim() === 'Deny Access') {
        element.style.color = 'rgb(255, 125, 0)';
        element.textContent = 'Proceed';
    }
});
