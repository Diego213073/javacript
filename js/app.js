let arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(i);
}


const total = arr.filter(elemento => elemento % 3 == 0 || elemento % 5 == 0).reduce((x, y) => x + y);


console.log(`La sumatoria es: ${total}`);