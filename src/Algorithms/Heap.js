import { swap } from './Swap';

function getHeap(array) {
    const display = [];
    if (array.length < 2) return array;
    heapSort(array, display);
    return display;
}

function heapSort(array, display) {
    const high = array.length;
    // Make heap
    for (let idx = Math.floor(high / 2) - 1; idx >= 0; idx--) {
        heapify(array, high, idx, display);
    }
    // Extract element from heap 
    for (let idx = high - 1; idx > 0; idx--) {
        display.push([0, array[idx], true, false]);
        display.push([idx, array[0], true, false]);
        // Move current root to end 
        swap(array, 0, idx);
        // recursively heapify subtree 
        heapify(array, idx, 0, display);
    }
}

function heapify(array, sub, root, display) {
    let large = root;
    let left = Math.floor(2 * root) + 1; // left child
    let right = Math.floor(2 * root) + 2; // right child

    if (left < array.length) {
        display.push([left, large, false, true]);
        display.push([left, large, false, false]);
        // left child is larger than root 
        if (left < sub && array[left] > array[large]) large = left;
    }
    if (right < array.length) {
        display.push([right, large, false, true]);
        display.push([right, large, false, false]);
        // right child is larger than largest so far 
        if (right < sub && array[right] > array[large]) large = right;
    }
    if (large !== root) {
        display.push([root, array[large], true, false]);
        display.push([large, array[root], true, false]);
        swap(array, root, large);
        // Recursively heapify the affected sub-tree 
        heapify(array, sub, large, display);
    }
}

export { getHeap };