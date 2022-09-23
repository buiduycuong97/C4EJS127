const sw1 = {
    name : "ALLEGRO WORK JACKET",
    price : "$685.00",
    detail : `Our Allegro Work Jacket features storm flap paneling along the rear shoulders and sleeves to deflect wind and improve movement in harsher weather conditions. The jacket is composed of 100% Alpaca Blend Wool with Rayon lining for maximum comfort and warmth. Riri zippers ensure smooth fastening and double Cobrax snap closures on the sleeves allow for adjustment to the storm flaps.br><br>

    The cut of the jacket is boxy and cropped with an oversized silhouette. We recommend to go true to size or to size down for a fitted look.<br><br>

    Model is 6ft/180cm and wears a size 2`,

    mater : `Composition:<br>
    Body: 100% wool<br>
    Lining: 100% rayon<br>`
};
const lowcapsN = document.getElementById("sweaterLowN")
lowcapsN.innerHTML = `<b>${sw1.name}</b>`;
const lowcapsP = document.getElementById("sweaterLowP")
lowcapsP.innerHTML = `${sw1.price}`;
const lowcapsD = document.getElementById("sweaterLowD")
lowcapsD.innerHTML = `${sw1.detail}`;
const mater = document.getElementById("mater")
mater.innerHTML = `${sw1.mater}`;

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