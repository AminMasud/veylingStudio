const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const window = new BrowserWindow({
        width: 1000,
        height: 700,
    });

    window.loadFile(path.join(__dirname, "../renderer/index.html"));
}

app.whenReady().then(() => {
    createWindow();
});