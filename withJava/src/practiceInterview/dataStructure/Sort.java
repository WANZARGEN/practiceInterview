package practiceInterview.dataStructure;

public class Sort {
  
  static int[] insertionSort(int[] dataArr) {
    
    int j;
    for (int i = 1; i < dataArr.length; i++) {
      int insert = dataArr[i];
      for (j = i - 1; j >= 0; j--) {
        if (insert < dataArr[j]) {
          dataArr[j + 1] = dataArr[j];
        } else {
          break;
        }
      }
      dataArr[j + 1] = insert;
    }
    
    return dataArr;
  }
  
  static int[] selectionSort(int[] dataArr) {
    int selection;
    for(int i = 0; i < dataArr.length; i++) {
      selection = i;
      for(int j = i + 1; j < dataArr.length; j++) {
        if(dataArr[j] < dataArr[selection]) {
          selection = j;
        }
      }
      int temp = dataArr[i];
      dataArr[i] = dataArr[selection];
      dataArr[selection] = temp;
    }
      
    return dataArr;
  }
  
  static int[] bubbleSort(int[] dataArr) {
    for(int i = dataArr.length - 1; i > 0; i--) {
      for(int j = 0; j < i; j++) {
        if(dataArr[j] > dataArr[j + 1]) {
          int temp = dataArr[j];
          dataArr[j] = dataArr[j + 1];
          dataArr[j + 1] = temp;
        }
      }
    }
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
        System.out.printf("\ndataArr[%d]: %d", k, dataArr[k]);
      }
      k++;
    }
    
    if(i > mid) {
      for (int r = j; r <= last; r++) {
        dataArr[k] = tempArr[r];
        k++;
      }
    } else {
      for (int r = i; r <= mid ; r++) {
        dataArr[k] = tempArr[r];
        k++;
      }
    }

    printArr(dataArr);
    
  }
  
  
  
  static int[] quickSort(int[] dataArr, int first, int last) {
    
    if(first < last) {
    
      int pivot = dataArr[first];
      int i = first;
      int j = last;
      
      
      while(i < j) {
        while(dataArr[j] > pivot) {
          j--;
        }
        
        while(i < j && dataArr[i] <= pivot) {
          i++;
        }
        
        int temp = dataArr[j];
        dataArr[j] = dataArr[i];
        dataArr[i] = temp;
      }
      
      dataArr[first] = dataArr[i];
      dataArr[i] = pivot;
      
      quickSort(dataArr, first, i - 1);
      quickSort(dataArr, i + 1, last);
      
    }
    
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
