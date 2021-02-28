import { swap } from './Swap';

function getBubble(array) {
    const display = [];
    if (array.length < 2) return array;
    bubbleSort(array, display);
    return display;
}

function bubbleSort(array, display) {
    const high = array.length - 1;
    let swapped;
    for (let i = 0; i < high; i++) {
        swapped = false;
        for (let j = 0; j < high - i; j++) {
            // first flag for swapping values and second flag for color changing
            display.push([j, j + 1, false, true]);
            display.push([j, j + 1, false, false]);
            if (array[j] > array[j + 1]) {
                // first paramter is the index of swap second parameter is the height of the bar to set
                display.push([j, array[j + 1], true, false]);
                display.push([j + 1, array[j], true, false]);
                swap(array, j, j + 1);
                swapped = true;
            }
        }
        if (swapped === false) {
            break;
        }
    }
}

export { getBubble };