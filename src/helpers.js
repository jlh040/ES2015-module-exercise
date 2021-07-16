const choice = items => {
    return items[Math.floor(items.length * Math.random())];
};

console.log(choice(['hello', 'wello', 'trello', 'dello']));