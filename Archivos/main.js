const {app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('app/index.html');

    mainWindow.on('closed', ()=>{
        mainWindow = null;
    });s
}

app.whenReady().then(createWindow);

app.on('window-all-closed', ()=>{
    if(process.platform != 'darwin'){
        app.quit();
    }
});

app.on('activate', () =>{
    if(mainWindow === null){
        createWindow();
    }
})
