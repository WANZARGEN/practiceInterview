function solution(X, A) {
    var arr = [], left = X, time;


    for(var i = 0; i < A.length; i++) {
        if(A[i] <= X && !arr[A[i]]) {
            arr[A[i]] = true
            left--
            time = i
        }
    }

    return left == 0 ? time : -1
}
