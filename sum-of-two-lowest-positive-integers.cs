// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

public static class Kata {
  public static int sumTwoSmallestNumbers(int[] numbers) {
    int first, second, sum;
    first = second = int.MaxValue;
    for (int i = 0; i < numbers.Length; i++) {
      if (numbers[i] < first) {
        second = first;
        first = numbers[i];

      } else if (numbers[i] < second && numbers[i] != first) {
        second = numbers[i];
      }
    }
    sum = first + second;
    return sum;
  }
}
