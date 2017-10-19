package practiceInterview.codility;

public class L2_1_OddOccurrencesInArray {

  static int isUnpaired(int[] A) {
    Integer[] arr = new Integer[A.length];
    int j = 0, k = 0;
    
    arr[0] = A[0];
    for(int i = 1; i < A.length; i++) {
      if(arr[k] == A[i]) {
        k++;
        if(arr[k] == null) {
          i++;
          arr[k] = A[i];
          if(j < k) j++;
        }
      } else {
        j++;
        arr[j] = A[i];
      }
    }
    
    return arr[k];
    
  }
  
  
  public static void main(String args[]) {
    int[] A = {9, 3, 9, 3, 9, 7, 9, 7, 1, 7, 7};
    int[] B = {9, 3, 9, 3, 9, 7, 9};
    System.out.println(isUnpaired(A));
    System.out.println(isUnpaired(B));
  }
}
