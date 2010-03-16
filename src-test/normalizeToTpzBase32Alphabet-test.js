NormalizeToTpzBase32AlphabetTest = TestCase("normalizeToTpzBase32Alphabet test", {
    encodingAlphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    
    normalizeToTpzBase32Alphabet: function (values, expecteds) {
        var i;
        for (i = 0; i < values.Length; i++) {
            var input = values.charAt(i);
            var expected = expecteds.charAt(i);
            var actual = tpzBase32.normalizeToTpzBase32Alphabet(input);
            var msg = "Expected " + expected + " but actual was " + actual + ". Input was " + input + ".";
            assertEquals(msg, expected, actual);
        }
    },

    normalizeAndAssertException: function (input, msg, error) {
        assertException(msg, function () {
            tpzBase32.normalizeToTpzBase32Alphabet(input);
        }, error);
    },

    normalizeAndAssertArgumentOutOfRangeException: function(input) {
        this.normalizeAndAssertException(
            input,
            "Should throw argument out of range",
            "argument out of range"
        );
    },

    testGivenAValueEntirelyOutsideTheCharacterSetShouldReturnIt: function () {
        var values = "!@#$";
        this.normalizeToTpzBase32Alphabet(values, values);
    },

    testGivenAValueInTheEncodingAlphabetShouldReturnIt: function () {
        var values = this.encodingAlphabet;
        this.normalizeToTpzBase32Alphabet(values, values);
    },

    testGivenAValueThatShouldBeNormalizedToTpzBase32AlphabetShouldReturnItAsExpected: function () {
        this.normalizeToTpzBase32Alphabet("0l2v", "o1zu");
    },

    testGivenAnUppercasedValueInTheEncodingAlphabetShouldReturnItLowercased: function () {
        var values = this.encodingAlphabet.toUpperCase();
        var expecteds = this.encodingAlphabet;
        this.normalizeToTpzBase32Alphabet(values, expecteds);
    },

    testGivenAnUppercasedValueThatShouldBeNormalizedToTpzBase32AlphabetShouldReturnItAsExpected: function () {
        this.normalizeToTpzBase32Alphabet("0L2V", "o1zu");
    },
    
    testGiven_undefined_ShouldThrow: function () {
        this.normalizeAndAssertArgumentOutOfRangeException(undefined);
    },

    testGiven_null_ShouldThrow: function () {
        this.normalizeAndAssertArgumentOutOfRangeException(null);
    },

    testGivenNonStringShouldThrow: function () {
        this.normalizeAndAssertArgumentOutOfRangeException(42);
    },
    
    testGivenEmptyStringShouldThrow: function () {
        this.normalizeAndAssertArgumentOutOfRangeException("");
    },

    testGivenAboveMaxLengthShouldThrow: function () {
        this.normalizeAndAssertArgumentOutOfRangeException("yy");
    }
});