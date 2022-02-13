function hanoi(st, ed, sz) {
    if (sz === 1) {
        console.log(st, ed);
        return;
    }

    hanoi(st, 6 - st - ed, sz - 1);
    console.log(st, ed);
    hanoi(6 - st - ed, ed, sz - 1);
}
let n = 3;
console.log(2 ** n - 1);
hanoi(1, 3, n);
