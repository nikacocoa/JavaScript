let a = [];
for (let i = 1; i <= 100; i++) {
    a.push(i);
}

let b3 = a.filter(function(num) {
    return num % 3 === 0;
});

let b5 = a.filter(function(num) {
    return num % 5 === 0;
});

console.log("3の倍数のみが入っている配列b3:", b3);

console.log("5の倍数のみが入っている配列b5:", b5);
