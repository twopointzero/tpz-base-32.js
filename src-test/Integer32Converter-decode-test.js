Integer32ConverterDecodeTest = TestCase("Integer32Converter.decode test", {
    decodeAndAssertEquals: function (input, expected) {
        var converter = new tpzBase32.Integer32Converter();
        var actual = converter.decode(input);
        assertEquals(expected, actual);
    },
    
    // testEmptyShouldThrowArgumentOutOfRangeException()
    // {
        // Assert.Throws<ArgumentOutOfRangeException>(() => Int32Converter.DecodeToInt32(string.Empty));
    // }
    
    // testNullShouldThrowArgumentNullException()
    // {
        // Assert.Throws<ArgumentNullException>(() => Int32Converter.DecodeToInt32(null));
    // }
    
    // testOverlongButOtherwiseValidShouldThrowArgumentOutOfRangeException()
    // {
        // Assert.Throws<ArgumentOutOfRangeException>(() => Int32Converter.DecodeToInt32("yyyyyyyyyyy"));
    // }
    
    // testSupportedLengthButOtherwiseInvalidShouldThrowArgumentOutOfRangeException()
    // {
        // Assert.Throws<ArgumentOutOfRangeException>(() => Int32Converter.DecodeToInt32("yy!yyyy"));
    // }
    
    testGiven_0L2V_ShouldDecodeTo_646736: function () {
        this.decodeAndAssertEquals("0L2V", 646736);
    },
    
    testGiven_999999b_ShouldDecodeTo_MaxValue: function () {
        this.decodeAndAssertEquals("999999b", 2147483647);
    },
    
    testGiven_999999d_ShouldDecodeTo_NegativeOne: function () {
        this.decodeAndAssertEquals("999999d", -1);
    },
    
    testGiven_b_ShouldDecodeTo_1: function () {
        this.decodeAndAssertEquals("b", 1);
    },
    
    testGiven_byyyyyy_ShouldDecodeTo_1: function () {
        this.decodeAndAssertEquals("byyyyyy", 1);
    },
    
    testGiven_y_ShouldDecodeTo_0: function () {
        this.decodeAndAssertEquals("y", 0);
    },

    testGiven_yb_ShouldDecodeTo_ThirtyTwoToTheFirst: function () {
        this.decodeAndAssertEquals("yb", 32);
    },
    
    testGiven_ybyyyyy_ShouldDecodeTo_ThirtyTwoToTheFirst: function () {
        this.decodeAndAssertEquals("ybyyyyy", 32);
    },
    
    testGiven_yyb_ShouldDecodeTo_ThirtyTwoToTheSecond: function () {
        this.decodeAndAssertEquals("yyb", 1024);
    },
    
    testGiven_yybyyyy_ShouldDecodeTo_ThirtyTwoToTheSecond: function () {
        this.decodeAndAssertEquals("yybyyyy", 1024);
    },
    
    testGiven_yyyb_ShouldDecodeTo_ThirtyTwoToTheThird: function () {
        this.decodeAndAssertEquals("yyyb", 32768);
    },
    
    testGiven_yyybyyy_ShouldDecodeTo_ThirtyTwoToTheThird: function () {
        this.decodeAndAssertEquals("yyybyyy", 32768);
    },
    
    testGiven_yyyybyy_ShouldDecodeTo_ThirtyTwoToTheFourth: function () {
        this.decodeAndAssertEquals("yyyybyy", 1048576);
    },
    
    testGiven_yyyyyb_ShouldDecodeTo_ThirtyTwoToTheFifth: function () {
        this.decodeAndAssertEquals("yyyyyb", 33554432);
    },
    
    testGiven_yyyyyby_ShouldDecodeTo_ThirtyTwoToTheFifth: function () {
        this.decodeAndAssertEquals("yyyyyby", 33554432);
    },
    
    testGiven_yyyyyyb_ShouldDecodeTo_ThirtyTwoToTheSixth: function () {
        this.decodeAndAssertEquals("yyyyyyb", 1073741824);
    },
    
    testGiven_yyyyyyn_ShouldDecodeTo_MinValue: function () {
        this.decodeAndAssertEquals("yyyyyyn", -2147483648);
    },
    
    testGiven_yyyyyyy_ZeroShouldDecodeTo_0: function () {
        this.decodeAndAssertEquals("yyyyyyy", 0);
    }
});
