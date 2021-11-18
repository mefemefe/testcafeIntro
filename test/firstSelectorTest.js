import {Selector} from 'testcafe';

const developerName = Selector('#developer-name');
const macos = Selector('#macos');
const submitButton = Selector('#submit-button');

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First test", async t => {
    await t
        .typeText(developerName, "TAU")
        .click(macos)
        .click(submitButton);
});