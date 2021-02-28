function getShell(array) {
    const display = [];
    if (array.length < 2) return array;
    shellSort(array, 0, array.length - 1, display);
    return display;
}

function shellSort(array, low, high, display) {
    if (low < 0) low = 0;
    if (array.length < 2) return;

    let gap = Math.floor((high / 2));
    while (gap > 0) {
        for (let i = Math.floor(gap + low); i <= high; i++) {
            let temp = array[i];
            let j;

            for (j = i; (j >= gap) && (array[Math.floor(j - gap)] > temp); j -= gap) {
                let index = Math.floor(j - gap);
                display.push([index, i, false, true]);
                display.push([index, i, false, false]);
                display.push([j, array[index], true, false]);
                array[j] = array[index];
            }
            display.push([j, temp, true, false]);
            array[j] = temp;
        }
        if (gap === Math.floor((high / 2))) {
            gap = Math.floor(gap / 2);
        }
        if (gap === 2) {
            gap = 1;
        }
        else {
            gap = Math.floor(gap / 2.2);
        }
    }
}

export { getShell };