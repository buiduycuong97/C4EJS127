const sw2 = {
    name2 : "VUJA DÉ X PROLETA RE ART 'WINTER WIND' VARSITY JACKET (PRE-ORDER)",
    price2 : "$2,850.00",
    detail2 : `This season we had the pleasure of working with PROLETA RE ART, also known as “PROT.” PROLETA RE ART combines traditional Japanese boro techniques, vintage processing, and artisanal craftsmanship to create their one-of-a-kind art pieces. Each item takes more than 30 hours of meticulous planning and hand-work to make, truly embodying the core ethos of the brand: to produce one of one garments unique to its owner.<br><br>

    The PV001 Varsity Jacket celebrates Chopin’s Étude Op. 25, No. 11, expressing the transience of time and memory. The jacket is comprised of hand-embroidered patches with irregularities throughout, a melting clock with the hour/minute hands pointing at 11:25, and a sleeping Snoopy on a grand piano made of ‘70s vintage bandanas. As with all PROLETA RE ART embroidered pieces, the product features their signature ‘meme’ tag above the left cuff. Each patch will be individually processed by hand to create a gradient effect.<br><br>

    The jacket is composed of Alpaca Blend Wool, tumbled Nappa Leather imported from Italy, and high quality Rayon lining for comfort and a frictionless fit.`,

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