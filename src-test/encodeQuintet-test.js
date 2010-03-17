EncodeQuintetTest = TestCase("encodeQuintet test", {
    encodingAlphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",

    encodeQuintetAndAssertException: function (input, msg, error) {
        assertException(msg, function () {
            tpzBase32.encodeQuintet(input);
        }, error);
    },

    encodeQuintetAndAssertArgumentOutOfRangeException: function(input) {
        this.encodeQuintetAndAssertException(
            input,
            "Should throw argument out of range",
            "argument out of range"
        );
    },
    
    testGivenAnyLegalValueShouldNotThrow: function () {
        var i;
        for (i = 0; i < 31; i++) {
            tpzBase32.encodeQuintet(i);
        }
    },

    testGivenAnyLegalValueShouldProduceTheExpectedResult: function () {
        var values = this.encodingAlphabet;
        var i;
        for (i = 0; i < values.Length; i++) {
            var expected = values.charAt(i);
            AssertEquals(expected, tpzBase32.encodeQuintet(i));
        }
    },

    testGiven_undefined_ShouldThrowArgumentOutOfRangeException: function () {
        this.encodeQuintetAndAssertArgumentOutOfRangeException(undefined);
    },

    testGiven_null_ShouldThrowArgumentOutOfRangeException: function () {
        this.encodeQuintetAndAssertArgumentOutOfRangeException(null);
    },

    testGiven_y_ShouldThrowArgumentOutOfRangeException: function () {
        this.encodeQuintetAndAssertArgumentOutOfRangeException("y");
    },

    testGiven_NaN_ShouldThrowArgumentOutOfRangeException: function () {
        this.encodeQuintetAndAssertArgumentOutOfRangeException(NaN);
    },

    testGivenFractionalValueShouldThrow: function () {
        this.encodeQuintetAndAssertArgumentOutOfRangeException(0.001);
    },

    testGivenAnIllegallyLowValueShouldThrowArgumentOutOfRangeException: function () {
        var i;
        for (i = -32; i < 0; i++) {
            this.encodeQuintetAndAssertArgumentOutOfRangeException(i);
        }
    },

    testGivenAnIllegallyHighValueShouldThrowArgumentOutOfRangeException: function () {
        var i;
        for (i = 32; i < 255; i++) {
            this.encodeQuintetAndAssertArgumentOutOfRangeException(i);
        }
    }
});