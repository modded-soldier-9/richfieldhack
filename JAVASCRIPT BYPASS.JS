// Find the target element by class name
var targetElement = document.querySelector('.mantine-Text-root.mantine-br57bs');

if (targetElement) {
  // Use regular expressions to extract the student number
  var content = targetElement.textContent;
  var studentNumberMatch = content.match(/\d+/);

  if (studentNumberMatch) {
    var studentNumber = studentNumberMatch[0];
    targetElement.textContent = "Student " + studentNumber + "'s fees are up to date";
    targetElement.style.color = 'rgb(255, 125, 0)';
  } else {
    alert("Could not find a valid student number. No changes were made.");
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
