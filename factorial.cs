// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

using System;

namespace Solution {
  public static class Program {
    public static int factorial(int n) {
      return (n == 0) ? 1 : n * factorial(n - 1);;
    }
  }
}
