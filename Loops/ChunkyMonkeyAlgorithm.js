function chunkArrayInGroups(arr, size) {
    for(let i = 0; i < arr.length; i ++) {
        let taken = arr.splice(i, size);
        arr.splice(i, 0, taken);
    }
    return arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));