import {Sort} from './sort.interface';

export class RadixSort<T> implements Sort<T> {

    sort(arr: T[]): T[] {
        if ( typeof arr[0] !== "number"  ){
            throw new Error('Currently, only number arrays are currently supported for radixsort');
        }
    
        // @ts-ignore
        const max = Math.max(...arr), temp = new Array(arr.length);

        let digitIndex = 1;

        while ( Math.floor(max/digitIndex) > 0 ) {
            let countArray = <number[]>[];
            for ( let i = 0; i < 10; i++ ) {
                countArray[i] = 0;
            }
            for ( let i = 0; i < arr.length; i++ ) {
                countArray[ Math.floor(( <number><any>arr[i]/digitIndex ) % 10) ]++;
            }
            
            for ( let i = 1; i < 10; i++ ) {
                countArray[i] += countArray[ i - 1 ];
            }
            
            for ( let i = arr.length; i >= 0; i-- ) {
                temp[ countArray[ Math.floor((<number><any>arr[i]/digitIndex) % 10) ] - 1 ] = arr[i];
                countArray[ Math.floor((<number><any>arr[i]/digitIndex) % 10) ]--;
            }

            for ( let i = 0; i < arr.length; i++ ) {
                arr[i] = temp[i];
            }

            digitIndex = digitIndex * 10;

        }

        return arr;
    }

}
