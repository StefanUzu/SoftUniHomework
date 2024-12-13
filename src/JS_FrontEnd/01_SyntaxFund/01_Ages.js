function ages(age) {
    let output = "out of bounds";
    if (age >= 0 && age <= 2) {
        output = "baby";
        return output;
    }
    if (age >= 3 && age <= 13) {
        output = "child";
        return output;

    }
    if (age >= 14 && age <= 19) {
        output = "teenager";
        return output;

    }
    if (age >= 20 && age <= 65) {
        output = "adult";
        return output;

    }
    if (age >= 66 ) {
        output = "elder";
        return output;
    }
    return output;
}

ages(20);
ages(1);
ages(100);
ages(-1);