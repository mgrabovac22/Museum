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

    let provjeraUnosa =  true;

    if (ime.trim() == "") {
        let labela = document.querySelector('label[for="ime"]');
        labela.style.color = 'red';
        let greska = document.getElementById("imeGreska");
        greska.innerHTML = "Popunite ovo polje!";
        provjeraUnosa=false;
    }
    else{
        let labela = document.querySelector('label[for="ime"]');
        labela.style.color = 'black';
        let greska = document.getElementById("imeGreska");
        greska.innerHTML = "";
    }
    if (email.trim() == '') {
        let labela = document.querySelector('label[for="email"]');
        labela.style.color = 'red';
        let greska = document.getElementById("emailGreska");
        greska.innerHTML = "Popunite ovo polje!";
        provjeraUnosa=false;
    }
    else{
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

const gumbZaSlanje = document.getElementById('posaljiObrazac');
gumbZaSlanje.addEventListener('click', function(event) {
    if (provjeriObrazac()) {
        alert('Obrazac je uspješno poslan!');
    }
    else{
        event.preventDefault();
    }
});
