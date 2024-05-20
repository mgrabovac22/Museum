document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('mobile');
    const body = document.body;

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.startsWith(cname + '=')) {
                return cookie.substring(cname.length + 1); 
            }
        }
        return null;
    }
    
    function promjenaStanja() {
        const deviceVersion = getCookie("deviceVersion");
        if (deviceVersion === "mobile") {
            body.classList.add('mobile');
            toggleButton.textContent = "Vrati na stolnu verziju";
            document.getElementById("navPocetna").style.display= "none";
            document.getElementById("btnMobilni").style.display= "block";
            document.getElementById("kartica").style.display="none";
            document.getElementById("karticaMob").style.display="inline";
        } else {
            body.classList.remove('mobile');
            toggleButton.textContent = "Prebaci na mobilnu verziju";
            document.getElementById("navPocetna").style.display= "inline";
            document.getElementById("kartica").style.display="inline";
            document.getElementById("karticaMob").style.display="none";
            document.getElementById("btnMobilni").style.display= "none";
        }
    }

    function mobile() {
        const deviceVersion = getCookie("deviceVersion");
        if (deviceVersion === "mobile") {
            setCookie("deviceVersion", "desktop", 7);
        } else {
            setCookie("deviceVersion", "mobile", 7);
        }
        promjenaStanja();
        console.log("Prebaceno je");
    }

    toggleButton.addEventListener('click', mobile);
    promjenaStanja();
});
