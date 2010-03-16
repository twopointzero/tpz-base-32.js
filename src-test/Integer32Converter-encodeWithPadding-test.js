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
    }
});
