import {Selector, ClientFunction} from 'testcafe';

const developerName = Selector('#developer-name');
const macos = Selector('#macos');
const submitButton = Selector('#submit-button');

const getPageURL = ClientFunction(() => document.location.href);

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First test", async t => {
    await t
        .typeText(developerName, "TAU")
        .click(macos)
        .click(submitButton)
        .expect(getPageURL()).contains('thank-you');
});