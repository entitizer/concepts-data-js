export function uniq<T>(items: T[]) {
    return items.filter((value, index, self) => self.indexOf(value) === index);
}

export function seriesPromise<T, R>(arr: T[], iteratorFn: (item: T) => Promise<R>): Promise<void> {
    return arr.reduce<Promise<R>>((p, item) => p.then(() => iteratorFn(item)), Promise.resolve(undefined))
        .then(() => undefined);
}
