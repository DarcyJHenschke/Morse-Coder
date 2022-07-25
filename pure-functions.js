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
