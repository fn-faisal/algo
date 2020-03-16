import {Sort} from './sort.interface';

export class SelectionSort<T> implements Sort<T> {
    sort(arr: T[]): T[] {
        for ( let i = 0; i < arr.length - 1; i++ ) {
            let min = i;
            for ( let j = i + 1; j <  arr.length; j++) {
                if ( arr[j] < arr[min] ) {
                    min = j;
                }
            }

            if ( min !== i ) {
                let temp = arr[min];
                arr[min] = arr[i];
                arr[i] = temp;
            }
        }
        return arr;
    }
}
