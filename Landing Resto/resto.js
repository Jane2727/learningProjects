// slider for featured dishes block

var sliderBtn = document.getElementsByClassName("fa-lg");

for (var i = 0, len = sliderBtn.length; i < len; i++) {
    sliderBtn[i].addEventListener("click", function(){
    
    var sliderRoll = document.getElementsByClassName("featured-dishes-roll");

    if (!(this.classList.contains("active"))) {

        var indexActSliderBtn =  document.querySelector(".fa-lg.active").getAttribute("data-tab");

        sliderBtn[indexActSliderBtn].classList.remove("active");
        sliderRoll[indexActSliderBtn].classList.remove("active");

        var curIndex = this.getAttribute("data-tab");

        this.classList.add("active");
        sliderRoll[curIndex].classList.add("active");   
    }
    })
}

// main menu toggler (small screen)

navButton.addEventListener("click", function(){
    var arrowButton = document.getElementById('arrowButton');
    var menuLinks = document.getElementById('menuLinks');

    if (menuLinks.style.display === "flex") {
        menuLinks.style.display = "none";
        arrowButton.style.transform = "none";
    } else {
        menuLinks.style.display = "flex";
        arrowButton.style.transform = 'rotate(180deg)';
    }
});