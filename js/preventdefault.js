//Link prevent default
  
const buttonLinks = document.querySelectorAll("a");

function preventLinkDefault(e) { 
    e.preventDefault();
}

buttonLinks.forEach(function(link) {
// Only applies the prevent default
// if the href attribute is set to "#"
if (link.getAttribute("href") === "#")
    link.addEventListener("click", preventLinkDefault);
});

