function solution(N, A) {
    var arr = [], max = 0, k;

    for(var i = 0; i < A.length; i++) {
        if(A[i] > N){
            for(var j = 0; j < N; j++) {
                arr[j] = max
            }
            continue
        }

        arr[A[i] - 1] = !arr[A[i] - 1] ? 1 : arr[A[i] - 1] + 1
        max = arr[A[i] - 1] > max ? arr[A[i] - 1] : max
    }

    return arr
}//60% (correctness: 100%, performance: 20%)



function solution2(N, A) {
    var arr = [], max = 0, accum_max = 0;

    for(var i = 0; i < A.length; i++) {
        if(A[i] > N){
            arr = []
            accum_max += max
            max = 0
            continue
        }

        arr[A[i] - 1] = !arr[A[i] - 1] ? 1 : arr[A[i] - 1] + 1
        max = arr[A[i] - 1] > max ? arr[A[i] - 1] : max
    }

    for(var j = 0; j < N; j++) {
        arr[j] = !arr[j] ? accum_max : arr[j] + accum_max
    }

    return arr
}//100%
