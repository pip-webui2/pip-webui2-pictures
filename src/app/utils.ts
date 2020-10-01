import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

type ObservableMap<T> = {
    [P in keyof T]: Observable<T[P]>;
};

type ObservableOrAnyMap<T> = {
    [P in keyof T]: Observable<T[P]> | T[P];
};

export function zip<L, R>(arr1: L[], arr2: R[]): [L, R][] {
    return arr1.map((k, i) => [k, arr2[i]]);
}

export function unzip<L, R>(arr: [L, R][]): [L[], R[]] {
    return arr.reduce(([l, r], [a, b]) => [[...l, a], [...r, b]], [[], []]);
}

export function combineLatestMap<T>(sources: ObservableOrAnyMap<T>): Observable<T> {
    const obs = {} as ObservableMap<T>;
    const vals: Object = {};
    Object.keys(sources).forEach(k => {
        if (Observable.prototype.isPrototypeOf(sources[k])) {
            obs[k] = sources[k];
        } else {
            vals[k] = sources[k];
        }
    });
    const sourceEntries = Object.entries<Observable<any>>(obs);
    const [sourceKeys, sourceValues] = unzip(sourceEntries);

    return combineLatest(sourceValues).pipe(
        map((values) => Object.assign({} as T, vals, Object.fromEntries(zip(sourceKeys, values))))
    );
}
