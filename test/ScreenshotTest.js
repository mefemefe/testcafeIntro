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
        .typeText("#developer-name", "mefemefe")
        .click("#macos")
        .click("#submit-button")
        .takeScreenshot();
});

test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Second test", async t => {
    await t
        .typeText("#developer-name", "mefemefe")
        .click("#macos")
        .takeElementScreenshot("#submit-button")
        .click("#submit-button");
});

//-s takeOnFails=true

// --video folder/videos