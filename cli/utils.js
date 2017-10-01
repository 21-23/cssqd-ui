exports.toCamelCase = trainCase => {
    const CamelCase = trainCase
        .split('-')
        .map(([firstChar, ...rest]) => `${firstChar.toUpperCase()}${rest.join('')}`)
        .join('');

    const camelCase = `${CamelCase[0].toLowerCase()}${CamelCase.substring(1)}`;

    console.log(camelCase, CamelCase);

    return { camelCase, CamelCase };
}
