fixture("Speed Fixture")
    .page("https://devexpress.github.io/testcafe/");

test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Speed test", async t => {
    await t
        .setTestSpeed(0.5)
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
});