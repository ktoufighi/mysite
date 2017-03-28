var newLink = document.createElement("a");
var allParagraphs = document.getElementsByTagName("p");
var firstParagraph = allParagraphs[0];
function toggleCopy(e) {
  var allParagraphs = document.getElementsByTagName("p");
  for(var i = 0; i < allParagraphs.length; i++) {
    if(i === 0) {
      continue;
    }
    allParagraphs[i].style.display = "block";
  }
  if(this === newLink) {
    this.remove(); //refers to the element that intiated the event in this case Read More node inside the function revealCopy. by saying this.remove() it will remove the Read More link in the paragraph.
  }
  if(e !== undefined) {
    e.preventDefault();
  }
}

newLink.setAttribute("href", "#");
newLink.setAttribute("class", "more-link");
newLink.innerHTML = "Read more";
newLink.addEventListener("click", toggleCopy);

for(var i = 0; i < allParagraphs.length; i++) {
  if(i === 0) {
    continue;
  }
  allParagraphs[i].style.display = "none";
}

firstParagraph.appendChild(newLink);
