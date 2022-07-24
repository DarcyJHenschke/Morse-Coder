import { textToMorse, morseToText } from "./testing";

import { library, libraryReversed } from "./pure-functions";

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
            textToMorse(
                "please remove all non alphanumeric characters .//.-;''';",
                library,
            ),
        ).toBe(
            ".--. .-.. . .- ... . / .-. . -- --- ...- . / .- .-.. .-.. / -. --- -. / .- .-.. .--. .... .- -. ..- -- . .-. .. -.-. / -.-. .... .- .-. .- -.-. - . .-. ... /  ",
        );
    });
    test("should automatically format spaces between characters", () => {
        expect(
            textToMorse(
                "please remove all non alphanumeric characters .//.-;''';",
                library,
            ),
        ).toBe(
            ".--. .-.. . .- ... . / .-. . -- --- ...- . / .- .-.. .-.. / -. --- -. / .- .-.. .--. .... .- -. ..- -- . .-. .. -.-. / -.-. .... .- .-. .- -.-. - . .-. ... /  ",
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

decribe(
    "tests of morse to text function for functionality and edge cases",
    () => {
        test("should convert string of morse to text", () => {
            expect(
                morseToText(
                    "- .... .. ... / ... .... --- ..- .-.. -.. / -.-. --- -. ...- . .-. - / - --- / - . -..- -",
                    libraryReversed,
                ),
            ).toBe("this should convert to text");
        });
        test("should format consecutive spaces as a single space", () => {
            expect(morseToText(".           .", libraryReversed)).toBe("ee");
            expect(morseToText("./.     /.", libraryReversed)).toBe("e e e");
        });
        test("should handle convert forward slashes to a space regardless of whether there is spacing around it", () => {
            expect(morseToText("././.", libraryReversed)).toBe("e e e");
            expect(morseToText(". / . / .", libraryReversed)).toBe("e e e");
        });
        test("should convert string of morse to text", () => {
            expect(
                morseToText(
                    "- .... .. ... / ... .... --- ..- .-.. -.. / -.-. --- -. ...- . .-. - / - --- / - . -..- -",
                    libraryReversed,
                ),
            ).toBe("this should convert to text");
        });
    },
);
