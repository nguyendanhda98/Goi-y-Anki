function biendoi(string) {
    let kq = string.slice(0, 1);
    for (let i = 1; i < string.length; i++) {
        kq += "_";
    }
    return kq;
}
var fs = require('fs');
fs.readFile('doc.txt', 'utf8', function (err, data) {
    let arr = data.split('\n');
    let dataGhi = "";
    arr.map((ar) => {
        let x = biendoi(ar) + "\n";
        dataGhi += x;
    })
    fs.writeFile('ghi.txt', dataGhi, 'utf8', function (err) {
        if (err)
            throw err;
        else
            console.log('Ghi file thanh cong!');
    });
});
