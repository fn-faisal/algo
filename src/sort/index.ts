import { Sort } from "./sort.interface";
import { QuickSort } from "./quicksort";

export enum SortAlgo {
    QUICK_SORT = 'qs',
};

export class SortFactory {
    static make<T>( algo: SortAlgo ): Sort<T> | null{
        switch( algo ) {
            case SortAlgo.QUICK_SORT:
                return new QuickSort();
        }
        return null;
    }   
}