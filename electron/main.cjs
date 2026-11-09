const { app, BrowserWindow } = require("electron");
const path = require("path");

function CreateWindow() {
  const window = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  window.loadURL("http://localhost:5173")
}


app.whenReady().then(() => {
  CreateWindow();
})