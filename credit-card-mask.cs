// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

public static class Kata {
  // return masked string
  public static string Maskify(string cc) {
    int x = cc.Length;
    int z = x - 4;

    if (x > 4) {
      string masked;
      masked = cc.Substring(z).PadLeft(cc.Length, '#');
      return masked;
    }
    if (x == 1) {
      return "1";
    }
    if (x < 4 || x == 4) {
      return cc;
    } else {
      return "";
    }
  }
}
