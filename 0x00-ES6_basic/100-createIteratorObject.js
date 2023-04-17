export default function createIteratorObject(report) {
    const iter = report[Symbol.iterator]();
    return iter;
}