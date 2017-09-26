const vfs = require('vinyl-fs');

const createTransformStream = require('./create-transform-stream');

function bootstrapFS({ src, dest, vars, filenamePrefix, done = () => {} }) {
    const transformStream = createTransformStream({ vars, filenamePrefix });

    vfs.src([src], { dot: true })
        .pipe(transformStream)
        .pipe(vfs.dest(dest))
        .on('data', file => console.log(`Writing ${file.path.replace(process.cwd(), '')} ✅`))
        .on('end', () => {
            console.log(`We're done! 🎉`);
            done();
        });
}

module.exports = bootstrapFS;
