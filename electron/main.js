const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const window = new BrowserWindow({
        width: 1000,
        height: 700
    });

    if (app.isPackaged) {
        window.loadFile(
            path.join(__dirname, "../renderer/dist/index.html")
        );
    } else {
        window.loadURL("http://localhost:5173");
    }
}

app.whenReady().then(() => {
    createWindow();
});