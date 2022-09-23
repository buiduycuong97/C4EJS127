const sw2 = {
    name2 : "LOW-GAUGE KNIT SWEATER (MOSS GREEN)",
    price2 : "$350.00",
    detail2 : `As part of our Spring-Summer 2022 collection, this drop features the low-gauge knit sweater in two colorways.<br><br>

    The sweater is made with yak wool for insulation while the low-gauge construction allows for breathability during the warm spring weather.<br><br>

    The style of the garment is wide/cropped with dropped shoulders, maintaining a balance of the minimalist look influenced by Japanese uniforms and the rugged aesthetic of 90s Japanese punk culture; a perfect balance of street and formal wear.`,

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