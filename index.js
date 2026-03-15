const ROWS = 5;

// Loop through each row
for (let i = 0; i < ROWS; i++) {

    // This variable will store the output for one line
    let line = "";

    // Print leading spaces for alignment
    // As the row increases, the number of spaces increases
    for (let s = 0; s < i; s++) {
        line += " ";
    }

    // Print the first number in every row
    line += "1";

    // Print the middle numbers and the ending 1
    // This condition avoids extra numbers on the last row
    if (i < ROWS - 1) {

        // Calculate the decreasing value for the pattern
        const value = ROWS - i - 1;

        // Print the first middle number
        if (value > 0) {
            line += " " + value;
        }

        // Print the second middle number (if required)
        if (value > 1) {
            line += " " + value;
        }

        // Print the last number in the row
        if (value > 0) {
            line += " 1";
        }
    }

    // Print the completed row
    console.log(line);
}
