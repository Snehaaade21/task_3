// Example: Show an alert on form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    alert('Thanks for reaching out!');
  });
  