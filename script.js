/**
 * Created by jediProgrammer on 01/09/2016.
 */
var i,
    target = 1000,
    arr = [],
    sum;

function multiple() {
    for (i = 1; i < target; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i);
        }

        sum = arr.reduce(function (pre, curr) {
            return pre + curr;
        }, 0);
    }
    arr = [];
    console.log(sum);
}