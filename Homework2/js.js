let arr =  [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8]

function recursiveSum(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += Array.isArray(item) ? recursiveSum(item) : item;
    }
    return sum;
}
console.log(recursiveSum(arr))
