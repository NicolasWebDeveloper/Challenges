function collatz(start) {
    let collatzProblem = [start]
    
    for (let i = 0; i < 10; i++) {
        let number = collatzProblem[collatzProblem.length - 1];
        if ((number % 2) === 0 ) {
            collatzProblem.push(number / 2);
        } else {
            collatzProblem.push((number * 3) + 1);
        }
    }
    
    console.log(collatzProblem);
}


collatz(19)
