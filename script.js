document.getElementById("form-contato").addEventListener("submit", function(evento) {
    evento.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Mensagem enviada com sucesso!");
    }
});