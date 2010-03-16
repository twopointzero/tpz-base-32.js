Integer32ConverterEncodeTest = TestCase("Integer32Converter.encode test", {
    encodeAndAssertEquals: function (input, expected) {
        var converter = new tpzBase32.Integer32Converter();
        var actual = converter.encode(input);
        assertEquals(expected, actual);
    },

    encodeAndAssertException: function (input, msg, error) {
        var converter = new tpzBase32.Integer32Converter();
        assertException(msg, function () {
            converter.encode(input);
        }, error);
    },

    encodeAndAssertArgumentOutOfRangeException: function(input) {
        this.encodeAndAssertException(
            input,
            "Should throw argument out of range",
            "argument out of range"
        );
    },

    testGivenMaxValueShouldEncodeTo_999999b: function () {
        this.encodeAndAssertEquals(2147483647, "999999b");
    },

    testGivenMinValueShouldEncodeTo_yyyyyyn: function () {
        this.encodeAndAssertEquals(-2147483648, "yyyyyyn");
    },
    
    testGivenNegativeOneShouldEncodeTo_999999d: function () {
        this.encodeAndAssertEquals(-1, "999999d");
    },
    
    testGivenOneShouldEncodeTo_b: function () {
        this.encodeAndAssertEquals(1, "b");
    },
    
    testGivenThirtyTwoToTheFifthShouldEncodeTo_yyyyyb: function () {
        this.encodeAndAssertEquals(33554432, "yyyyyb");
    },
    
    testGivenThirtyTwoToTheFirstShouldEncodeTo_yb: function () {
        this.encodeAndAssertEquals(32, "yb");
    },
    
    testGivenThirtyTwoToTheFourthShouldEncodeTo_yyyyb: function () {
        this.encodeAndAssertEquals(1048576, "yyyyb");
    },
    
    testGivenThirtyTwoToTheSecondShouldEncodeTo_yyb: function () {
        this.encodeAndAssertEquals(1024, "yyb");
    },
    
    testGivenThirtyTwoToTheSixthShouldEncodeTo_yyyyyyb: function () {
        this.encodeAndAssertEquals(1073741824, "yyyyyyb");
    },
    
    testGivenThirtyTwoToTheThirdShouldEncodeTo_yyyb: function () {
        this.encodeAndAssertEquals(32768, "yyyb");
    },
    
    testGivenZeroShouldEncodeTo_y: function () {
        this.encodeAndAssertEquals(0, "y");
    },
    
    testGiven_853561428_ShouldEncodeTo_wnwyq3: function () {
        this.encodeAndAssertEquals(853561428, "wnwyq3");
    },

    testGiven_undefined_ShouldThrow: function () {
        this.encodeAndAssertArgumentOutOfRangeException(undefined);
    },

    testGiven_null_ShouldThrow: function () {
        this.encodeAndAssertArgumentOutOfRangeException(null);
    },

    testGiven_y_ShouldThrow: function () {
        this.encodeAndAssertArgumentOutOfRangeException("y");
    },

    testGiven_NaN_ShouldThrow: function () {
        this.encodeAndAssertArgumentOutOfRangeException(NaN);
    },

    testGivenBelowMinValueShouldThrow: function () {
        this.encodeAndAssertArgumentOutOfRangeException(-2147483649);
    },

    testGivenAboveMaxValueShouldThrow: function () {
        this.encodeAndAssertArgumentOutOfRangeException(2147483648);
    },

    testGivenFractionalValueShouldThrow: function () {
        this.encodeAndAssertArgumentOutOfRangeException(0.001);
    }
});
