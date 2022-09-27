const { sleep, keyboard, Key , screen, Region } = require("@nut-tree/nut-js");
const textract = require('textract');

var timestamp = new Date().getTime();

async function go() {
    while(1==1) {

        var timestamp = new Date().getTime();
        let filename = 'tmp'+timestamp +'.png'
        await sleep(500)
    await screen.captureRegion(filename, new Region(10, 40, 140, 45))

    textract.fromFileWithPath(filename, function (err, text) {
        if (err) {
            console.log(err);
        } else {
            console.log(text.split());
        }
    })
}
}

go();


/* function go() {
    await sleep(2000)
}

go();*/