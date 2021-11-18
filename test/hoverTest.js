fixture("Hover fixture")
    .page("https://devexpress.github.io/testcafe/example");

test("Hover test", async t => {
    await t
        .setTestSpeed(0.5)
        .hover("#populate");
});