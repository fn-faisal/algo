# Algorithms Utils TS
A set of algorithms for your project.

## Installation

```ssh
yarn add ts-algorithm-utils
or
npm i ts-algorithm-utils
```

## 1. Sorting Algos

### 1.1 Quick Sort.

```ts
// import sort algo factory.
import {SortFactory, SortAlgo, Sort} from 'ts-algorithm-utils';

// set an unsorted array.
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// get the quick sort object from 
const sortAlgo: Sort<number> = SortFactory.make(SortAlgo.QUICK_SORT);

// sort the array.
const sorted = sortAlgo.sort(arr, 0, arr.length - 1);

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
const sortAlgo: Sort<number> = SortFactory.make(SortAlgo.MERGE_SORT);

// sort the array.
const sorted = sortAlgo.sort(arr);

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
const sortAlgo: Sort<number> = SortFactory.make(SortAlgo.BUBBLE_SORT);

// sort the array.
const sorted = sortAlgo.sort(arr);

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
const sortAlgo: Sort<number> = SortFactory.make(SortAlgo.SELECTION_SORT);

// sort the array.
const sorted = sortAlgo.sort(arr);

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
const sortAlgo: Sort<number> = SortFactory.make(SortAlgo.INSERTION_SORT);

// sort the array.
const sorted = sortAlgo.sort(arr);

// log the output.
console.log(sorted);
```

### 1.5 Radix Sort.

```ts
// import sort algo factory.
import {SortFactory, SortAlgo, Sort} from 'ts-algorithm-utils';

// set an unsorted array.
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// get the quick sort object from 
const sortAlgo: Sort<number> = SortFactory.make(SortAlgo.RADIX_SORT);

// sort the array.
const sorted = sortAlgo.sort(arr);

// log the output.
console.log(sorted);
```