let prebacivanjeEkrana = document.getElementById("btnMob");

document.addEventListener("DOMContentLoaded", function(){
    const body = document.body;

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function mobile() {
        if (body.classList.contains('mobile')) {
            body.classList.remove('mobile');
            prebacivanjeEkrana.innerHTML = "Prebaci na mobilnu verziju";
            setCookie("deviceVersion", "desktop", 7);
        } else {
            body.classList.add('mobile');
            prebacivanjeEkrana.innerHTML = "Vrati na stolnu verziju";
            setCookie("deviceVersion", "mobile", 7);
        }
    }

    prebacivanjeEkrana.addEventListener("click", mobile);
    console.log("Script loaded successfully");
});
