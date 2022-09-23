const sw2 = {
    name2 : "VUJA DÉ X PROLETA RE ART 'GLITCH BORO' DENIM (PRE-ORDER)",
    price2 : "$1,950.00",
    detail2 : `This season we had the pleasure of working with PROLETA RE ART, also known as “PROT.” PROLETA RE ART combines traditional Japanese boro techniques, vintage processing, and artisanal craftsmanship to create one-of-a-kind art pieces. Each item requires over 30 hours of meticulous planning and hand-work to make, truly embodying the core ethos of the brand: to produce one of one garments unique to its owner.<br><br>

    The Glitch Boro Denim is Vuja Dé’s take on a boro denim featuring museum-quality materials such as 1600s (Edo-period) Boro/Kofu and Sakebukuro (Sake filter), which have been meticulously hand-sourced by our team with artisanal craftsmanship by PROLETA RE ART. All pairs of denim are composed of ‘60s Redline Levi’s, accentuating their rarity and durability due to the selvedge trimming. Reinforced Sashiko stitching is present throughout, and overlock stitching runs along the center back of the jeans for a seamless fit. Each item is vintage processed by hand to create a glitch-like effect as well as a softer feel on body.<br><br>

    The cut of the jeans is regular to slim fitting. We recommend to go true to size for the intended fit or to size up for a looser fit.`,

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