// Function to copy code to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  
  // Function to toggle light and dark mode for a specific code block
  function toggleMode(button) {
    const codeContainer = button.parentElement;
    const codeBlock = codeContainer.querySelector('.code-block');
    if (button.getAttribute('data-mode') === 'dark') {
        codeBlock.classList.add('light-mode');
        button.textContent = 'Dark Mode';
        button.setAttribute('data-mode', 'light');
    } else {
        codeBlock.classList.remove('light-mode');
        button.textContent = 'Light Mode';
        button.setAttribute('data-mode', 'dark');
    }
  }
  
  // Add event listeners to copy buttons
  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const codeBlock = button.previousElementSibling.textContent;
        copyToClipboard(codeBlock);
        alert('Code copied to clipboard');
    });
  });
  
  // Add event listeners to toggle buttons
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        toggleMode(button);
    });
  });
  