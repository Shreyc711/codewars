function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isUnique = true;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            return arr[i];
        }
    }
}