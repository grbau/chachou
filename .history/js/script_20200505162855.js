const letters = [
    "a", "n", "k", "p", "m", "h", "h", "t", "a", "b",
    "a", "p", "f", "q", "w", "v", "d", "t", "s", "c",
    "b", "e", "g", "v", "x", "c", "u", "e", "v", "r",
    "z", "c", "m", "w", "y", "z", "d", "n", "q", "n",
    "p", "a", "d", "p", "birdsTop", "e", "b", "i", "p",
    "k", "b", "e", "n", "birdsBottom", "j", "f", "n", "o",
    "d", "f", "l", "e", "m", "m", "c", "m", "d", "e",
    "s", "s", "g", "e", "o", "p", "l", "m", "x", "v",
    "i", "p", "i", "h", "a", "k", "g", "d", "r", "m",
]

for(i = 0; i < letters.length; i++) {
    const letter = document.createElement("div")
    letter.classList.add('alphabet__letter')
    letter.textContent = letters[i]
    if (letters[i] === "birdsTop") {
        letter.classList.add('-birdsTop')
    }
    if (letters[i] === "birdsBottom") {
        letter.classList.add('-birdsBottom')
    }
    document.querySelector('.alphabet').appendChild(letter)
}

const colorList = [ '000000', '993300', '333300', '003300', '003366', '000066', '333399', '333333', 
'660000', 'FF6633', '666633', '336633', '336666', '0066FF', '666699', '666666', 'CC3333', 'FF9933', '99CC33', '669966', '66CCCC', '3366FF', '663366', '999999', 'CC66FF', 'FFCC33', 'FFFF66', '99FF66', '99CCCC', '66CCFF', '993366', 'CCCCCC', 'FF99CC', 'FFCC99', 'FFFF99', 'CCffCC', 'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF' ]

for (let i = 0; i < colorList.length; i++ ) {
    const colorPicker = document.createElement("ul")
    colorPicker.classList.add('colorPicker')
    const color = document.createElement("li")
    color.classList.add('colorPicker__item')
    color.setAttribute("data-hex", '#' + + colorList[i] + '')
    color.style.background = '#' + colorList[i] + ''
    colorPicker.appendChild(color)
}

const colorPicker = document.querySelector('.colorPicker')

const words = document.querySelectorAll('.alphabet__letter')

document.querySelector('body').addEventListener('click', function() {
    colorPicker.remove
})

words.forEach(word => {
    word.append(colorPicker)
    word.addEventListener('click', function() {
        colorPicker.classList.add('-active')
    })
})
