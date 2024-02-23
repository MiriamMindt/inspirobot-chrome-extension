// Define the color schemes
const colorSchemes = [
    { text: '#5ea6aa', background: '#cbe1e2' }, // Blue
    { text: '#60b39c', background: '#cbe6dd' }, // Green
    { text: '#ff8a91', background: '#ffdada' }  // Red
  ];
  
  // Function to select and apply a color scheme
  function applyColorScheme() {
    // Get the last used scheme index from storage, or default to 0
    chrome.storage.local.get({ schemeIndex: 0 }, function(data) {
      const scheme = colorSchemes[data.schemeIndex];
      const popupHeader = document.getElementById('popup-header');
      if (popupHeader) {
        popupHeader.style.color = scheme.text; // Darker color for the text
        popupHeader.style.backgroundColor = scheme.background; // Lighter color for the background
      }
      // Increment and wrap the index for next time
      const nextSchemeIndex = (data.schemeIndex + 1) % colorSchemes.length;
      chrome.storage.local.set({ schemeIndex: nextSchemeIndex });
    });
  }
  
  // Fetch and display the image
  document.addEventListener('DOMContentLoaded', function() {
    applyColorScheme(); // Apply a color scheme on load
  
    fetch('https://inspirobot.me/api?generate=true')
      .then(response => response.text())
      .then(imageUrl => {
        const imageElement = document.getElementById('inspiro-image');
        if (imageElement) {
          imageElement.src = imageUrl;
        }
      })
      .catch(error => {
        console.error('Error fetching InspiroBot image:', error);
      });
  });
