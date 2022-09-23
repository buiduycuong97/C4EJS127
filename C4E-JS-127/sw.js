const sw1 = {
    name: "LOW-GAUGE KNIT SWEATER (NUDE IVORY)",
    price: "$350.00",
    detail: `As part of our Spring-Summer 2022 collection, this drop features the low-gauge knit sweater in two colorways.<br><br>

    The sweater is made with yak wool for insulation while the low-gauge construction allows for breathability during the warm spring weather.<br><br>

    The style of the garment is wide/cropped with dropped shoulders, maintaining a balance of the minimalist look influenced by Japanese uniforms and the rugged aesthetic of 90s Japanese punk culture; a perfect balance of street and formal wear.`,

    mater: "Composition : <br>Body: 100% wool"
};
const lowcapsN = document.getElementById("sweaterLowN")
lowcapsN.innerHTML = `<b>${sw1.name}</b>`;
const lowcapsP = document.getElementById("sweaterLowP")
lowcapsP.innerHTML = `${sw1.price}`;
const lowcapsD = document.getElementById("sweaterLowD")
lowcapsD.innerHTML = `${sw1.detail}`;
const mater = document.getElementById("mater")
mater.innerHTML = `${sw1.mater}`;

let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}