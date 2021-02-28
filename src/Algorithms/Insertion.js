function getInsertion(array) {
    const display = [];
    if (array.length < 2) return array;
    insertionSort(array, 0, array.length - 1, display);
    return display;
}

function insertionSort(array, low, high, display) {
    if (low < 1) {
        low = 1;
    }
    let i;
    let flag = false;
    for (let place = low; place <= high; place++) {
        let temp = array[place];
        i = place;
        display.push([place, i - 1, false, true]);
        display.push([place, i - 1, false, false]);

        while ((i > 0) && (array[i - 1] > temp)) {
            if (flag) {
                display.push([place, i - 1, false, true]);
                display.push([place, i - 1, false, false]);
            }
            flag = true;
            display.push([i, array[i - 1], true, false]);
            array[i] = array[i - 1];
            i--;
        }
        display.push([i, temp, true, false]);
        array[i] = temp;
    }
}

export { getInsertion, insertionSort };