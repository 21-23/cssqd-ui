const path = require('path');
const { fork } = require('child_process');
const inquirer = require('inquirer');

const Command = {
    GENERATE_COMPONENT: 'generate-component',
};

(async () => {
    const { command } = await inquirer.prompt([{
        message: 'How can I help you?',
        name: 'command',
        type: 'list',
        choices: [
            { value: Command.GENERATE_COMPONENT, name: 'Generate component' },
        ]
    }]);

    fork(path.join(__dirname, `${command}.js`), { stdio: 'inherit' })
})();
