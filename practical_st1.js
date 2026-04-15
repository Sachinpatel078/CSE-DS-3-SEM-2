function checkPrime() {
    let num = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    if (num === "" || num < 1) {
        result.innerHTML = "Please enter a valid positive number.";
        return;
    }

    num = Number(num);
    let isPrime = true;

    if (num === 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        result.innerHTML = num + " is a Prime Number.";
    } else {
        result.innerHTML = num + " is NOT a Prime Number.";
    }
}