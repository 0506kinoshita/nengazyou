const myImage = [
  "image/omikuji-daikichi.png",
  "image/omikuji-chukichi.png",
  "image/omikuji-kichi.png",
  "image/omikuji-suekichi.png",
  "image/omikuji-kyo.png",
  "image/omikuji-daikyo.png",
]

function omikuji() {
  results = Math.floor(Math.random() * myImage.length);
  document.kuji.src = myImage[results];
}

