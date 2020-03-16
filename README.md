# Algorithms Utils TS

## 1. Sorting Algos

### 1.1 Quick Sort.

```sh
// import sort algo factory.
import {SortFactory, SortAlgo} from 'ts-algorithm-utils';
import { Sort } from 'ts-algorithm-utils/sort/sort.interface';

// set an unsorted array.
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// get the quick sort object from 
const quickSort: Sort<number> | null = SortFactory.make(SortAlgo.QUICK_SORT);

if ( quickSort ) {
    // sort the array.
    const sorted = quickSort.sort(arr, 0, arr.length - 1);
    // log the output.
    console.log(sorted);
}
```
