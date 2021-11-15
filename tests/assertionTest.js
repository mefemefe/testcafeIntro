import {Selector} from 'testcafe';

const developerName = Selector('#developer-name');
const macos = Selector('#macos');
const submitButton = Selector('#submit-button');

fixture("assert Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("assert test", async t => {
    await t
        .expect(developerName.value).eql('', 'input is empty')
        .typeText(developerName, "TAU")
        .expect(developerName.value).eql('TAU', 'input is filled')
        .click(macos)
        .click(submitButton);
});