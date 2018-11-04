const { Transform } = require('stream');

module.exports = ({ vars = {}, filenamePrefix = '#' }) => {
    const transformStream = new Transform({
        objectMode: true,
        transform(file, enc, done) {
            for (let varName in vars) {
                file.basename = file.basename.replace(new RegExp(`${filenamePrefix}{${varName}}`), vars[varName]);
            }

            if (file.isBuffer()) {
                let fileContentsString = file.contents.toString('utf-8');

                for (let varName in vars) {
                    fileContentsString = fileContentsString.replace(new RegExp(`#{${varName}}`, 'g'), vars[varName]);
                }

                file.contents = new Buffer(fileContentsString);
            }

            this.push(file);
            done();
        },
    });

    return transformStream;
};
