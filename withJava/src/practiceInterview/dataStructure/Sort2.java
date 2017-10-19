package practiceInterview.dataStructure;

public class Sort2 {
  
  static int[] insertionSort(int[] dataArr) {
    
    for(int i = 0; i < dataArr.length - 1; i++) {
      for(int j = i; j >= 0; j--) {
        if(dataArr[j] > dataArr[j + 1]) {
          int temp = dataArr[j + 1];
          dataArr[j + 1] = dataArr[j];
          dataArr[j] = temp;
        } else {
          break;
        }
      }
    }
    return dataArr;
  }
  
  static int[] selectionSort(int[] dataArr) {
    
      
    return dataArr;
  }
  
  static int[] bubbleSort(int[] dataArr) {
    
    return dataArr;
  }
  
  
  static int[] mergeSort(int[] dataArr, int first, int last)
  {
    if(first < last) {
      int mid = (first + last) / 2;
      mergeSort(dataArr, first, mid);
      mergeSort(dataArr, mid + 1, last);
      merge(dataArr, first, mid, last);
    }
    return dataArr;
  }
  
  static void merge(int[] dataArr, int first, int mid, int last) {
    int[] tempArr = dataArr.clone();
    
    int i = first;
    int j = mid + 1;
    int k = first;
    
    while(i <= mid && j <= last) {
      if(tempArr[i] < tempArr[j]) {
        dataArr[k] = tempArr[i];
        i++;
      } else {
        dataArr[k] = tempArr[j];
        j++;
      }
      k++;
    }
    
    if(i > mid) {
      for(int r = j; r <= last; r++) {
        dataArr[k] = tempArr[r];
        k++;
      }
    } else if(j > last) {
      for(int r = i; r <= mid; r++) {
        dataArr[k] = tempArr[r];
        k++;
      }
    }
    
  }
  
  
  
  static int[] quickSort(int[] dataArr, int first, int last) {
    
    return dataArr;
  }
  

  static void printArr(int[] dataArr) {
    System.out.println();
    for(int n : dataArr) {
      System.out.printf("%d, ", n);
    }
  }

  public static void main (String[] args) {
//    int dataArr[] = {4, 7, 1, 5, 6, 8, 3, 9, 2};
    int dataArr[] = {2, 5, 4, 3, 26, 17, 8, 12, 10, 11, 9, 13, 28, 15, 7, 1, 24, 6, 27, 14};
    //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 21, 24, 26, 27, 28
    
    System.out.print("Insertion sort result: ");
    printArr(insertionSort(dataArr.clone()));
    System.out.println();
    
    System.out.print("\nSelection sort result: ");
    printArr(selectionSort(dataArr.clone()));
    System.out.println();
    
    System.out.print("\n<<Bubble sort result: >>");
    printArr(bubbleSort(dataArr.clone()));
    System.out.println();
    
    System.out.print("\n<<Merge sort result: >>");
    printArr(mergeSort(dataArr.clone(), 0, dataArr.length - 1));
    
    System.out.print("\n<<Quick sort result: >>");
    printArr(quickSort(dataArr.clone(), 0, dataArr.length - 1));

  }
}
