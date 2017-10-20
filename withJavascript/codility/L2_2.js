


function solution(A, K) {
    var last = A.length - 1,
        arr = [],
        r = K > A.length ? K % A.length : K

    for(var i = last; r - (last - i) > 0; i--) {
        arr[r - (last - i) - 1] = A[i];
    }

    if(r < A.length) {
        for(var j = 0; j < A.length - r; j++) {
            arr[r + j] = A[j];
        }
    }

    return arr;
}
