document.addEventListener("DOMContentLoaded", function() {

    function provjeriObrazac() {
        const ime = document.getElementById('ime').value;
        const email = document.getElementById('email').value;
        const lozinka = document.getElementById('lozinka').value;
        const dob = document.getElementById('dob').value;
        const broj = document.getElementById('broj').value;
        const opcija1 = document.getElementById('opcija1');
        const opcija2 = document.getElementById('opcija2');
        const opcija3 = document.getElementById('opcija3');
        const spol = document.getElementById('spol').value;
        const grad = document.getElementById('grad').value;
        const odabir = document.getElementById('odabir').value;
        const textarea = document.getElementById('textarea').value;
        const checkBox1 = document.getElementById('checkboxOpcije1');
        const checkBox2 = document.getElementById('checkboxOpcije2');

        let provjeraUnosa =  true;

        const imeRegex = /^[A-Za-zČĆŽŠĐčćžšđ\s]+$/;
        if (ime.trim() == "" || !imeRegex.test(ime)) {
            let labela = document.querySelector('label[for="ime"]');
            labela.style.color = 'red';
            let greska = document.getElementById("imeGreska");
            if (ime.trim() == "") {
                greska.innerHTML = "Popunite ovo polje!";
            } else {
                greska.innerHTML = "Ime i prezime može sadržavati samo slova i razmake!";
            }
            provjeraUnosa = false;
        } else {
            let labela = document.querySelector('label[for="ime"]');
            labela.style.color = 'black';
            let greska = document.getElementById("imeGreska");
            greska.innerHTML = "";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailRegex.test(email)) {
            let labela = document.querySelector('label[for="email"]');
            labela.style.color = 'red';
            let greska = document.getElementById("emailGreska");
            if (email === "") {
                greska.innerHTML = "Popunite ovo polje!";
            } else {
                greska.innerHTML = "Unesite ispravnu e-mail adresu!";
            }
            provjeraUnosa = false;
        } 
        else {
            let labela = document.querySelector('label[for="email"]');
            labela.style.color = 'black';
            let greska = document.getElementById("emailGreska");
            greska.innerHTML = "";
        }
        if (lozinka.trim() == '') {
            let labela = document.querySelector('label[for="lozinka"]');
            labela.style.color = 'red';
            let greska = document.getElementById("lozinkaGreska");
            greska.innerHTML = "Popunite ovo polje!";
            provjeraUnosa=false;
        }
        else{
            let labela = document.querySelector('label[for="lozinka"]');
            labela.style.color = 'black';
            let greska = document.getElementById("lozinkaGreska");
            greska.innerHTML = "";
        }
        if (dob.trim() == '') {
            let labela = document.querySelector('label[for="dob"]');
            labela.style.color = 'red';
            let greska = document.getElementById("dobGreska");
            greska.innerHTML = "Popunite ovo polje!";
            provjeraUnosa=false;
        }
        else{
            let labela = document.querySelector('label[for="dob"]');
            labela.style.color = 'black';
            let greska = document.getElementById("dobGreska");
            greska.innerHTML = "";
        }
        if (broj.trim() == '') {
            let labela = document.querySelector('label[for="broj"]');
            labela.style.color = 'red';
            let greska = document.getElementById("brojGreska");
            greska.innerHTML = "Popunite ovo polje!";
            provjeraUnosa=false;
        }
        else{
            let labela = document.querySelector('label[for="broj"]');
            labela.style.color = 'black';
            let greska = document.getElementById("brojGreska");
            greska.innerHTML = "";  
        }
        if (!checkBox1.checked && !checkBox2.checked) {
            let labela1 = document.querySelector('label[for="checkboxOpcije1"]');
            labela1.style.color = 'red';
            let labela2 = document.querySelector('label[for="checkboxOpcije2"]');
            labela2.style.color = 'red';
            let greska = document.getElementById("checkGreska");
            greska.innerHTML = "Popunite ovo polje!";
            provjeraUnosa=false;
        }
        else {
            console.log("uslo1");
            let labela1 = document.querySelector('label[for="checkboxOpcije1"]');
            labela1.style.color = 'black';
            let labela2 = document.querySelector('label[for="checkboxOpcije2"]');
            labela2.style.color = 'black';
            let greska = document.getElementById("checkGreska");
            greska.innerHTML = "";
        }

        if (!opcija1.checked && !opcija2.checked && !opcija3.checked) {
            let labela1 = document.querySelector('label[for="opcija1"]');
            labela1.style.color = 'red';
            let labela2 = document.querySelector('label[for="opcija2"]');
            labela2.style.color = 'red';
            let labela3 = document.querySelector('label[for="opcija3"]');
            labela3.style.color = 'red';
            let greska = document.getElementById("opcijeGreska");
            greska.innerHTML = "Popunite ovo polje!";
            provjeraUnosa=false;
        }
        else {
            console.log("uslo");
            let labela1 = document.querySelector('label[for="opcija1"]');
            labela1.style.color = 'black';
            let labela2 = document.querySelector('label[for="opcija2"]');
            labela2.style.color = 'black';
            let labela3 = document.querySelector('label[for="opcija3"]');
            labela3.style.color = 'black';
            let greska = document.getElementById("opcijeGreska");
            greska.innerHTML = "";
        }
        if (spol.trim() == '') {
            let labela = document.querySelector('label[for="spol"]');
            labela.style.color = 'red';
            let greska = document.getElementById("spolGreska");
            greska.innerHTML = "Popunite ovo polje!";
            provjeraUnosa=false;
        }
        else{
            let labela = document.querySelector('label[for="spol"]');
            labela.style.color = 'black';
            let greska = document.getElementById("spolGreska");
            greska.innerHTML = "";  
        }
        if (grad.trim() == '') {
            let labela = document.querySelector('label[for="grad"]');
            labela.style.color = 'red';
            let greska = document.getElementById("gradGreska");
            greska.innerHTML = "Popunite ovo polje!";
            provjeraUnosa=false;
        }
        else{
            let labela = document.querySelector('label[for="grad"]');
            labela.style.color = 'black';
            let greska = document.getElementById("gradGreska");
            greska.innerHTML = "";  
        }
        if (odabir.trim() == '') {
            let labela = document.querySelector('label[for="odabir"]');
            labela.style.color = 'red';
            let greska = document.getElementById("odabirGreska");
            greska.innerHTML = "Popunite ovo polje!";
            provjeraUnosa=false;
        }
        else{
            let labela = document.querySelector('label[for="odabir"]');
            labela.style.color = 'black';
            let greska = document.getElementById("odabirGreska");
            greska.innerHTML = "";  
        }
        if (textarea.trim() == '') {
            let labela = document.querySelector('label[for="textarea"]');
            labela.style.color = 'red';
            let greska = document.getElementById("textareaGreska");
            greska.innerHTML = "Popunite ovo polje!";
            provjeraUnosa=false;
        }
        else{
            let labela = document.querySelector('label[for="textarea"]');
            labela.style.color = 'black';
            let greska = document.getElementById("textareaGreska");
            greska.innerHTML = "";  
        }
        

        if (provjeraUnosa) {
            return true;
        }
        else{
            return false;
        }
    }

    function provjeriDatum() {
        const datumInput = document.getElementById('dob');
        const datum = new Date(datumInput.value);
        const danas = new Date();
        const minimalniDatum = new Date(danas);
        minimalniDatum.setDate(danas.getDate() + 2);
        const maksimalniDatum = new Date(danas);
        maksimalniDatum.setMonth(danas.getMonth() + 1);

        if (datum < minimalniDatum || datum > maksimalniDatum) {
            let greska = document.getElementById("dobGreska");
            greska.innerHTML = "Pogrešan datum, treba biti 2 dana u budućnost do mjesec dana u budućnost!";
            let labela = document.querySelector('label[for="dob"]');
            labela.style.color = 'red';
            return false;
        }
        return true;
    }

    function provjeraVisestrukogUnosa() {
        const odabir = document.getElementById('odabir');
        const odabirGreska = document.getElementById('odabirGreska');

        let grupa1 = false;
        let grupa2 = false;

        for (let option of odabir.selectedOptions) {
            if (option.parentElement.label === 'Ograničeni aranžmani') {
                grupa1 = true;
            } else if (option.parentElement.label === 'Posebne ponude') {
                grupa2 = true;
            }
        }

        if (!grupa1 || !grupa2) {
            odabirGreska.textContent = 'Odaberite po jednu opciju iz svake grupe.';
            return false;
        } else {
            odabirGreska.textContent = '';
            return true;
        }
    }

    function provjeraNumerickogUnosa(){
        const x = 20;
        const y = 70
        const vrijednost =  document.getElementById('broj').value;

        const broj = parseInt(vrijednost, 10);

        if (broj >= x && broj <= y) {
            console.log('Unos je u rasponu.');
            return true;
        } else {
            const greska = document.getElementById("brojGreska");
            greska.innerHTML = `Unesite broj između ${x} i ${y}.`;
            return false;
        }
    }

    function provjeraTeksta() {
        const pocetakIVrijeme = /^[A-Z].*[\.\?\!]\s*$/;
        const zabranjeniZnakovi = /[<>#\-]/;
        let tekst = document.getElementById("textarea").value;
        const greska = document.getElementById("textareaGreska");

        greska.innerHTML = '';

        if (zabranjeniZnakovi.test(tekst)) {
            greska.innerHTML = "Zabranjeni (<,>,#,-) znakovi su uneseni! Ponovno unesite!";
            return false;
        }

        const recenice = tekst.split(/[\.\?\!]/).filter(recenica => recenica.trim() !== "");

        if (recenice.length > 4) {
            greska.innerHTML = "Previše rečenica ste unijeli, maksimalno je 4.";
            return false;
        }

        for (let recenica of recenice) {
            recenica = recenica.trim();
            if (!/^[A-ZČĆĐŠŽ]/.test(recenica)) {  
                greska.innerHTML = "Svaka rečenica mora počinjati velikim slovom.";
                return false;
            }
        }

        if (!pocetakIVrijeme.test(tekst.trim())) {
            greska.innerHTML = "Rečenica mora završavati (., !, ?) znakovima!";
            return false;
        }

        return true;
    }

    const gumbZaSlanje = document.getElementById('posaljiObrazac');
    gumbZaSlanje.addEventListener('click', function(event) {
        if (!provjeriObrazac()) {
            event.preventDefault();
        }
        if (!provjeraNumerickogUnosa()) {
            event.preventDefault();
        }
        if (!provjeriDatum() || !provjeraVisestrukogUnosa()) {
            event.preventDefault();
        }
        if(!provjeraTeksta()){
            event.preventDefault();
        }
        else{
            console.log("Obrazac je poslan!");
        }
    });
});


