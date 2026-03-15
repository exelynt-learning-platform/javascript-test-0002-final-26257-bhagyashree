const ROWS = 5;

for (let i = 0; i < ROWS; i++) {
    let line = "";

    // leading spaces
    for (let s = 0; s < i; s++) {
        line += " ";
    }

    // first number
    line += "1";

    // middle numbers
    if (i < ROWS - 1) {
        const value = ROWS - i - 1;

        if (value > 0) {
            line += " " + value;
        }

        if (value > 1) {
            line += " " + value;
        }

        if (value > 0) {
            line += " 1";
        }
    }

    console.log(line);
}
