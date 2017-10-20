function mySolution(A) {
  var max = 0,
    sum = 0,
    arr = [],
    k;

  if(A.length == 1) return 0//=> 이거만 없으면 100프로임.

  for (var i = 0; i < A.length; i++) {
    k = A[i]
    if (arr[k]) return 0

    if (k > max) max = k

    arr[k] = k
    sum += k
  }

  if (max != A.length) return 0

  var total = (max / 2) * (1 + max)

  return total - sum == 0 ? 1 : 0
}//70%


function mySolution2(A) {
  var max = A[0],
     arr = [],
     k;

 if(A.length == 1) return 0//=> 이거때문에 낮은거임.......... 어이없네. 숫자 1만 있으면 연속한 숫자가 없다고 봐야되는거 아님?

 for (var i = 0; i < A.length; i++) {
   k = A[i]
   if (arr[k]) return 0
   if (k > max) max = k

   arr[k] = true
 }

 if (max != A.length) return 0

 for(var i = 1; i <= max; i++) {
   if(!arr[i]) return 0
 }

 return 1
}//70%


function mySolution3(A) {
  var max = A[0],
      arr = [],
      k;

  for (var i = 0; i < A.length; i++) {
    if (arr[k]) return 0//중복값 확인

    max = max < A[i] ? A[i] : max
    arr[A[i]] = true
  }

  if (max != A.length) return 0

  for(var i = 1; i <= max; i++) {
    if(!arr[i]) return 0
  }

  return 1
}//100%






//이건 남이 짠 코드
 function solution(A) {
   var control = new Array(A.length);
    var left = 0;

    //console.log('control:', control);

    for(var i=0; i<A.length; i++) {
        if(i===0) {
            left = A[i];
        }

        left = left < A[i] ? A[i] : left;
    }

    if(left !== A.length) {
        return 0;
    }

    for(var i=0; i<A.length; i++) {
        if(!control[A[i]-1]) {
            control[A[i]-1] = true;
            left--;
        }
    }

    //console.log('control, left:', control, left);

    return left === 0 ? 1 : 0;
 }//100%
