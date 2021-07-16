// return a random item from items
const choice = items => {
    return items[Math.floor(items.length * Math.random())];
};

// remove the first occurence of item from items, return undefined if not found
const remove = (items, item) => {
    const idx = items.findIndex(val => val === item);
    if (idx === -1) return;

    return items.splice(idx, 1)[0];
};

export { choice, remove };