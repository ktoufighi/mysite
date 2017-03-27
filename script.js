var ismobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null
var touchorclick = (ismobile)? 'touchstart' : 'click'
var searchcontainer = document.getElementById('searchcontainer')
var searchfield = document.getElementById('search-terms')
var searchlabel = document.getElementById('search-label')

searchlabel.addEventListener(touchorclick, function(e){ // when user clicks on search label
    searchcontainer.classList.toggle('opensearch') // add or remove 'opensearch' to searchcontainer
    if (!searchcontainer.classList.contains('opensearch')){ // if hiding searchcontainer
        searchfield.blur() // blur search field
        e.preventDefault() // prevent default label behavior of focusing on search field again
    }
    e.stopPropagation() // stop event from bubbling upwards
}, false)

searchfield.addEventListener(touchorclick, function(e){ // when user clicks on search field
    e.stopPropagation() // stop event from bubbling upwards
}, false)

document.addEventListener(touchorclick, function(e){ // when user clicks anywhere in document
    searchcontainer.classList.remove('opensearch')
    searchfield.blur()
}, false)
