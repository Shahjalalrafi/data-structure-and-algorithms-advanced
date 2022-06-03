function matrixSpiral(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right Column
        for (let i = startRow; i <= endRow; i++) {
            result[i][endColumn] = counter;
            counter++
        }
        endColumn--;

        // end Row
        for(let i = endColumn; i >= startColumn; i--) {
            result[endRow][i] = counter;
            counter++
        }
        endRow--;

        // start Column
        for(let i = endRow; i >= startRow; i--) {
            result[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return result

}

console.log(matrixSpiral(6));

