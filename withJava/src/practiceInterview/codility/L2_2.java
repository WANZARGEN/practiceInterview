package practiceInterview.codility;

public class L2_2 {
  
  class Solution {
    public int[] solution(int[] A, int K) {
        int last = A.length - 1;
        int[] arr = new int[A.length];
        int i = 0;
        for(; i <= K; i++) {
            arr[K - i] = A[last - i];
        }
        
        if(K < last) {
            for(int j = i; j <= last; j++) {
                arr[j] = A[last - j];
            }
        }
        
        return arr;
    }
}

}
