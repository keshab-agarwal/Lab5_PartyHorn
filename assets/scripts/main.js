// main.js

// TODO
var number = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");
var horn = document.getElementById("horn-sound");
var button = document.getElementById("honk-btn");
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");
var soundImage = document.getElementById("sound-image");
var form = document.getElementById("party-horn-form");
var val = document.getElementById("volume-image");

slider.addEventListener("change", SliderUpdated);
number.addEventListener("change", NumberUpdated);
form.addEventListener("submit", BlowHorn);

airHorn.addEventListener("click", function x(){
    horn.src = "./assets/media/audio/air-horn.mp3";
    soundImage.src = "./assets/media/images/air-horn.svg"
});

carHorn.addEventListener("click", function y(){
    horn.src = "./assets/media/audio/car-horn.mp3";
    soundImage.src = "./assets/media/images/car.svg"
});

partyHorn.addEventListener("click", function z(){
    horn.src = "./assets/media/audio/party-horn.mp3";
    soundImage.src = "./assets/media/images/party-horn.svg"
});

function NumberUpdated(){
    slider.value = number.value;
    button.disabled = number.value == "0";
    horn.volume = number.valueAsNumber/100;
    if (number.valueAsNumber >= 67) val.src = "./assets/media/icons/volume-level-3.svg";
    else if (number.valueAsNumber >= 34) val.src = "./assets/media/icons/volume-level-2.svg";
    else if (number.valueAsNumber >= 1) val.src = "./assets/media/icons/volume-level-1.svg";
    else val.src = "./assets/media/icons/volume-level-0.svg";
}

function SliderUpdated(){
    number.value = slider.value;
    button.disabled = slider.value == "0";
    horn.volume = slider.valueAsNumber/100;
    if (number.valueAsNumber >= 67) val.src = "./assets/media/icons/volume-level-3.svg";
    else if (number.valueAsNumber >= 34) val.src = "./assets/media/icons/volume-level-2.svg";
    else if (number.valueAsNumber >= 1) val.src = "./assets/media/icons/volume-level-1.svg";
    else val.src = "./assets/media/icons/volume-level-0.svg";
}

function BlowHorn(event){
    event.preventDefault();
    if (horn.volume != "0") horn.play();
}