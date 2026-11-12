// so no preload?
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('iMadeAPI', {
  ping:() =>  ipcRenderer.invoke('ping'),
  getWords:() => ipcRenderer.invoke('get-words'),
  electron:() => process.versions.electron,
  appendWord:(gender, dk, eng) => ipcRenderer.invoke('append-word', gender, dk, eng)
});
