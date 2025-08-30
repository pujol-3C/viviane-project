// Alternar menu acessibilidade
document.getElementById("botao-acessibilidade").addEventListener("click", () => {
    document.getElementById("opcoes-acessibilidade").classList.toggle("mostrar");
});

// Aumentar fonte
document.getElementById("aumentar-fonte").addEventListener("click", () => {
    document.body.style.fontSize = "larger";
});

// Diminuir fonte
document.getElementById("diminuir-fonte").addEventListener("click", () => {
    document.body.style.fontSize = "smaller";
});
