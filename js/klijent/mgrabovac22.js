document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('mobile');
    const body = document.body;

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function mobile() {
        if (body.classList.contains('mobile')) {
            body.classList.remove('mobile');
            toggleButton.textContent = "Prebaci na mobilnu verziju";
            document.getElementById("navPocetna").style.display= "inline";
            document.getElementById("kartica").style.display="inline";
            document.getElementById("karticaMob").style.display="none";
            document.getElementById("btnMobilni").style.display= "none";
            setCookie("deviceVersion", "desktop", 7);
        } else {
            body.classList.add('mobile');
            toggleButton.textContent = "Vrati na stolnu verziju";
            document.getElementById("navPocetna").style.display= "none";
            document.getElementById("btnMobilni").style.display= "block";
            document.getElementById("kartica").style.display="none";
            document.getElementById("karticaMob").style.display="inline";
            setCookie("deviceVersion", "mobile", 7);
        }
        console.log("Prebaceno je");
    }
    toggleButton.addEventListener('click', mobile);
});



