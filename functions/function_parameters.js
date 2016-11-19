/**
 * Topic: Functions
 * Instructions: Resolve the following issues:
 * Problem 1: the declaration of function exmpl will raise a SyntaxError exception.
 * Problem 2: the function call to exmpl will evaluate as NaN.
 *
 * Relevant resource:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 */

function problem1(){
  function sum(var x, var y)
  {
    return x+y;
  }
}

function problem2(){
  function multiplication(x, y, z)
  {
    return x*y*z;
  }
  const a = 5;
  const b = 4;
  console.log(multiplication(a, b));
}

/**
 *
 * Solution - below is a base64 blob of the solution.
 *
--begin--
ZnVuY3Rpb24gcHJvYmxlbTEoKXsKICBmdW5jdGlvbiBzdW0oeCwgeSkKICB7CiAgICByZXR1cm4g
eCt5OwogIH0KfQoKZnVuY3Rpb24gcHJvYmxlbTIoKXsKICBmdW5jdGlvbiBtdWx0aXBsaWNhdGlv
bih4LCB5LCB6KQogIHsKICAgIHJldHVybiB4KnkqejsKICB9CiAgICBjb25zdCBhID0gNTsKICAg
IGNvbnN0IGIgPSA0OwogICAgY29uc3QgYyA9IDM7CiAgICBjb25zb2xlLmxvZyhtdWx0aXBsaWNh
dGlvbihhLCBiLCBjKSk7Cn0K
--end--
 */
