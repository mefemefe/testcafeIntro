import {Selector} from 'testcafe';

const triedCheckbox = Selector('label').withText('I have tried TestCafe');
const slider = Selector('#slider');

fixture("Drag Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("Drag Test", async t => {
    await t
        .setTestSpeed(0.5)
        .click(triedCheckbox)
        .drag(slider,360,0, {offestX: 10, offsetY: 10})
})