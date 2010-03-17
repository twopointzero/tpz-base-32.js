tpzBase32 = {
    encodingAlphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    quintetMask: 31
};

tpzBase32.encodeQuintet = function (quintet) {
    if (typeof quintet !== "number" || isNaN(quintet) ||
        quintet < 0 || quintet > 31 ||
        quintet % 1 !== 0) {
        throw {
            name: "argument out of range",
            message: "An integer between 0 and 31 inclusive is required."
        };
    }

    return tpzBase32.encodingAlphabet.charAt(quintet);
};

tpzBase32.normalizeToTpzBase32Alphabet = function (encodedCharacter) {
    if (typeof encodedCharacter !== "string" ||
        encodedCharacter.length === 0 || encodedCharacter.length > 1) {
        throw {
            name: "argument out of range",
            message: "The input argument must be a single character."
        };
    }

    if (encodedCharacter === "0") {
        return "o";
    }
    if (encodedCharacter === "l" || encodedCharacter === "L") {
        return "1";
    }
    if (encodedCharacter === "2") {
        return "z";
    }
    if (encodedCharacter === "v" || encodedCharacter === "V") {
        return "u";
    }

    return encodedCharacter.toLowerCase();
};

tpzBase32.decodeToQuintet = function (encodedCharacter) {
    if (typeof encodedCharacter !== "string" ||
        encodedCharacter.length === 0 || encodedCharacter.length > 1) {
        throw {
            name: "argument out of range",
            message: "The input argument must be a single character."
        };
    }

    var normalizedEncodedCharacter = tpzBase32.normalizeToTpzBase32Alphabet(encodedCharacter);
    var index = tpzBase32.encodingAlphabet.indexOf(normalizedEncodedCharacter);

    if (index === -1) {
        throw {
            name: "argument out of range",
            message: "The following is not a member of the encoding alphabet: " +
                encodedCharacter
        };
    }

    return index;
};

tpzBase32.Integer32Converter = function () {};

tpzBase32.Integer32Converter.prototype.encode = function (input) {
    return this.encode(input, false);
};

tpzBase32.Integer32Converter.prototype.encodeWithPadding = function (input) {
    return this.encode(input, true);
};

tpzBase32.Integer32Converter.prototype.encode = function (input, includePadding) {
    if (typeof input !== "number" || isNaN(input) ||
        input < -2147483648 || input > 2147483647 ||
        input % 1 !== 0) {
        throw {
            name: "argument out of range",
            message: "The input argument must be a non-NaN 32 bit integer value."
        };
    }

    if (input === 0) {
        zero = tpzBase32.encodingAlphabet.charAt(0);
        return includePadding
            ? [zero, zero, zero, zero, zero, zero, zero].join("")
            : zero;
    }

    var i;
    var result = ["!", "!", "!", "!", "!", "!", "!"];
    for (i = 0; i < 7; i++) {
        var quintet = (input >>> (5 * i)) & tpzBase32.quintetMask;
        result[i] = tpzBase32.encodeQuintet(quintet);
        if (!includePadding && (input > 0 && input < (1 << (5 * (i + 1))))) {
            return result.slice(0, i + 1).join("");
        }
    }

    return result.join("");
};

tpzBase32.Integer32Converter.prototype.decode = function (input) {
    if (typeof input !== "string" ||
        input.length === 0 || input.length > 7) {
        throw {
            name: "argument out of range",
            message: "The input argument must be a string of between 1 and 7 (inclusive) characters within the encoding alphabet."
        };
    }

    var i;
    var result = 0;
    for (i = 0; i < input.length; i++) {
        var quintet = tpzBase32.decodeToQuintet(input.charAt(i));
        result |= quintet << (5 * i);
    }
    return result;
};
