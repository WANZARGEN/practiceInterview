function solution(A) {
    var zeros = [], z = -1, ones = [], o = -1, total = 0;
    for(var i = 0; i < A.length; i++) {
        if(A[i] == 0) {
            if(i == 0 || A[i - 1] == 1) zeros[++z] = 1
            else zeros[z]++
        } else {
            if(!zeros[0]) continue
            else if(A[i - 1] == 0) ones[++o] = 1
            else ones[o]++
        }
    }

    if(z > o) ones[++o] = 0

    for(var j = 0; j <= z; j++) {
        for(var k = j; k <= o; k++) {
            total += zeros[j] * ones[k]
        }
    }

    // console.log(zeros.toString())
    // console.log(ones.toString())

    return total > 1000000000 ? -1 : total
    // return total
}//70% (correctness: 100%, performance: 40%)


function solution2(A) {
    var zeros = [], z = -1, ones = [], o = -1, total = 0, oneSum = 0;

    for(var i = 0; i < A.length; i++) {
        if(A[i] == 0) {
            if(i == 0 || A[i - 1] == 1) zeros[++z] = 1
            else zeros[z]++
        } else {
            if(!zeros[0]) continue
            else if(A[i - 1] == 0) ones[++o] = 1
            else ones[o]++

            oneSum++
        }
    }

    if(z > o) ones[++o] = 0

    for(var j = 0; j <= z; j++) {
        total += zeros[j] * oneSum
        oneSum -= ones[j]
    }

    return total > 1000000000 ? -1 : total
}//100%
