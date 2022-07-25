import { textToMorse, morseToText } from "./pure-functions.js";
import { library, libraryReversed } from "./library.js";

const text = document.getElementById("text");
const morse = document.getElementById("morse");
const buttons = document.querySelectorAll(".button");

text.addEventListener("input", () => {
    morse.value = textToMorse(text.value, library);
});

// takes string input value in text area and runs it throug the pure function which converts it
morse.addEventListener("input", () => {
    text.value = morseToText(morse.value, libraryReversed);
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
        text.value = morseToText(morse.value, libraryReversed);
    }

    if (buttonText === "-") {
        morse.value += "-";
        text.value = morseToText(morse.value, libraryReversed);
    }
    if (buttonText === "Space") {
        morse.value += " ";
        text.value = morseToText(morse.value, libraryReversed);
    }
    if (buttonText === "Break") {
        morse.value += "/";
        text.value = morseToText(morse.value, libraryReversed);
    }

    if (buttonText === "Del") {
        morse.value = morse.value
            .trim()
            .substring(0, morse.value.trim().length - 1);

        text.value = morseToText(morse.value, libraryReversed);
    }
}
