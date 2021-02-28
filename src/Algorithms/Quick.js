import { swap } from './Swap';
import { insertionSort } from './Insertion';

function getQuick(array) {
    const display = [];
    if (array.length < 2) return array;
    quickSort(array, 0, array.length - 1, display);
    return display;
}

function quickSort(array, low, high, display) {
    if (high - low < 6) {
        insertionSort(array, low, high, display);
        return;
    }
    let pivot = partition(array, low, high, display);
    quickSort(array, low, pivot - 1, display);
    quickSort(array, pivot + 1, high, display);
}

function partition(array, low, high, display) {
    let mid = Math.floor((low + high) / 2);
    display.push([low, mid, false, true]);
    display.push([low, mid, false, false]);
    if (array[low] > array[mid]) {
        display.push([low, array[mid], true, false]);
        display.push([mid, array[low], true, false]);
        swap(array, low, mid);
    }
    display.push([low, high, false, true]);
    display.push([low, high, false, false]);
    if (array[low] > array[high]) {
        display.push([low, array[high], true, false]);
        display.push([high, array[low], true, false]);
        swap(array, low, high);
    }
    display.push([mid, high, false, true]);
    display.push([mid, high, false, false]);
    if (array[mid] > array[high]) {
        display.push([mid, array[high], true, false]);
        display.push([high, array[mid], true, false]);
        swap(array, mid, high);
    }
    display.push([mid, array[high - 1], true, false]);
    display.push([high - 1, array[mid], true, false]);
    let pivot = array[mid];
    swap(array, mid, high - 1);

    let left = low + 1;
    let right = high - 2;
    let done = false;
    while (!done) {
        display.push([left, mid, false, true]);
        display.push([left, mid, false, false]);
        while (array[left] < pivot) {
            left++;
        }
        display.push([right, mid, false, true]);
        display.push([right, mid, false, false]);
        while (array[right] > pivot) {
            right--;
        }
        display.push([left, right, false, true]);
        display.push([left, right, false, false]);
        if (left <= right) {
            display.push([left, array[right], true, false]);
            display.push([right, array[left], true, false]);
            swap(array, left, right);
            left++;
            right--;
        }
        else {
            done = true;
        }
    }
    display.push([left, array[high - 1], true, false]);
    display.push([high - 1, array[left], true, false]);
    swap(array, left, high - 1);
    return left;
}

export { getQuick };