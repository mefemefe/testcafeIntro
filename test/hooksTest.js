fixture
    ("Hooks Fixture")
    .page("https://devexpress.github.io/testcafe/")
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .setTestSpeed(0.5)
            .setPageLoadTimeout(0);
    });

test
    .meta('env', 'production')
    .page("https://devexpress.github.io/testcafe/example/")
    ("First test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
});

test
    .page("https://devexpress.github.io/testcafe/example/")
    ("First test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
});