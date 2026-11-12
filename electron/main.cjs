const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("path");
const sqlite = require('better-sqlite3');
const dbDirName = path.join(__dirname, 'kard.db');

const db = new sqlite(dbDirName);

function CreateWindow() {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  window.loadURL("http://localhost:5173")
}


app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong');
  ipcMain.handle('get-words', () => getWords());
  ipcMain.handle('append-word', handleAppendWord);
  CreateWindow();
})


function handleAppendWord(event, gender, danish, english) {
  const appendStmt = db.prepare('INSERT INTO words (gender, danish, english) VALUES (?, ?, ?)');
  console.log('gender is ' + gender + ', danish is ' + danish + ' and english is ' + english);
  console.log(gender);
  appendStmt.run(gender, danish, english);
}

function getWords() {
  console.log(process.cwd());
  try {
    const resultStmn = db.prepare('SELECT * FROM words')
    return resultStmn.all();
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
}