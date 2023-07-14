const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

const resultDisplay = document.querySelector('#result')

let cardChosen = []
let cardChosenIDs = []
const cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        // console.log(card, i)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIDs[0]
    const optionTwoId = cardChosenIDs[1]
    console.log(cards)
    console.log('check for match!')

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You clicked same card')
    }

    if(cardChosen[0] == cardChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    }
    else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again')
    }
    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardChosenIDs = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations'
    }
}

function flipCard(){
    // console.log(cardArray) 
    const cardID = this.getAttribute('data-id')
    // console.log(cardArray[cardID].name)
    cardChosen.push(cardArray[cardID].name)
    cardChosenIDs.push(cardID)
    // console.log('clicked', cardID)
    console.log(cardChosen)
    console.log(cardChosenIDs)
    this.setAttribute('src', cardArray[cardID].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}