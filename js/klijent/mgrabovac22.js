document.addEventListener("DOMContentLoaded", function() {
    const dugme = document.getElementById('mobile');
    const body = document.body;

    function setCookie(nazivKolacica, vrijednostKolacica, rokTrajanja) {
        const d = new Date();
        d.setTime(d.getTime() + (rokTrajanja*24*60*60*1000));
        let istjece = "expires=" + d.toUTCString();
        document.cookie = nazivKolacica + "=" + vrijednostKolacica + ";" + istjece + ";path=/";
    }

    
    function promjenaStanja() {
        const verzija = uzmiKolacic("verzija");
        if (verzija == "mobile") {
            body.classList.add('mobile');
            dugme.textContent = "Vrati na stolnu verziju";
            document.getElementById("navPocetna").style.display= "none";
            document.getElementById("btnMobilni").style.display= "block";
            document.getElementById("kartica").style.display="none";
            document.getElementById("karticaMob").style.display="inline";
        } else {
            body.classList.remove('mobile');
            dugme.textContent = "Prebaci na mobilnu verziju";
            document.getElementById("navPocetna").style.display= "inline";
            document.getElementById("kartica").style.display="inline";
            document.getElementById("karticaMob").style.display="none";
            document.getElementById("btnMobilni").style.display= "none";
        }
    }
    
    function uzmiKolacic(nazivKolacica) {
        const decodedCookie = decodeURIComponent(document.cookie);
        const vrijednostKolacica = decodedCookie.split(';');
        for (let i = 0; i < vrijednostKolacica.length; i++) {
            let cookie = vrijednostKolacica[i].trim();
            if (cookie.startsWith(nazivKolacica + '=')) {
                return cookie.substring(nazivKolacica.length + 1); 
            }
        }
        return null;
    }
    
    function prebaci() {
        const verzija = uzmiKolacic("verzija");
        if (verzija == "mobile") {
            setCookie("verzija", "desktop", 7);
        } 
        else {
            setCookie("verzija", "mobile", 7);
        }
        promjenaStanja();
    }

    dugme.addEventListener('click', prebaci);
    promjenaStanja();
});
