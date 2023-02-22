const palindromes = function (string) {
    const modString = string.toLowerCase().replace(/[^a-z]/g, "");
        return (
            modString
                .split("")
                .reverse()
                .join("") === modString
        );

};

// Do not edit below this line
module.exports = palindromes;
