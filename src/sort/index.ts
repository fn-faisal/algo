import { Sort } from "./sort.interface";
import { QuickSort } from "./quicksort";
import { MergeSort } from "./mergesort";

export enum SortAlgo {
    QUICK_SORT = 'qs',
    MERGE_SORT = 'ms',
};

export class SortFactory {
    static make<T>( algo: SortAlgo ): Sort<T>  {
        switch( algo ) {
            case SortAlgo.QUICK_SORT:
                return new QuickSort<T>();
            case SortAlgo.MERGE_SORT:
                return new MergeSort<T>();
            default:
                return new QuickSort<T>();
        }
    }   
}