const { sleep, keyboard, Key } = require("@nut-tree/nut-js");
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
};


    async function go() {
        while(1==1) {
            await sleep(2000)
            await keyboard.pressKey(Key.W);
            await sleep(getRandomInt(3000))
            await keyboard.releaseKey(Key.W);
            await sleep(getRandomInt(3000))
            await keyboard.pressKey(Key.W, Key.Q);
            await sleep(getRandomInt(3000))
            await keyboard.pressKey(Key.Space);
            await keyboard.releaseKey(Key.W, Key.Q);
            await sleep(getRandomInt(3000))
            await keyboard.pressKey(Key.Tab);
            await sleep(getRandomInt(2000))
            await keyboard.pressKey(Key.F);
            await keyboard.releaseKey(Key.F);
            await sleep(getRandomInt(1700))
            await keyboard.pressKey(Key.F);
            await keyboard.releaseKey(Key.F);
            await sleep(getRandomInt(1700))
            await keyboard.pressKey(Key.F);
            await keyboard.releaseKey(Key.F);
            await sleep(3000)
            await keyboard.pressKey(Key.H);
            await keyboard.releaseKey(Key.H);
        }
}

go();
