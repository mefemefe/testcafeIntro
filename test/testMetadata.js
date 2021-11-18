fixture
    .meta('version', '1')
    ("First Fixture")
    .page("https://devexpress.github.io/testcafe/");

test
    .meta('env', 'production')
    .page("https://devexpress.github.io/testcafe/example/")
    ("First test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
});