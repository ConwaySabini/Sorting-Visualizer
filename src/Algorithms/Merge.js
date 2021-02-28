function getMerge(array) {
    const display = [];
    if (array.length < 2) return array;
    const tempArr = array.slice();
    mergeSort(array, 0, array.length - 1, tempArr, display);
    return display;
}

function mergeSort(array, low, high, tempArray, display) {
    if (low === high) return;
    const mid = Math.floor((low + high) / 2);
    mergeSort(tempArray, low, mid, array, display);
    mergeSort(tempArray, mid + 1, high, array, display);
    tempMerge(array, low, mid, high, tempArray, display);
}

function tempMerge(array, low, mid, high, tempArray, display) {
    let first1 = low;
    let first2 = mid + 1;
    let index = low;

    while ((first1 <= mid) && (first2 <= high)) {
        display.push([first1, first2]); // comparing values
        display.push([first1, first2]); // change values colors back
        if (tempArray[first1] <= tempArray[first2]) {
            display.push([index, tempArray[first1]]);
            array[index++] = tempArray[first1++];
        }
        else {
            display.push([index, tempArray[first2]]);
            array[index++] = tempArray[first2++];
        }
    }
    while (first1 <= mid) {
        display.push([first1, first1]);
        display.push([first1, first1]);
        display.push([index, tempArray[first1]]);
        array[index++] = tempArray[first1++];
    }
    while (first2 <= high) {
        display.push([first2, first2]);
        display.push([first2, first2]);
        display.push([index, tempArray[first2]])
        array[index++] = tempArray[first2++];
    }
}

export { getMerge };