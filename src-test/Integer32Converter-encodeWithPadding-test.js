Integer32ConverterEncodeWithPaddingTest = TestCase("Integer32Converter.encodeWithPadding test", {
    encodeAndAssertEquals: function (input, expected) {
        var converter = new tpzBase32.Integer32Converter();
        var actual = converter.encodeWithPadding(input);
        assertEquals(expected, actual);
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
    
    testGivenOneShouldEncodeTo_byyyyyy: function () {
        this.encodeAndAssertEquals(1, "byyyyyy");
    },
    
    testGivenThirtyTwoToTheFifthShouldEncodeTo_yyyyyby: function () {
        this.encodeAndAssertEquals(33554432, "yyyyyby");
    },
    
    testGivenThirtyTwoToTheFirstShouldEncodeTo_ybyyyyy: function () {
        this.encodeAndAssertEquals(32, "ybyyyyy");
    },
    
    testGivenThirtyTwoToTheFourthShouldEncodeTo_yyyybyy: function () {
        this.encodeAndAssertEquals(1048576, "yyyybyy");
    },
    
    testGivenThirtyTwoToTheSecondShouldEncodeTo_yybyyyy: function () {
        this.encodeAndAssertEquals(1024, "yybyyyy");
    },
    
    testGivenThirtyTwoToTheSixthShouldEncodeTo_yyyyyyb: function () {
        this.encodeAndAssertEquals(1073741824, "yyyyyyb");
    },
    
    testGivenThirtyTwoToTheThirdShouldEncodeTo_yyybyyy: function () {
        this.encodeAndAssertEquals(32768, "yyybyyy");
    },
    
    testGivenZeroShouldEncodeTo_yyyyyyy: function () {
        this.encodeAndAssertEquals(0, "yyyyyyy");
    },
    
    testGiven_853561428_ShouldEncodeTo_wnwyq3y: function () {
        this.encodeAndAssertEquals(853561428, "wnwyq3y");
    },

    encodeAndAssertException: function (input, msg, error) {
        var converter = new tpzBase32.Integer32Converter();
        assertException(msg, function () {
            converter.encodeWithPadding(input);
        }, error);
    },

    encodeAndAssertArgumentOutOfRangeException: function(input) {
        this.encodeAndAssertException(
            input,
            "Should throw argument out of range",
            "argument out of range"
        );
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
