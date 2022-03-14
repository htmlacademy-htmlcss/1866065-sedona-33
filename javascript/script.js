const buttons = document.querySelectorAll(".mode-link");
const activeButton = document.querySelector(".mode-link--active");

buttons.forEach(function(element){
    element.addEventListener("click", function(evt){
        activeButton.classList.remove("mode-link--active");
        evt.target.classList.add("mode-link--active");
    });
})
