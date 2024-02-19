// JavaScript to make the progress tracker interactive
function updateProgress(stepNumber) {
  // Get all the steps
  const steps = document.querySelectorAll('.progress-tracker li');
  
  // Update classes for each step
  steps.forEach((step, index) => {
    if (index < stepNumber) {
      step.className = 'completed';
    } else if (index === stepNumber) {
      step.className = 'active';
    } else {
      step.className = '';
    }
  });
}
// This script could be used to handle form submissions, validations, etc.
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Perform form validation or submission here
  
  alert('Form submitted!'); // Placeholder action
});

function showForm(step) {
  // Hide all forms
  for (let i = 1; i <= 4; i++) {
    document.getElementById('form-' + i).style.display = 'none';
  }
  
  // Show the current form
  document.getElementById('form-' + step).style.display = 'block';
  
  // Update progress tracker
  updateProgress(step);
}

function finishForm() {
  // Logic to handle the final submission
  alert('Form is finished. Implement the submission logic here.');
}

function updateProgress(step) {
  // Reset all steps to inactive
  document.querySelectorAll('.progress-tracker li').forEach(function(li) {
    li.classList.remove('active');
  });

  // Set the current step to active
  document.querySelector('.progress-tracker li[data-step="' + step + '"]').classList.add('active');
}


