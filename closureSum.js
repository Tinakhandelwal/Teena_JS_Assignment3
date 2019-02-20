
/* Normal Sum Function.....*/
function a(n1, n2) {
    var sum = 0;
    sum = n1 + n2;
    return sum;
}
a(5, 2);

/* Sum using Closure property.....*/

function b(n1) {
    return function c(n2) {
        var sum = 0;
        sum = n1 + n2;
        return sum;
    }
}
b(5)(2);
