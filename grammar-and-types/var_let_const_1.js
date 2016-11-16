/**
 * Topic: Choosing var vs. let vs. const 
 * Problem instructions: Go through each problem and follow instructions in comments where a TODO flag is specified.
 * Relevant resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types 
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var 
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */

function problem1(){
  // code for problem1
  var v = 1;

  if (true) {
    var v = 2;
  }

  var answer = undefined; // TODO - Replace undefined with the correct value of `v` (1 or 2)
}

function problem2(){
  let v = 1;

  if (true) {
    let v = 2;
  }

  var answer = undefined; // TODO - Replace undefined with the correct value of `v` (1 or 2)
}

function problem3(){
  // TODO - This function is raising an exception. Try to guess which before running the function, then change one line to make the test pass according to the given `condition`.

  const v = 1; // Do not change this line

  if (true) {
    var w;
    v = 2;
    w = v;
  }

  // No changes below that point
  let condition = (v === 1 && w === 2);
}

/**
 * Solution - below is a base64 blob of the solution.
 *
--begin--
ZnVuY3Rpb24gcHJvYmxlbTEoKXsKICAvLyBjb2RlIGZvciBwcm9ibGVtMQogIHZhciB2ID0gMTsK
CiAgaWYgKHRydWUpIHsKICAgIHZhciB2ID0gMjsKICB9CgogIHZhciBhbnN3ZXIgPSAyOyAvLyBJ
TkZPIC0gVGhlIGFuc3dlciBpcyAyLiBgdmFyYCBpcyBmdW5jdGlvbi1zY29wZWQgc28gdGhlIHNl
Y29uZCBkZWNsYXJhdGlvbiBvZiBgdmAgYmxlZWRzIHRvIHRoZSBmdW5jdGlvbiBzY29wZSBhbmQg
b3ZlcnJpZGVzIHRoZSBpbml0aWFsIHZhbHVlIG9mIGB2YAp9CgpmdW5jdGlvbiBwcm9ibGVtMigp
ewogIGxldCB2ID0gMTsKCiAgaWYgKHRydWUpIHsKICAgIGxldCB2ID0gMjsKICB9CgogIHZhciBh
bnN3ZXIgPSAxOyAvLyBJTkZPIC0gYGxldGAgaXMgYmxvY2stc2NvcGVkLCBtZWFuaW5nIHRoYXQg
dGhlIHNlY29uZCBgdmAgdmFyaWFibGUgaGFzIGEgZGlmZmVyZW5jZSByZWZlcmVuY2UgaW4gdmly
dHVhbCBtZW1vcnkgdGhhbiB0aGUgZmlyc3Qgb25lIGluIHRoYXQgY2FzZS4KfQoKZnVuY3Rpb24g
cHJvYmxlbTMoKXsKCiAgY29uc3QgdiA9IDE7IC8vIERvIG5vdCBjaGFuZ2UgdGhpcyBsaW5lCgog
IGlmICh0cnVlKSB7CiAgICB2YXIgdzsKICAgIGNvbnN0IHYgPSAyOyAvLyBJTkZPIC0gTm90aWNl
IHdlIGFkZGVkIGNvbnN0IGhlcmUKICAgIHcgPSB2OwogIH0KCiAgLy8gTm8gY2hhbmdlcyBiZWxv
dyB0aGF0IHBvaW50CiAgbGV0IGNvbmRpdGlvbiA9ICh2ID09PSAxICYmIHcgPT09IDIpOwp9Cg==
--end--
 *
 */
