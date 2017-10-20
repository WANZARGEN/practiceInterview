function solution(A) {
    var arr = [], j = 1

    for(var i = 0; i < A.length; i++) {
        if(A[i] > 0) arr[A[i]] = true
    }

    for(; j < arr.length; j++) {
        if(!arr[j]) return j
    }

    return j
}
