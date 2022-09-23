const sw2 = {
    name2 : "ALLEGRO WORK JACKET",
    price2 : "$685.00",
    detail2 : `Our Allegro Work Jacket features storm flap paneling along the rear shoulders and sleeves to deflect wind and improve movement in harsher weather conditions. The jacket is composed of 100% Alpaca Blend Wool with Rayon lining for maximum comfort and warmth. Riri zippers ensure smooth fastening and double Cobrax snap closures on the sleeves allow for adjustment to the storm flaps.<br><br>

    The cut of the jacket is boxy and cropped with an oversized silhouette. We recommend to go true to size or to size down for a fitted look.<br><br>`,

    mater2 : "Composition : <br>Body: 100% wool"
};
const lowcapsN2 = document.getElementById("sweaterLowN2")
lowcapsN2.innerHTML = `<b>${sw2.name2}</b>`;
const lowcapsP2 = document.getElementById("sweaterLowP2")
lowcapsP2.innerHTML = `${sw2.price2}`;
const lowcapsD2 = document.getElementById("sweaterLowD2")
lowcapsD2.innerHTML = `${sw2.detail2}`;
const mater2 = document.getElementById("mater2")
mater2.innerHTML = `${sw2.mater2}`

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}