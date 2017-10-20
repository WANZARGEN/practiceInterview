function solution(N) {
    var str = N.toString(2),
        isOne = false,
        gap = 0,
        now = 0;


    for(var i = 0; i < str.length; i++) {
        if(str[i] == 1) {
            isOne = true
            if(gap < now) gap = now
            now = 0
        } else if(isOne) {
            now++
        }
    }

    return gap
}
