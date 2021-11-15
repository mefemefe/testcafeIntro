import {Selector} from 'testcafe';

const iframeName = Selector('#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body');

fixture("iframe Fixture")
    .page("https://the-internet.herokuapp.com/iframe");

test("iframe Test", async t => {
    await t
        .switchToIframe(iframeName)
        .click(textArea)
        .pressKey('ctrl+a delete')
        .typeText(textArea, 'Hello World')
        .expect(textArea.innerText).contains('Hello')
        .switchToMainWindow();
});