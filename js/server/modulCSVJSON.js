const path = require("path");
const fs = require('fs');

class PomFunkJSONCSV {
    constructor() {
        console.log("Klasa inicijalizirana");
    }

    kopirajJSONuCSV() {
        let putanjaJSON = path.join(__dirname, 'izlozba.json');
        let putanjaCSV = path.join(__dirname, 'izlozba.csv');

        fs.readFile(putanjaJSON, 'utf8', (err, jsonPodaci) => {
            if (err) console.log(err);
    
            const primjerci = JSON.parse(jsonPodaci);
            const csvpodaci = primjerci.map(primjerak => Object.values(primjerak).join('#')).join('\n');
    
            fs.writeFile(putanjaCSV, csvpodaci, 'utf8', (err) => {
                if (err) console.log(err);
            });
        });
    }

    prebaciCSVuJSON(csvLinija) {
        const nazivVarijabli = ['id', 'naziv', 'opis', 'kategorija'];
        const vrijednosti = csvLinija.split('#');
        const rezultat = {};
        nazivVarijabli.forEach((nazivVarijable, index) => {
            rezultat[nazivVarijable] = vrijednosti[index];
        });
        return rezultat;
    }

    prebaciJSONuCSV(jsonObject) {
        const vrijednosti = ['id', 'naziv', 'opis', 'kategorija'].map(nazivVarijable => jsonObject[nazivVarijable]);
        return vrijednosti.join('#');
    }
};

module.exports = PomFunkJSONCSV;
