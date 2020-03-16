import { Sort } from "./sort.interface";
import { QuickSort } from "./quicksort";
import { MergeSort } from "./mergesort";
import { BubbleSort } from "./bubblesort";
import { SelectionSort } from "./selectionsort";

export enum SortAlgo {
    QUICK_SORT,
    MERGE_SORT,
    BUBBLE_SORT,
    SELECTION_SORT,
};

export class SortFactory {
    static make<T>( algo: SortAlgo ): Sort<T>  {
        switch( algo ) {
            case SortAlgo.QUICK_SORT:
                return new QuickSort<T>();
            case SortAlgo.MERGE_SORT:
                return new MergeSort<T>();
            case SortAlgo.BUBBLE_SORT:
                return new BubbleSort<T>();
            case SortAlgo.SELECTION_SORT:
                return new SelectionSort<T>();
            default:
                return new QuickSort<T>();
        }
    }   
}