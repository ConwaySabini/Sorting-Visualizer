Hosted on Github Pages at https://conwaysabini.github.io/Sorting-Visualizer/

Sorting Algorithms visualized including QuickSort, MergeSort, InsertionSort, ShellSort, BubbleSort, HeapSort, and SelectionSort.

Testing and charts for time it took me to execute different implementations of the sorting algorithms.

Slower Algorithms:

![image](https://user-images.githubusercontent.com/53063791/153731899-430b5d7f-1397-41d2-8e47-f636c0ace799.png)


Faster Algorithms:

![image](https://user-images.githubusercontent.com/53063791/153731860-84ffd4f3-0c39-41a8-b4f2-c918dbef4da0.png)





Explanations of Algorithms:

Bubble Sort works by comparing adjacent elements and swapping them if necessary, until the array is sorted. Bubble sort has a time complexity of O(n^2) for both the average and worst-case scenarios. The worst-case scenario occurs when the array is sorted in reverse. The best-case time complexity occurs when the array is already sorted. The bubble sort space complexity is O(1) because it has no recursion or extra arrays meaning it sorts in place. 

Insertion Sort is generally faster than the bubble sort because it can sort elements to the left side of the array where the elements are already sorted. Insertion sort has a time complexity of O(n^2) for both the average and worst-case scenarios. The worst-case scenario occurs when the array is sorted in reverse, while the best case is when the array is sorted. The space complexity is O(1) because it is an in place sort. The insertion sort is best used on arrays of smaller sizes.

Shell Sort is faster on average than the bubble and insertion sort because it can sort elements using a fixed gap that sorts all elements at the gap distance to the left and to the right of the gap. Then the gap is reduced by 2 for the first pass and then by 2.2 after that to maximize efficiency. Shell sort has a time complexity of O(n^2) for the worst-case scenario, and a time complexity of O(n^(3/2)) for the average case. The best case is with a sorted array and the worst-case occurs when the even elements of the array are greater than the median, while the best case is when the array is sorted. The best-case time complexity is O(nlogn). The space complexity is O(1) because it is an in place sort.

Merge Sort is a divide and conquer algorithm that splits the array in half and recursively calls each half and merges the two halves together while sorting them. Each half is called until the arrays have a size of 1 and are merged back together. The order of merges is from the left to the right because of the recursive calls. Merge sort has a time complexity of O(nlogn) for the worst, average, and best cases. The worst case occurs when it must compare each pair when merging the arrays. The space complexity of this algorithm is O(n) because of the creation of arrays. Merge sort is useful for sorting linked lists because it does not require item copying operations. 

Iterative Merge Sort has a time complexity of O(nlogn) for the worst, average, and best cases. The space complexity of this algorithm is O(n) because of the extra temp array that is created at the beginning. This merge algorithm iterates through, where each iteration the array is divided into sections of size n. Where n is 1 for the first iteration and is multiplied by 2 each iteration. This version is improved because we do not call the function recursively and only allocate 1 extra temp array that is used to alternatively swap between the array passed in and the temp array. 

Quick Sort is a divide and conquer algorithm that works by picking the median of the first middle and last elements as the pivot and then partitioning the array so that the elements to the left are less than the pivot and the elements to the right are greater than the pivot. Then the array is sorted by recursively calling the lower section to the pivot – 1, and the upper section by calling the pivot + 1 to the last element. Quick sort has a time complexity of O(nlogn) for the best, and average cases scenarios. Quick sort has a time complexity of O(n^2) for the worst case. The worst case occurs when the array is partitioned so that the pivot is the second smallest or largest element because then the size is only reduced by one. The best case occurs when the middle element of the sorted array is picked as a pivot. Quick sort has a space complexity of O(logn) because of the stack frames for the recursive calls. Quick sort is considered an in-place sorting algorithm because the extra space does not change the array passed in. Quick sort is better than the merge sort to use on arrays because it does not require extra memory for array creation and is therefore the fastest sort for this program.



