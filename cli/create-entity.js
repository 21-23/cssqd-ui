const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const vfs = require('vinyl-fs');

const apps = require('../apps.json');
const bootstrap = require('./bootstrap-fs');
const { toCamelCase } = require('./utils');

let onArgsReceived = () => {};

const args = new Promise(resolve => {
    onArgsReceived = resolve;
});

process.on('message', message => onArgsReceived(message));

(async () => {
    let { entity, name, app } = await args;

    if (!name || !app) {
        const answer = await inquirer.prompt([
            {
                message: `${toCamelCase(entity).CamelCase} name? (train-case)`,
                name: 'name',
                type: 'input',
            },
            {
                message: 'In which app?',
                type: 'list',
                choices: [...apps.map(app => app.filename), 'shared'],
                name: 'app',
            },
        ]);

        name = answer.name;
        app = answer.app;
    }

    const { camelCase, CamelCase } = toCamelCase(name);

    bootstrap({
        src: path.join(__dirname, `./app-module-template/${entity}/__#{**`),
        dest: path.join(__dirname, `../src/${app}/${entity}`),
        vars: {
            name,
            camelCaseName: camelCase,
            CamelCaseName: CamelCase,
        },
        filenamePrefix: '__#',
        done() {
            process.send({ name, app });
        },
    });
})();
