const invertObject = (obj) => {
    return Object.assign({}, ...Object.entries(obj).map(([a,b]) => ({ [b]: a })));
};

console.log(invertObject({key1: 'val1', key2: 'val2'}));