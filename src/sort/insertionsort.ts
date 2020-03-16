import {Sort} from './sort.interface';

export class InsertionSort<T> implements Sort<T> {
    sort(arr: T[]): T[] {
        let pos: number = 0, temp: T;
        for ( let i = 0; i < arr.length; i++ ) {
            temp = arr[i], pos = i;

            while ( pos > 0 && arr[pos - 1] > temp ) {
                arr[pos] = arr[pos - 1];
                pos -= 1;
            }

            arr[pos] = temp;
        }
        return arr;
    }
}