(function() {
  var newLink = document.createElement("a");
  var allParagraphs = document.getElementsByTagName("p");
  var firstParagraph = allParagraphs[0];
  function toggleCopy(e) {
    var allParagraphs = document.getElementsByTagName("p");
    for(var i = 0; i < allParagraphs.length; i++) {
      var para = allParagraphs[i];
      if(i === 0) {
        continue;
      }
      if (para.style.display === "none"
      ){
        para.style.display= "block";
      }
      else {
        para.style.display = "none";
      }
    }
    if(this === newLink) {
      this.remove(); //refers to the element that intiated the event in this case Read More node inside the function revealCopy. by saying this.remove() it will remove the Read More link in the paragraph.
    }
    if(e !== undefined && e.preventDefault !== undefined) {
      e.preventDefault();
    }
  }

  newLink.setAttribute("href", "#");
  newLink.setAttribute("class", "more-link");
  newLink.innerHTML = "Read more";
  newLink.addEventListener("click", toggleCopy);
  toggleCopy();

  // for(var i = 0; i < allParagraphs.length; i++) {
  //   if(i === 0) {
  //     continue;
  //   }
  //   para.style.display = "none";
  // }

  firstParagraph.appendChild(newLink);
}());
