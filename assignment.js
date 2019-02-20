var arr = [
    {
        "type": 'ab',
        "percentage": "5"
    },
    {
        "type": 'cd',
        "percentage": "10"
    },
    {
        "type": 'ef',
        "percentage": "15"
    },
    {
        "type": 'gh',
        "percentage": "20"
    },
    {
        "type": 'ij',
        "percentage": "25"
    },
]
/* Function to calculate type, amount,tax,amountdeducted*/

function calculatetype(inputType = 'cd', totalamount = 0) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type == inputType) {
            var percent = arr[i].percentage;
        }
    }
    let amountDeducted = (percent / 100) * totalamount;
    let netamount = totalamount - amountDeducted;

    /* Object to store the result*/

    var obj = {

        inputType: inputType,
        totalamount: totalamount,
        percent: percent,
        amountDeducted: amountDeducted,
        netamount: netamount
    }
    return obj;

}
console.log(calculatetype('ab',100));
console.log(calculatetype('ij', 100));

/* Default case */
console.log(calculatetype());

