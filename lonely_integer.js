// trying to solve this using XOR operator (bitwise operations)
/* function lonelyinteger(a) {
    const xorReduce = (array) => {
        let a = array.reduce((a,b) => a ^ b,0);


    }
    return a
}
*/

function lonelyinteger(a) {
    //one liner using find and indexOf method
    return a.find(x => a.indexOf(x) === a.lastIndexOf(x));
}
