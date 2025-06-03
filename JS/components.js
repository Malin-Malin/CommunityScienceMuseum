const header = document.querySelector('#header-container');
const footer = document.querySelector('#footer-container');

async function loadComponent(url, container) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    container.innerHTML = text;
  } catch (error) {
    console.error(`Error loading component from ${url}:`, error);
  }
}
if(header) {
  loadComponent('/components/header.html', header);
}
if(footer) {
  loadComponent('/components/footer.html', footer);
}

// This code dynamically loads the header and footer components into the specified containers.

//close hamburger menu when clicking anywhere on the page

document.addEventListener('click', function(event) {
  const hamburger = document.querySelector('#hamburger');
  const menuCheckbox = document.querySelector('#menu-checkbox');
  
  if (!hamburger || !menuCheckbox) {
    console.error('Hamburger or menu checkbox not found');
    return;
  }
  if (!hamburger.contains(event.target)) {
    menuCheckbox.checked = false;
  }
});
