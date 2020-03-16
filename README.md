# Algorithms Utils TS

## 1. Sorting Algos

### 1.1 Quick Sort.

```ts
// import sort algo factory.
import {SortFactory, SortAlgo, Sort} from 'ts-algorithm-utils';

// set an unsorted array.
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// get the quick sort object from 
const quickSort: Sort<number> = SortFactory.make(SortAlgo.QUICK_SORT);

// sort the array.
const sorted = quickSort.sort(arr, 0, arr.length - 1);

// log the output.
console.log(sorted);
```

### 1.2 Merge Sort.

```ts
// import sort algo factory.
import {SortFactory, SortAlgo, Sort} from 'ts-algorithm-utils';

// set an unsorted array.
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// get the quick sort object from 
const mergeSort: Sort<number> = SortFactory.make(SortAlgo.MERGE_SORT);

// sort the array.
const sorted = mergeSort.sort(arr);

// log the output.
console.log(sorted);
```

### 1.3 Bubble Sort.

```ts
// import sort algo factory.
import {SortFactory, SortAlgo, Sort} from 'ts-algorithm-utils';

// set an unsorted array.
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// get the quick sort object from 
const quickSort: Sort<number> = SortFactory.make(SortAlgo.BUBBLE_SORT);

// sort the array.
const sorted = quickSort.sort(arr);

// log the output.
console.log(sorted);
```

### 1.4 Selection Sort.

```ts
// import sort algo factory.
import {SortFactory, SortAlgo, Sort} from 'ts-algorithm-utils';

// set an unsorted array.
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// get the quick sort object from 
const quickSort: Sort<number> = SortFactory.make(SortAlgo.SELECTION_SORT);

// sort the array.
const sorted = quickSort.sort(arr);

// log the output.
console.log(sorted);
```

### 1.4 Insertion Sort.

```ts
// import sort algo factory.
import {SortFactory, SortAlgo, Sort} from 'ts-algorithm-utils';

// set an unsorted array.
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// get the quick sort object from 
const quickSort: Sort<number> = SortFactory.make(SortAlgo.INSERTION_SORT);

// sort the array.
const sorted = quickSort.sort(arr);

// log the output.
console.log(sorted);
```