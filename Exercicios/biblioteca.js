export function numeroprimo(np) {
    for (var div = 2; div < np; div++) {
       
        if (np % div === 0) {
            return false
        }
       
    } 
    return true
}
