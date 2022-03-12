// Fungsi untuk mengambil kata-kata dalam kurung

function getParenthesis(str) {
    let kalimat = str.split("");
    let indexOpen = [];
    let indexClose = [];
    let result = [];

    // cari index buka kurung dan tutup kurung dalam tulisan
    for (let i=0; i<kalimat.length; i++) {
        if (kalimat[i] == "(") {
            indexOpen.push(i+1);
        };
        if (kalimat[i] == ")") {
            indexClose.push(i);
        };
    };

    // gabungkan buka kurung dan tutup kurung sesuai dengan indeks
    let concatArr = [];
    
    for (let i=0; i<indexOpen.length; i++) {
        concatArr.push([indexOpen[i], indexClose[i]]);
    };
    
    kalimat = kalimat.join("").toString();
    for (let i=0; i<concatArr.length; i++) {
        result.push(kalimat.substring(concatArr[i][0], concatArr[i][1]));
    };

    return result;
};

let kalimat = "(23 Maret 2018) Some string is below here (please note below):"
console.log(getParenthesis(kalimat)); // should return ["23 Maret 2018", "please note below"]

