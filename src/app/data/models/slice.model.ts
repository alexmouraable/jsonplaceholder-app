export interface Slice<T> {
    totalCount: number;
    totalValues: number;
    values: T[];
    nextFinalPosition: number;
    lastFinalPosition: number;
}