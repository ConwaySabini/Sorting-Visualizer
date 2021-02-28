import { swap } from './Swap';

function getSelection(array) {
    const display = [];
    if (array.length < 2) return array;
    selectionSort(array, display);
    return display;
}

function selectionSort(array, display) {
    let size = array.length;

    for (let i = 0; i < size - 1; i++) {
        let min = i;

        for (let j = i + 1; j < size; j++) {
            display.push([j, min, false, true]);
            display.push([j, min, false, false]);
            if (array[j] < array[min]) min = j;
        }
        display.push([i, array[min], true, false]);
        display.push([min, array[i], true, false]);
        swap(array, min, i);
    } 
}

export { getSelection };