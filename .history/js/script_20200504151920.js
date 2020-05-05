const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

for(i = 0; i < letters.length; i++) {
    const letter = document.createElement("div")
    letter.classList.add('alphabet__letter')
    letter.textContent = letters[i]
    document.querySelector('.alphabet').appendChild(letter)
}