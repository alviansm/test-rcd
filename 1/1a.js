// Fungsi yang bertujuan menampilkan value dari parameter yang diberikan, satu value per baris
// Input boleh merupakan number, string, atau array

function displayValue(...val) {
    let tempVal = [...val];
    let result = "";

    // Mengubah hingga array 10 dimensi menjadi 1 dimensi saja
    tempVal = tempVal.flat(10);

    for (let i=0; i<tempVal.length; i++) {
        result = result + `Baris ${i}: ${tempVal[i]}\n`
    }

    return result;
}

// console.log(displayValue("Bacon", "Cory", [1,2,3]));

console.log(displayValue("String", "Kentang", 12, [1,2,3,4,[3,4,[5,6]]]));
