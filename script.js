// ===== Name Change Here =====
let name = "Mamta ❤️";

// ===== Typing Effect =====
let text = 
`if (you === "${name}") {
   myHeart = true;
   life += happiness;
   forever = together;
}`;

let index = 0;
function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 40);
    }
}
typingEffect();

// ===== YES Button =====
function accept() {
    document.getElementById("yesSound").play();
    document.getElementById("result").innerHTML =
        "🎉 Proposal Accepted ❤️💍 <br> Status: Forever Together";
}

// ===== NO Button Bhagta Hua =====
function moveNo() {
    let btn = document.getElementById("noBtn");

    let x = Math.random() * (window.innerWidth - btn.offsetWidth);
    let y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

// ===== Auto Accept After Time =====
setTimeout(() => {
    document.getElementById("result").innerHTML = "⏳ Thinking...";
}, 3000);

setTimeout(() => {
    accept();
}, 5000);
