function solution(A) {
    // var sum = [], p = 0, q = 1, k = 0, min = A[0] + A[1], aver;

    // sum[0] = A[0]
    // for(var i = 1; i < A.length; i++) {
    //     sum[i] = sum[i - 1] + A[i]

    //     for(var size = 1; size < A.length - i; size++) {
    //         sum[i] - sum[i - 1]

    //     }
    // }

    var arr = [], q, sum = 0, k = 0, min = A[0] + A[1], aver;

    for(var p = 0; p < A.length - 1; p++) {
        sum = A[p]
        arr[p] = []
        for(q = p + 1; q < A.length; q++) {
            sum += A[q]
            arr[p][q] = sum
            aver = sum / (q - p + 1)
            if(min > aver) {
                min = aver
                k = p
            } else if (min == aver && k > p) {
                k = p
            }
        }
    }

    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

    return k
}//30% (correctness: 60%, performance: 30%)


function mySolution(A) {
  var q, sum = 0, k = Infinity, min = Infinity, aver;

for(var p = 0; p < A.length - 1; p++) {
   sum = A[p]
   for(q = p + 1; q < A.length; q++) {
       sum += A[q]
       aver = sum / (q - p + 1)
       if(min > aver) {
           min = aver
           k = p
       } else if (min == aver && k > p) {
           k = p
       }
   }
}

return k
}//60%(correctness: 100%, performance: 20%)


//재귀로 한번 풀어봐?
function solution2(A) {
    var accum = [], value = []. min

    accum[0] = 0
    for(var i = 1; i <= A.length; i++){
        accum[i] = accum[i - 1] + A[i - 1]
    }//0, 4, 6, 8, 13, 14, 19, 27
    i--

    min = (accum[i] - accum[i - A.length]) / A.length
    // return getK(accum, A.length, i, min, i - A.length)
    for(var j = i - 2; j > 1; j--) {
        getK(accum, j, i, min, i - j, value)
    }
}

function getK(accum, length, q, min, k, value) {
    if(q > 1 && length > 0) {
        var aver = (accum[q] - accum[q - length]) / length
        if(min > aver) {
            min = aver
            k = q - length
        } else if(min == aver && k > (q - length)) {
            k = q - length
        }

        value[0] = k
        value[1] = min

        value = getK(accum, length - 1, q - 1, min, k, value)
    }

    return value
}



//봉수오빠 코드(correctness: 100%, performance: 0%)
function solution3(A) {
    var tmp = 0
    var resultP
    var min = 100


    for(var p=0; p < A.length-1; p++) {
      for(var q=p+1; q < A.length; q++) {
        for(var i=p; i<=q; i++) {
          tmp += A[i]
        }
        if(min > tmp/(q-p+1)) {
          min = tmp/(q-p+1)
          resultP = p
        }
        tmp = 0
      }
    }

    return resultP
}



//다른 사람 답... 2, 3으로만 확인하고, 4이상은 확인하지 않음.
//어차피 2개씩, 3개씩 평균 낸 거에서 확인이 가능하니까.
function solution(A) {
    let two = [];
    let three = [];
    let avg = Infinity;
    let index = -1;

    for(let i=1; i<A.length; i++) {
        two[i] = (A[i] + A[i-1])/2;
        if(two[i] < avg) {
            avg = two[i];
            index = i-1;
        }
        if(i>1) {
            three[i] = (A[i] + A[i-1] + A[i-2])/3;
            if(three[i] < avg) {
                avg = three[i];
                index = i-2;
            }
        }
    }

    return index;
}//100%



/*
A non-empty zero-indexed array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

function solution(A);

that, given a non-empty zero-indexed array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
the function should return 1, as explained above.

Assume that:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

Copyright 2009–2017 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/
