function solution(n) {
    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i += 1) {
            if (num % i === 0) return false;
        }
        return true;
    };

    let count = 0;

    for (let i = 2; i <= n; i += 1) {
        if (isPrime(i)) {
            count += 1;
        }
    }

    return count;
}
solution(10);
