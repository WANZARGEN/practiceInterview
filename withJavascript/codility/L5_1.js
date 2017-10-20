
function mySolution(A, B, K) {
    var last = B,
        first;

    if(A == B) return A % K == 0 ? 1 : 0
    if(B < K) return 0

    if(A < K) first = K
    else first = A + K - ((A % K) == 0 ? K : (A % K))

    return parseInt((last - first) / K) + 1
} // 75% (correctness: 75%, performance: 75%)


function mySolutio2(A, B, K) {
    var last = B,
        first,
        quot = A / K,
        isRest = parseFloat(quot) > 0 ? true : false

    if(A == B) return isRest ? 0 : 1
    if(B < K) return 0
    if(A < K) first = K
    else first = A + K - (isRest ? parseInt(quot - parseInt(quot)) : K)

    return parseInt((last - first) / K) + 1
}// 75% (correctness: 75%, performance: 75%)


function solution(A, B, K) {
    if(A == B) return A % K == 0 ? 1 : 0

    var total = parseInt(B / K) - (A > 0 ? parseInt((A - 1) / K) : 0)

    if(A == 0) total++

    return total
}//100%
