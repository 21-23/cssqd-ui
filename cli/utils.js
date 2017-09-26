exports.toCamelCase = trainCase =>
    trainCase
        .split('-')
        .map(([firstChar, ...rest]) => `${firstChar.toUpperCase()}${rest.join('')}`)
        .join('');
