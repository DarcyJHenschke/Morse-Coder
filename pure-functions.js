export const library = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    " ": "/",
};

// these reverse the library to make it easier to access the reverse values
export const libraryReverser = (obj) =>
    Object.fromEntries(Object.entries(obj).map((a) => a.reverse()));

export const libraryReversed = libraryReverser(library);

const text = document.getElementById("text");
const morse = document.getElementById("morse");
const buttons = document.querySelectorAll(".button");

// takes string input value in text area and runs it throug the pure function which converts it
text.addEventListener("input", () => {
    morse.value = textToMorse(text.value, library);
});

// takes string input value in text area and runs it throug the pure function which converts it
morse.addEventListener("input", () => {
    text.value = morseToText(morse.value);
});

// functionality for buttons when clicked
buttons.forEach((button) => {
    button.addEventListener("click", buttonFunctions);
});

// each buttons individual function
function buttonFunctions() {
    let buttonText = this.innerText;

    if (buttonText === "Clear") {
        text.value = "";
        morse.value = "";
    }

    if (buttonText === ".") {
        morse.value += ".";
        text.value = morseToText(morse.value);
    }

    if (buttonText === "-") {
        morse.value += "-";
        text.value = morseToText(morse.value);
    }
    if (buttonText === "Space") {
        morse.value += " ";
        text.value = morseToText(morse.value);
    }
    if (buttonText === "Break") {
        morse.value += "/";
        text.value = morseToText(morse.value);
    }
}

// pure function for text to morse
export function textToMorse(text, library = library) {
    return text
        .replaceAll(".", "")
        .replaceAll("-", "")
        .replaceAll(/[0-9]/g, "")
        .toUpperCase()
        .split("")
        .map((chara) => (chara = library[chara]))
        .join(" ");
}

// pure function for morse to text
export function morseToText(morse, library = libraryReversed) {
    return morse
        .replaceAll(/[0-9]/g, "")
        .replaceAll(/[a-z]/g, "")
        .replaceAll("/", " / ")
        .split(" ")
        .map((chara) => (chara = library[chara]))
        .join("")
        .toLowerCase();
}
