function solution(S, P, Q) {
  var values = [],
    typeEnum = {A: 1, C: 2, G: 3, T: 4},
    min;

  for (var i = 0; i < P.length; i++) {
    min = 4
    for (var j = P[i]; j <= Q[i]; j++) {
      min = min > typeEnum[S[j]] ? typeEnum[S[j]] : min
      if(min == 1) break
    }
    values[i] = min
  }

  return values
}//62%(correctness: 100%, performance: 0%)
