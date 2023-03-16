const cardArray = [
    {
        name: 'bag',
        img: 'images/bag.jpg',
    },
    {
        name: 'bottle',
        img: 'images/bottle.jpg',
    },
    {
        name: 'cap',
        img: 'images/cap.jpg',
    },
    {
        name: 'earpod',
        img: 'images/earpod.jpg',
    },
    {
        name: 'polo',
        img: 'images/polo.jpg',
    },
    {
        name: 'sneaker',
        img: 'images/sneakers.jpg',
    },
    {
        name: 'bag',
        img: 'images/bag.jpg',
    },
    {
        name: 'bottle',
        img: 'images/bottle.jpg',
    },
    {
        name: 'cap',
        img: 'images/cap.jpg',
    },
    {
        name: 'earpod',
        img: 'images/earpod.jpg',
    },
    {
        name: 'polo',
        img: 'images/polo.jpg',
    },
    {
        name: 'sneaker',
        img: 'images/sneakers.jpg',
    } 
]
    

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsPicked = []
let cardsPickedId = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/green.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsPickedId[0]
    const optionTwoId = cardsPickedId[1]

    if(optionOneId == optionTwoId){
        alert('you have clicked the image')
    }

    if(cardsPicked[0] == cardsPicked[1]){
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsPicked)
    }else{
        cards[optionOneId].setAttribute('src', 'images/green.jpg')
        cards[optionTwoId].setAttribute('src', 'images/green.jpg')
        alert('sorry try again')
    }
    resultDisplay.textContent = cardsWon.length
    cardsPicked = []
    cardsPickedId = []
    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'congratulatiions you have them all'
        location.reload()
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsPicked.push(cardArray[cardId].name)
    cardsPickedId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsPicked.length === 2) {
        setTimeout( checkMatch, 500)
    }
}