const letters = [
    "a", "n", "k", "p", "m", "h", "h", "t", "a", "b",
    "a", "p", "f", "q", "w", "v", "d", "t", "s", "c",
    "b", "e", "g", "v", "x", "c", "u", "e", "v", "r",
    "z", "c", "m", "w", "y", "z", "d", "n", "q", "n",
    "p", "a", "d", "p", "birds", "e", "b", "i", "p",
    "z", "c", "m", "w", "y", "z", "d", "n", "q", "n",
]

for(i = 0; i < letters.length; i++) {
    const letter = document.createElement("div")
    letter.classList.add('alphabet__letter')
    letter.textContent = letters[i]
    document.querySelector('.alphabet').appendChild(letter)
}