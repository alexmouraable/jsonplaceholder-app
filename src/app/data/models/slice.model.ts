export class Slice<T> {
    private _start: number;
    private _end: number;
    private _totalCount: number;
    private _values: T[];

    constructor(start: number, end: number, totalCount: number, values: T[]) {
        this._start = start;
        this._end = end;
        this._totalCount = totalCount;
        this._values = values;
    }

    get values(): T[] {
        return this._values;
    }

    getNextStart(): number {
        return this._end;
    }

    getNextEnd(): number {
        return (this._end - this._start) + this._end;
    }

    isLast(): boolean {
        return this._end >= this._totalCount;
    }
}