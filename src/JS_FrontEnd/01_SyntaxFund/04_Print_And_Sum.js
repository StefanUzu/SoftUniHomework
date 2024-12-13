function print_and_sum(bottom, top) {
    let sum = 0;
    let line1 = "";
    for (var i = bottom; i <= top; i++) {
        sum += i;
        line1 += (i + " ");
    }
    console.log(line1.trim());
    console.log("Sum: " + sum);
}

print_and_sum(6, 100);