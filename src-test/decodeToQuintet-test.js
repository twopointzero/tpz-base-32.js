DecodeToQuintetTest = TestCase("decodeToQuintet test", {
    encodingAlphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",

    decodeAndAssertException: function (input, msg, error) {
        assertException(msg, function () {
            tpzBase32.decodeToQuintet(input);
        }, error);
    },

    decodeAndAssertArgumentOutOfRangeException: function(input) {
        this.decodeAndAssertException(
            input,
            "Should throw argument out of range",
            "argument out of range"
        );
    },

    testGivenACharacterInTheEncodingShouldReturnTheExpectedValue: function () {
        var values = this.encodingAlphabet;
        var i;
        for (i = 0; i < values.Length; i++) {
            var input = values[i];
            var expected = i;
            Assert.AreEqual(expected, tpzBase32.decodeToQuintet(input));
        }
    },

    testGiven_undefined_ShouldThrow: function () {
        this.decodeAndAssertArgumentOutOfRangeException(undefined);
    },

    testGiven_null_ShouldThrow: function () {
        this.decodeAndAssertArgumentOutOfRangeException(null);
    },

    testGivenNonStringShouldThrow: function () {
        this.decodeAndAssertArgumentOutOfRangeException(42);
    },
    
    testGivenEmptyStringShouldThrow: function () {
        this.decodeAndAssertArgumentOutOfRangeException("");
    },

    testGivenAboveMaxLengthShouldThrow: function () {
        this.decodeAndAssertArgumentOutOfRangeException("yy");
    },

    testGivenACharacterNotInTheEncodingShouldThrowArgumentOutOfRangeException: function () {
        this.decodeAndAssertArgumentOutOfRangeException("!");
    }
});
