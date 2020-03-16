import { Sort } from "./sort.interface";
import { QuickSort } from "./quicksort";
import { MergeSort } from "./mergesort";
import { BubbleSort } from "./bubblesort";

export enum SortAlgo {
    QUICK_SORT = 'qs',
    MERGE_SORT = 'ms',
    BUBBLE_SORT = 'bs',
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
            default:
                return new QuickSort<T>();
        }
    }   
}