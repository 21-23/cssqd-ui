const path = require('path');
const { fork } = require('child_process');
const inquirer = require('inquirer');

const Command = {
    CREATE_PURE_COMPONENT: { value: 'create-pure-component', name: 'Create pure component' },
    CREATE_APP: { value: 'create-app', name: 'Create app' },
    CREATE_ACTIONS: { value: 'create-actions', name: 'Create actions' },
    CREATE_CONSTANTS: { value: 'create-constants', name: 'Create constants' },
    CREATE_CONTAINER: { value: 'create-container', name: 'Create container' },
    CREATE_MIDDLEWARE: { value: 'create-middleware', name: 'Create middleware' },
    CREATE_REDUCER: { value: 'create-reducer', name: 'Create reducer' },
    CREATE_SELECTORS: { value: 'create-selectors', name: 'Create selectors' },
};

const Commands = [
    Command.CREATE_PURE_COMPONENT,
    Command.CREATE_APP,
    Command.CREATE_ACTIONS,
    Command.CREATE_CONSTANTS,
    Command.CREATE_CONTAINER,
    Command.CREATE_MIDDLEWARE,
    Command.CREATE_REDUCER,
    Command.CREATE_SELECTORS,
];

const Entity = {
    ACTIONS: 'actions',
    CONSTANTS: 'constants',
    CONTAINER: 'containers',
    MIDDLEWARE: 'middlewares',
    REDUCER: 'reducers',
    SELECTORS: 'selectors',
};

const CommandToEntityTypeMap = {
    [Command.CREATE_ACTIONS.value]: Entity.ACTIONS,
    [Command.CREATE_CONSTANTS.value]: Entity.CONSTANTS,
    [Command.CREATE_CONTAINER.value]: Entity.CONTAINER,
    [Command.CREATE_MIDDLEWARE.value]: Entity.MIDDLEWARE,
    [Command.CREATE_REDUCER.value]: Entity.REDUCER,
    [Command.CREATE_SELECTORS.value]: Entity.SELECTORS,
};

(async () => {
    const { command } = await inquirer.prompt([
        {
            message: 'How can I help you?',
            name: 'command',
            type: 'list',
            choices: Commands,
        },
    ]);

    const childToFork =
        command in CommandToEntityTypeMap
            ? createEntity(CommandToEntityTypeMap[command])
            : fork(path.join(__dirname, `${command}.js`), { stdio: 'inherit' });
})();

async function createEntity(entity, name, app) {
    const child = fork(path.join(__dirname, 'create-entity.js'), { stdio: 'inherit' });

    child.send({ entity, name, app });

    child.on('message', async ({ name, app }) => {
        child.kill();

        if (entity === Entity.REDUCER) {
            const { yes } = await inquirer.prompt([
                {
                    message: 'Do you want to create actions as well?',
                    name: 'yes',
                    type: 'confirm',
                },
            ]);

            if (yes) {
                createEntity(Entity.ACTIONS, name, app);
            }
        }
    });
}
