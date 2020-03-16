import { Sort } from "./sort.interface";

export class MergeSort<T> implements Sort<T> {
    
    private merge(right: T[], left: T[]) {
        let l = 0, h = 0, merged: T[] = [];
        while (l < right.length || h < left.length) {
            if (right[l] !== undefined) {
                if (left[h] === undefined) {
                    merged = [...merged, right[l]];
                    l++;
                } else {
                    if (right[l] <= left[h]) {
                        merged = [...merged, right[l]];
                        l++;
                    } else {
                        merged = [...merged, left[h]];
                        h++;
                    }
                }
            } else {
                if (left[h] !== undefined) {
                    merged= [ ...merged ,left[h]];
                    h++;
                }
            }
        }
        return merged;

    }

    sort(arr: T[]): T[] {
        let halfLength = Math.ceil(arr.length / 2),
            low = arr.slice(0, halfLength), high = arr.slice(halfLength);
        if (halfLength > 1) {
            low = this.sort(low);
            high = this.sort(high);
        }
        return this.merge(low, high);
    }
}