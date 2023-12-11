const os = require('os');
const path = require('path');
const Toastify = require('toastify-js');

// Modulo OS
window.os = {
  homedir: () => os.homedir(),
};

// Modulo Ruta
window.path = {
  join: (...args) => path.join(...args),
};

// Toastify
window.Toastify = {
  toast: (options) => Toastify(options).showToast(),
};

// IPC-like communication (Using window.rpc for example purposes)
window.rpc = {
  send: (channel, data) => {
    // Use Tauri API to communicate to the backend
    // For example:
    // tauri.invoke('ipc', { channel, payload: data });
    console.log(`Sending ${channel} with data:`, data);
  },
  on: (channel, func) => {
    // Simulate receiving IPC messages from the backend
    // For example:
    // tauri.listen('ipc', (event) => {
    //   if (event.channel === channel) {
    //     func(event.payload);
    //   }
    // });
    console.log(`Listening to ${channel}`);
  },
};
