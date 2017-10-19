package practiceInterview.dataStructure;

public class Search {
  
  static int sequentialSearch(int[] dataArr) {
    return -1;
  }
  
  static int binarySearch(int dataArr[], int size, int findData)
  {
//      int low = 0, high = size - 1, mid;
//   
//      while (low <= high)
//      {
//          mid = (low + high) / 2;
//          if (dataArr[mid] > findData) high = mid - 1;
//          else if (dataArr[mid] < findData) low = mid + 1;
//          else return mid;
//      }
//      return -1;
    
    int first = 0;
    int last = size - 1;
    int mid;
    
    while(first <= last) {
      mid = first + last / 2;
      if(dataArr[mid] > findData) last = mid - 1;
      else if(dataArr[mid] < findData) first = mid + 1;
      else return mid;
    }
    
    return -1;
  }
  
  static int binaryTreeSearch(int[] dataArr) {
    return -1;
  }

  public static void main (String[] args) {
    int dataArr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 21, 24, 26, 27, 28};
    int length = dataArr.length;
    int input = 21;

    int ret = binarySearch(dataArr, length, input);
    System.out.println(ret == -1 ? ret : dataArr[ret]);
  }
}
