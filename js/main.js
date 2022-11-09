window.addEventListener('scroll', e=> {
    let navbar = document.getElementById('navbar').classList
    let active_class = "navbar__scrolled"
    
    if(scrollY>500) navbar.add(active_class)
    else navbar.remove(active_class)                      
  })

document.addEventListener("DOMContentLoaded", function() {
    let img = document.querySelectorAll('p img');
    let imgzag = document.querySelector('.page-header h2');
    img.forEach(function(item, i, img) {
        img.item(i).setAttribute("alt", imgzag.innerHTML.trim() + " (Фото №" + (i+1) + ")");
        img.item(i).outerHTML = '<a data-fancybox="images" href='+img.item(i).getAttribute("src") +'>' + img.item(i).outerHTML;
    });
})



