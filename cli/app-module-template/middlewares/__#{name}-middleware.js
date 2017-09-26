const #{camelCaseName}Middleware = store => next => action => {
    let result = next(action);
    return result;
};

export { #{camelCaseName}Middleware };
