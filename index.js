// Add your functions here
function map(arr, callback ) {
    let r = []
    for (let i = 0; i < arr.length; i++) {
        r.push(callback(arr[i]))
    }
    return r
}

function reduce(arr, callback, start) {
    let r = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1 

    for (; i < arr.length; i++) {
        r = callback(arr[i], r)
    }
    return r
}