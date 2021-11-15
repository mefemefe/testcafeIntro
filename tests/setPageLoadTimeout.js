fixture("Timeout Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test
    ("Timeout test", async t => {
    await t
        .setPageLoadTimeout(5000)
        .navigateTo("http://www.google.com/");
});