var map;



function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.687031, lng: 37.529618},
    zoom: 17,
    scrollwheel: false
  });
    
  var marker = new google.maps.Marker({
    position: {lat: 55.687031, lng: 37.529618},
    map: map,
    title: 'device'
  });
  
}
var lastCenter = {lat: 55.687031, lng: 37.529618};
 

var openFeedbackBtn = document.querySelector(".btn--write-us");
var overlay = document.querySelector(".overlay");
var closeBtns = document.querySelectorAll(".popup__close-btn");


var feedbackPopup = document.querySelector(".popup--feedback");
var feedbackLoginInput = document.querySelector(".popup__input[name='name']");
var feedbackMailInput = document.querySelector(".popup__input[name='mail']");
var feedbackForm = document.querySelector(".popup__form");

var mapOpen = document.querySelector(".js-open-map");

var mapPopup = document.querySelector(".popup--map");



openFeedbackBtn.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("overlay-show");
    feedbackPopup.classList.add("popup-show");
    feedbackLoginInput.focus();
    
});

for(var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", function(event) {
        event.preventDefault();
        overlay.classList.remove("overlay-show");
        feedbackPopup.classList.remove("popup-show");
        feedbackPopup.classList.remove("popup-error");
        mapPopup.classList.remove("popup-show");
    });   
}

feedbackForm.addEventListener("submit", function(event) {
    if (!feedbackLoginInput.value || !feedbackMailInput.value) {
        event.preventDefault();
        feedbackPopup.classList.remove("popup-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        console.log("Нужно ввести логин и почту"); 
        feedbackPopup.classList.add("popup-error");
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (overlay.classList.contains("overlay-show")) {
            overlay.classList.remove("overlay-show");
            feedbackPopup.classList.remove("popup-show");
            feedbackPopup.classList.remove("popup-error");
            mapPopup.classList.remove("popup-show");
        }
    }
});

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("overlay-show");
    mapPopup.classList.add("popup-show");
    google.maps.event.trigger(map, 'resize');
    map.setCenter(lastCenter);
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
        }
    }
});
