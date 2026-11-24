// ===================================================
// TRABALHO AVALIATIVO P2 - Fundamentos de Programação para Web
// Funcionalidades JavaScript
// ===================================================

// Funcionalidade 1 – Boas-vindas
// Ao abrir a página, solicitar o nome do visitante com prompt(),
// armazená-lo em uma variável e exibir com alert(): "Bem-vindo à Semana de Tecnologia, [nome]!"
var nome = prompt("Por favor, digite seu nome:");

if (nome && nome.trim() !== "") {
    alert("Bem-vindo à Semana de Tecnologia, " + nome.trim() + "!");
} else {
    alert("Bem-vindo à Semana de Tecnologia!");
}

// Funcionalidade 2 – Alteração da cor de fundo
// Ao abrir a página, perguntar com confirm() se o visitante deseja alterar a cor de fundo.
// Se confirmar, solicitar com prompt() uma das opções blue, red ou green e aplicar uma
// versão suave/pastel correspondente com subcores combinando.
// Se cancelar, manter a cor definida no CSS (lightgray).
var desejaAlterar = confirm("Deseja alterar a cor de fundo da página?");

if (desejaAlterar) {
    var corEscolhida = prompt("Escolha uma cor de fundo (blue, red ou green):");

    if (corEscolhida) {
        corEscolhida = corEscolhida.toLowerCase().trim();

        var coresSuaves = {
            blue: "#dbeafe",  // azul celeste claro
            red: "#fde2e2",   // vermelho rosado / coral claro
            green: "#dcfce7"  // verde menta claro
        };

        if (coresSuaves[corEscolhida]) {
            document.body.style.backgroundColor = coresSuaves[corEscolhida];
            document.body.classList.remove("tema-blue", "tema-red", "tema-green");
            document.body.classList.add("tema-" + corEscolhida);
        } else {
            alert("Cor inválida! A cor padrão do CSS será mantida.");
        }
    }
}
