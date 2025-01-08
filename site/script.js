function atualizarContador() {
    const dataInicio = new Date(2014, 4, 2); // Mês 4 é maio (os meses começam do 0)
    const agora = new Date();

    const diferenca = agora - dataInicio;
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `
        ${anos} anos, ${meses} meses, ${dias} dias, 
        ${horas} horas, ${minutos} minutos, ${segundos} segundos
    `;
}

setInterval(atualizarContador, 1000);
