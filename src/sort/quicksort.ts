import { Sort } from "./sort.interface";

export class QuickSort<T> implements Sort<T> {

    private split(arr: Array<T>, l: number, r: number): number {
        let pivot = arr[r], i = l - 1;
        
        for ( let j = l; j <= r - 1; j++ ) {
            if ( arr[j] < pivot ) {
                i++;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    
        // swap arr[i + 1] and arr[high])
        let temp = arr[i + 1];
        arr[i + 1] = arr[r];
        arr[r] = temp;
    
        return i + 1;
    }

    sort( arr: Array<T>, l: number, r: number ): Array<T> {
        if ( l < r ) {
            let m = this.split(arr, l, r);
            this.sort(arr, l, m-1);
            this.sort(arr, m+1, r);
        }
        return arr;
    }



}   