 TEXTS = [
 "Молчишь - соучаствуешь",
 "Я одобряю геноцид",
 "Расскажи своим детям как ты это допустил!",
 "Стыдно быть русским",
 "Или выходи или молчи",
 "А завтра можешь поехать ты",

]


IMAGES = [
    "war1.jpeg",
    "war2.jpeg",
    "war3.jpeg",
    "war4.jpeg",
]


const getRandomInt = max => Math.floor(Math.random() * max);

randomText = TEXTS[getRandomInt(TEXTS.length)]
randomImage= IMAGES[getRandomInt(IMAGES.length)]

document.getElementById('text').innerText = randomText
document.getElementById('image').src = 'images/' + randomImage
