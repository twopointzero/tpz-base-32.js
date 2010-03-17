TpzBase32ConstantsTest = TestCase("tpzBase32 constants test", {
    encodingAlphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",

    testThatTheTestProjectCodeHasTheCorrectAlphabet: function () {
        // A seemingly silly test, but I've seen typos creep into codebases
        // on enough occasions to know that silly can still be valuable.
        assertEquals(this.encodingAlphabet, tpzBase32.encodingAlphabet);
    }
});