function checkCharacter() {
    let ch = document.getElementById("charInput").value;
    ch = ch.toLowerCase();

    let result = document.getElementById("result");

    if (ch === "") {
        result.innerHTML = "Please enter a character.";
    }
    else if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u"
    ) {
        result.innerHTML = ch + " is a Vowel.";
    }
    else {
        result.innerHTML = ch + " is a Consonant.";
    }
}