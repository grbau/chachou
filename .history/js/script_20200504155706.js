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