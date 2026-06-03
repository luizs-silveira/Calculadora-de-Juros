function calcular() {
    let capital = Number(document.getElementById("capital").value);
    let taxa = Number(document.getElementById("taxa").value) / 100;
    let tempo = Number(document.getElementById("tempo").value);
    let tipoJuros = document.getElementById("tipoJuros").value;
    let jurostado;
    let montado;

    if (tipoJuros == "jurosSimples") {
        let juros = capital * taxa * tempo;
        let montante = capital + juros
        jurostado = ("R$" + juros);
        montado  =("R$" + montante ); 
    }

    else if (tipoJuros == "jurosComposto") {
        let montanteC = capital * (1 + taxa) ** tempo
        let jurosC = montanteC - capital;
        jurostado = ("R$" + jurosC.toFixed(2));
        montado = ("R$" + montanteC.toFixed(2)); 
    }

    else {
        jurostado = ("Você não selecionou o tipo de juros");
    }
    document.getElementById("jurostado").innerText = jurostado;
    document.getElementById("montado").innerText = montado;
    
}


let montante = capital + juros;
let juros = capital * taxa * tempo;

function limparFormulario() {
 let capital = String(document.getElementById("capital").value = " ");
 let taxa = String(document.getElementById("taxa").value = " ");
 let tempo = String(document.getElementById("tempo").value = " ");
 let jurostado = String(document.getElementById("jurostado").value = " ");
 let montado = String(document.getElementById("montado").value = " ");
}



