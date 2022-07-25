import { textToMorse, morseToText } from "./pure-functions.js";

import { library, libraryReversed } from "./library.js";

describe("tests of text to morse function for functionality and edge cases", () => {
    test("should convert string of text to morse code", () => {
        expect(
            textToMorse("please convert this string to morse", library),
        ).toBe(
            ".--. .-.. . .- ... . / -.-. --- -. ...- . .-. - / - .... .. ... / ... - .-. .. -. --. / - --- / -- --- .-. ... .",
        );
    });
    test("unwanted characters should not impact conversion", () => {
        expect(
            textToMorse("this7 shou9ld d897isregard all3 n1umbers", library),
        ).toBe(
            "- .... .. ... / ... .... --- ..- .-.. -.. / -.. .. ... .-. . --. .- .-. -.. / .- .-.. .-.. / -. ..- -- -... . .-. ...",
        );
    });
    test("should automatically format spaces between characters", () => {
        expect(
            textToMorse(
                "there should be spaces between morse code for each character",
                library,
            ),
        ).toBe(
            "- .... . .-. . / ... .... --- ..- .-.. -.. / -... . / ... .--. .- -.-. . ... / -... . - .-- . . -. / -- --- .-. ... . / -.-. --- -.. . / ..-. --- .-. / . .- -.-. .... / -.-. .... .- .-. .- -.-. - . .-.",
        );
    });
    test("should handle capital letters", () => {
        expect(
            textToMorse(
                "AlL oF THese CaPiTalS LEtteRS SHouLd Be CONVerted",
                library,
            ),
        ).toBe(
            ".- .-.. .-.. / --- ..-. / - .... . ... . / -.-. .- .--. .. - .- .-.. ... / .-.. . - - . .-. ... / ... .... --- ..- .-.. -.. / -... . / -.-. --- -. ...- . .-. - . -..",
        );
    });
});

describe("tests of morse to text function for functionality and edge cases", () => {
    test("should convert string of morse to text", () => {
        expect(
            morseToText(
                "- .... .. ... / ... .... --- ..- .-.. -.. / -.-. --- -. ...- . .-. - / - --- / - . -..- -",
                libraryReversed,
            ),
        ).toBe("this should convert to text");
    });
    test("excessive white space should be reduced to a single space", () => {
        expect(morseToText(".           .", libraryReversed)).toBe("ee");
        expect(morseToText("./.     /.", libraryReversed)).toBe("e e e");
    });
    test("should convert forward slashes to a space regardless of whether there is spacing around it", () => {
        expect(morseToText("././.", libraryReversed)).toBe("e e e");
        expect(morseToText(". / . / .", libraryReversed)).toBe("e e e");
    });
    test("should still convert even if letters and numbers are in the string", () => {
        expect(
            morseToText(
                "- aa.... .. b... / .. .de.. / .- / .ef.. - .-. z.. -. --.c",
                libraryReversed,
            ),
        ).toBe("this is a string");
    });
});
