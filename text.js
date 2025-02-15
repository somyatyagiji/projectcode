const texts = [
    "🚀 Dream big, work hard, stay focused!",
    "🔥 Passion fuels purpose, keep pushing forward!",
    "🌟 Believe in yourself and magic will happen!",
    "💡 Innovation and creativity lead to greatness!",
    "🌍 The world is full of endless possibilities!"
];

function generateText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    const textContainer = document.getElementById("textContainer");
    textContainer.innerText = texts[randomIndex];
    textContainer.style.transform = "scale(1.1)";
    setTimeout(() => textContainer.style.transform = "scale(1)", 200);
}