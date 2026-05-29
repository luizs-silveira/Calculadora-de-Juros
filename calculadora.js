function calcular() {
    let capital = Number(document.getElementById("capital").value);
    let taxa = Number(document.getElementById("taxa").value) / 100;
    let tempo = Number(document.getElementById("tempo").value);
    let tipoJuros = document.getElementById("tipoJuros").value;

    if (tipoJuros == "jurosSimples") {
        let juros = capital * taxa * tempo;
        let montante = capital + juros
        alert("Seu montante é: R$" + montante + "\n" + "O juros é de: R$" + juros);
    }

    else if (tipoJuros == "jurosComposto") {
        let montanteC = capital * (1 + taxa) ** tempo
        let jurosC = montanteC - capital;
        
        alert("Seu montante é: R$" + montanteC.toFixed(2) + "\n" + "O juros é de: R$" + jurosC.toFixed(2));
    }

    else {
        alert("Você não selecionou o tipo de juros")
    }
}

function limparFormulario() {
 let capital = String(document.getElementById("capital").value = " ");
 let taxa = String(document.getElementById("taxa").value = " ");
 let tempo = String(document.getElementById("tempo").value = " ");

}

