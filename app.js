function MostraDati(){
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var email = document.getElementById("email").value.trim();
    var indirizzo = document.getElementById("indirizzo").value;
    var dataNascita = document.getElementById("data_nascita").value;
    var output = document.getElementById("dati");
    var error = document.getElementById("error");

    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
        window.location.href = "404.html";
        error.innerHTML = "<p style='color: red;'>Email non valida.</p>";
        return;
    }

    var dati = {
        "Nome": nome,
        "Cognome": cognome,
        "Email": email,
        "Indirizzo": indirizzo,
        "Data di Nascita": dataNascita
    }
    output.innerHTML = "<h2>Dati Inseriti:</h2>";
    for (var key in dati) {
        output.innerHTML += "<p><strong>" + key + ":</strong> " + dati[key] + "</p>";
    }

}