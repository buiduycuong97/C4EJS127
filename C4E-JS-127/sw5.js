const sw2 = {
    name2 : "MODERATO WOOL OVERSHIRT",
    price2 : "$395.00",
    detail2 : `Comfort and Style. Our Moderato Wool Overshirt is one of our most anticipated pieces in this collection. The garment is constructed with 100% Alpaca Blend Wool for warmth, 2 oversized flap pockets on the chest with natural horn buttons, and Cupro lining to reduce friction and increase comfort.<br><br>

    The cut of the shirt is oversized while boxy/cropped to ensure wearability among different body types, with a curve hem at the sides for a C-shaped silhouette. We recommend to go true to size or to size down for a fitted look<br><br>`,

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