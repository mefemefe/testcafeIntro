import { Selector } from "testcafe";

const fileUpload = Selector("#file-upload");
const uploadFileButton = Selector("#file-submit.button");

fixture("File Upload Fixture")
    .page("https://the-internet.herokuapp.com/upload")

test("File upload Test", async t => {
    await t
        .setFilesToUpload(fileUpload, "C:\\Users\\mefe\\Documents\\js\\TestCafe Demo\\upload\\halloween.jpg")
        .click(uploadFileButton);
})