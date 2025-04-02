function encriptar() {
    var originalPass = document.getElementById("originalPass").value;
    var encriptPass;

    for (var i = 0; i < originalPass.length(); i++){
        alert(originalPass.charCodeAt(0));
        encriptPass = originalPass.charCodeAt(i);
    }

    alert(originalPass);
}