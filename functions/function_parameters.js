/**
 * those problems cover functions
 * in problem1 the issue is with the declaration of function exmpl
 * in problem2 the issue is with the invalid use of function exmpl
 *
 * Relevant resource:
 * - http://www.w3schools.com/js/js_functions.asp
 */

function problem1(){
  function exmpl(var x, var y)
  {
  	return x+y;
  	}
}

function problem2(){
   function exmpl(x, y, z)
  {
  	return x*y*z;
  	}

  	var a = 5;
  	var b = 4;
  	console.log(exmpl(a, b));
}

/**
 *
 * Solution - below is a base64 blob of the solution.(problem1)
 *
--begin--
<
  ZnVuY3Rpb24gcHJvYmxlbTEoKXsKICBmdW5jdGlvbiBleG1wbCh4LCB5KQogIHsKICByZXR1cm4g
eCt5OwogIH0KfQo=

>
--end--
 *
 * * Solution - below is a base64 blob of the solution.(problem2)
 *
--begin--
<
  ZnVuY3Rpb24gcHJvYmxlbTIoKXsKICAgZnVuY3Rpb24gZXhtcGwoeCwgeSwgeiwpCiAgewogIHJl
dHVybiB4KnkqejsKICB9CiAgCiAgdmFyIGEgPSA1OwogIHZhciBiID0gNDsKICBjb25zb2xlLmxv
ZyhleG1wbChhLCBiKSk7Cn0K


>
--end--
 */
