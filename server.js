const express = require("express");
const fs = require('fs');
const path = require('path');

const server = express();

const port = 12073;

server.use(express.urlencoded({ extended: true }));

let fun = function(request, response) {
    response.sendFile(__dirname + "/html/index.html");
};
let funObavijest1 = function(request, response) {
    response.sendFile(__dirname + "/html/saznajVise/oba.html");
};
let funObavijest2 = function(request, response) {
    response.sendFile(__dirname + "/html/saznajVise/obb.html");
};
let funObavijest3 = function(request, response) {
    response.sendFile(__dirname + "/html/saznajVise/obc.html");
};
let funDokumentacija = function(request, response) {
    response.sendFile(__dirname + "/html/dokumentacija.html");
};
let funGalerija = function(request, response) {
    response.sendFile(__dirname + "/html/galerijaSlika.html");
};
let funAutor = function(request, response) {
    response.sendFile(__dirname + "/html/oAutoru.html");
};
let funObrasci = function(request, response) {
    response.sendFile(__dirname + "/html/fra.html");
};
let funIzlozba = function(request, response) {
    response.sendFile(__dirname + "/html/frb.html");
};
let funTablica = function(request, response) {
    response.sendFile(__dirname + "/html/tablica.html");
};

server.get('/', fun);
server.get('/oba', funObavijest1);
server.get('/obb', funObavijest2);
server.get('/obc', funObavijest3);
server.get('/dok', funDokumentacija);
server.get('/fra', funObrasci);
server.get('/frb', funIzlozba);
server.get('/gal', funGalerija);
server.get('/oau', funAutor);
server.get('/tab', funTablica);
server.use("/css", express.static("./css"));
server.use("/jsk", express.static("./js/klijent"));
server.use("/slike", express.static("./resursi/slike"));


server.listen(port, () => {
    http = "http://localhost:";
    console.log('Express server pokrenut na: ' + http + port);
})

function citajCSV(putanjaDatoteke, separator, pozivanje) {
    fs.readFile(putanjaDatoteke, 'utf8', (err, podaci) => {
        if (err) {
            pozivanje(err, null);
        } else {
            const rows = podaci.split('\n').filter(row => row.trim() !== '');
            const parametri = rows.map(row => row.split(separator));
            pozivanje(null, parametri);
        }
    });
}

function kopirajIzJSONuCSV(putanjaJSON, putanjaCSV, pozivanje) {
    fs.readFile(putanjaJSON, 'utf8', (err, jsonPodaci) => {
        if (err) return pozivanje(err);

        const exhibits = JSON.parse(jsonPodaci);
        const csvpodaci = exhibits.map(exhibit => Object.values(exhibit).join('#')).join('\n');

        fs.writeFile(putanjaCSV, csvpodaci, 'utf8', (err) => {
            if (err) return pozivanje(err);
            pozivanje(null);
        });
    });
}

server.post('/popis', (req, res) => {
    const putanjaJSON = path.join(__dirname, 'js', 'server', 'izlozba.json');
    const putanjaCSV = path.join(__dirname, 'js', 'server', 'izlozba.csv');

    kopirajIzJSONuCSV(putanjaJSON, putanjaCSV, (err) => {
        if (err) {
            res.status(500).send('Greška pri kopiranju podataka iz JSON datoteke u CSV datoteku.');
            console.log(err);
        } else {
            res.redirect('/popis');
        }
    });
});

server.get('/popis', (req, res) => {
    citajCSV(path.join(__dirname, 'js', 'server', 'izlozba.csv'), '#', (err, parametri) => {
        if (err) {
            res.status(500).send('Greška pri čitanju datoteke.');
        } else {
            const listItems = parametri.map(parametar => `
                <li>
                    <a href="#" onclick="confirmDelete('${parametar[1]}')">${parametar[1]} - ${parametar[2]} (${parametar[3]})</a>
                </li>
            `).join('');
            const html = `
                <!DOCTYPE html>
                <html lang="hr">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" type="text/css" href="/css/mgrabovac22.css">
                    <title>Popis izložbenih primjeraka muzeja</title>
                    <style>
                        dinLista {
                            margin: auto;
                        }
                        main div a {
                            text-decoration: none;
                            color: black;
                            border-style: solid;
                            border-color: black;
                            border-radius: 5%;
                            padding-left: 10px;
                            padding-right: 10px;
                            background-color: gray;
                            margin-bottom: 3vh;
                        }
                        main ul a{
                            color: black;
                            text-decoration: none;
                        }
                        main {
                            margin-left: 30%;
                            width: 42%;
                            background-color: rgba(102, 102, 102, 0.7);
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        }
                        body{
                            background-image: url('/slike/pozadina_pocetna_mobilni.jpg');
                            background-size: cover;
                        }
                        footer {
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                        }
                        form{
                            background-color: rgba(102, 102, 102, 0.7);
                            width: 20%;
                        }
                        button{
                            background-color: rgba(102, 102, 102, 0.7);
                            width:90%;
                        }
                    </style>
                    <script>
                        function confirmDelete(name) {
                            if (confirm('Želite li obrisati ovaj element: ' + name + '?')) {
                                window.location.href = '/brisi?name=' + encodeURIComponent(name);
                            }
                        }
                    </script>
                </head>
                <body>
                    <header id="dinHeader">
                        <h1>Popis izložbenih primjeraka muzeja</h1>
                    </header>
                    <main>
                        <form action="/popis" method="post">
                            <button type="submit">Popuni</button>
                        </form>
                        <ul>
                            ${listItems}
                        </ul>
                        <div>
                            <a href="/">Povratak na početnu stranicu</a>
                        </div>
                    </main>
                    <footer>
                        <p>
                        <a href="https://creativecommons.org/share-your-work/cclicenses/">
                            <img src="/slike/ccIkona.png" alt="ikona" width="15" height="15">
                        </a> 
                        &copy; 2024 Marin Grabovac</p>
                    
                        <a href="http://validator.w3.org/check?uri=https://spider.foi.hr/OWT/2024/zadaca_01/mgrabovac22/html/dokumentacija.html">
                            <img src="https://spider.foi.hr/OWT/materijali/slike/HTML5.png" alt="HTML5 Validator" width="30" height="30">
                        </a>
                    </footer>
                </body>
                </html>
            `;
            res.send(html);
        }
    });
});


server.use((req, res) => {
    res.status(404).send(`
        <h1>Stranica ne postoji!</h1>
        <p>Stranica koju tražite nije pronađena.</p>
        <a href="/">Povratak na početnu stranicu</a>
    `);
});