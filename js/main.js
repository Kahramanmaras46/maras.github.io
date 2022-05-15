const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");


  function control() {
    var x = document.forms["Form"]["name"].value;
    if (x == "") {
        alert("İsim boş bırakılamaz");
        return false;
    }

    var y = document.forms["Form"]["email"].value;
    if (y == "") {
        alert("Mail Kısmı Boş bırakılamaz");
        return false;
    }

    var forMail = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
    if (forMail.test(y) == false) {
        alert("Geçersiz Mail Adresi!!!");
        return false;
    }
    var message = document.forms["Form"]["message"].value;
    if (message == "") {
        alert("Mesaj Kısmı Boş bırakılamaz");
        return false;
    }

}
