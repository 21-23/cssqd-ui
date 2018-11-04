const fs = require('fs');
const inquirer = require('inquirer');
const { stripIndent } = require('common-tags');

const ComponentType = {
    FUNCTION: 0,
    CLASS: 1,
};

(async () => {
    const { name, componentType } = await inquirer.prompt([
        {
            message: 'Component name?',
            name: 'name',
            type: 'input',
        },
        {
            message: 'Component type',
            name: 'componentType',
            type: 'list',
            choices: [
                { name: 'Function', value: ComponentType.FUNCTION },
                { name: 'Class', value: ComponentType.CLASS },
            ],
        },
    ]);

    const componentSourceCode = component(name, componentType);
    const storySourceCode = story(name);

    console.log(`${name}.js\n`);
    console.log(componentSourceCode, '\n');

    const { ok } = await inquirer.prompt([
        {
            message: 'Looks ok? (y/n)',
            name: 'ok',
            type: 'confirm',
        },
    ]);

    if (!ok) {
        return console.log('Sorry 😿');
    }

    try {
        console.log('Creating folder 📂');
        fs.mkdirSync(`./src/components/${name}`);

        console.log('Writing component 📝️');
        fs.writeFileSync(`./src/components/${name}/${name}.js`, componentSourceCode);

        console.log('Writing story ✒️');
        fs.writeFileSync(`./src/components/${name}/${name}.story.js`, storySourceCode);

        console.log('Adding story to storybook 📕');
        fs.writeFileSync(
            './.storybook/stories.js',
            [
                ...fs
                    .readFileSync('./.storybook/stories.js', 'utf-8')
                    .split('\n')
                    .filter(Boolean),

                `require('../src/components/${name}/${name}.story.js');\n`,
            ].join('\n'),
            'utf-8'
        );

        console.log('Done! ✅');
    } catch (err) {
        console.log('Smth went wrong 😿');
        console.log(err);
    }
})();

function component(name, componentType) {
    return stripIndent`
        ${importNecessaryModules(componentType)}
        ${generateComponent(name, componentType)}

        export { ${name} };
    `;
}

function story(name) {
    return stripIndent`
    import { h } from 'preact';
    import { storiesOf } from '@storybook/react';

    import { ${name} } from './${name}';

    storiesOf('${name}', module)
        .add('default', () => (
            <${name} />
        ));
    `;
}

function importNecessaryModules(componentType) {
    if (componentType === ComponentType.CLASS) {
        return `import { h, Component } from 'preact';`;
    } else {
        return `import { h } from 'preact';`;
    }
}

function generateComponent(name, componentType) {
    switch (componentType) {
        case ComponentType.FUNCTION:
            return generateFunctionComponent(name);

        case ComponentType.CLASS:
            return generateClassComponent(name);

        default:
            throw new Error(`Unknown component type "${componentType}"`);
    }
}

function generateFunctionComponent(name) {
    return `
        const ${name} = () => (
            <div></div>
        );`;
}

function generateClassComponent(name) {
    return `
        class ${name} extends Component {
            render() {
                return (
                    <div></div>
                );
            }
        }`;
}
