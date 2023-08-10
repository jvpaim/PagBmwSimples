
function educacao() {
    var minhaFrase;
    // var comprimento = document.getElementById('comprimento');
    // // meuParagrafo.innerHTML = minhaFrase
    var hora = new Date().getHours();

    if (hora >= 5 && hora <= 12) {
        minhaFrase = "Bom dia, usuario!"
    } else if (hora >= 13 && hora <= 18) {
        minhaFrase = "Boa tarde, usuario!"
    } else {
        minhaFrase = "Boa noite, usuario!"
    }
    
    document.write(minhaFrase);

}


function formulario(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const telefone = document.getElementById("telefone").value;

    alert(`Nome: ${nome} | E-mail: ${email} | Senha: ${senha} | Telefone: ${telefone}`);
}

