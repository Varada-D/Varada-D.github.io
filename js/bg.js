// Define an array of technology logos
const logos = ['../images/asp_dotnet.webp', 'images/ms_sql_server.webp', 'images/html5_css3_js.png', 'images/bootstrap.png', 'images/dialogflow.svg'];

// Get the background container element
const container = document.querySelector('.background-container');

// Generate and position the logos
logos.forEach((logo) => {
  // Create an image element for the logo
  const img = document.createElement('img');
  img.src = logo;
  
  // Set initial random position within the container
  img.style.position = 'absolute';
  img.style.left = Math.random() * 100 + '%';
  img.style.top = Math.random() * 100 + '%';
  
  // Append the logo to the container
  container.appendChild(img);
});
