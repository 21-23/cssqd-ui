const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const apps = require('../apps.json');
const bootstrap = require('./bootstrap-fs');
const { toCamelCase } = require('./utils');

(async () => {
    const { name } = await inquirer.prompt([{
        message: 'App name? (train-case)',
        name: 'name',
        type: 'input',
    }]);

    const camelCaseName = toCamelCase(name);

    bootstrap({
        src: path.join(__dirname, `./app-module-template/**/#{*`),
        dest: path.join(__dirname, `../src/${name}`),
        vars: { name, camelCaseName },
    });

    if (apps.indexOf(name) !== -1) {
        console.log(`Sorry, app ${name} already exists`);
        return;
    }

    apps.push(name);

    fs.writeFileSync(
        path.join(__dirname, '../apps.json'),
        JSON.stringify(apps, null, 2),
    );
})();
