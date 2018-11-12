const electron = require('electron');

const { app } = electron

module.exports = mainWindow => {
    const name = app.getName()
    const template = [
        {
            label: name,
            submenu: [
                {
                    label: 'About' + name,
                    role: 'about'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Hide ' + name,
                    accelerator: 'Command+H',
                    role: 'hide'
                },
                {
                    label: 'Hide Others',
                    accelerator: 'Command+Shift+H',
                    role: 'hideothers'
                },
                {
                    label: 'Show All',
                    role: 'unhide'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Quit',
                    accelerator: 'Command+Q',
                    click: _ => { app.quit() }
                }
            ]
        }
    ];

    return template;
}