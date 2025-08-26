function converte(){

    // uso o FECTH para acessar uma API externa
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
        .then(cotacao => cotacao.json())       // se houve uma resposta, eu trato essa resposta como JSON
        .then(cotacao => {
            //1
            let valorbr = document.getElementById("valorbrl").value
            //2
            let valorus = valorbr / cotacao.USDBRL.bid
            //3
            document.getElementById("valorusd").innerHTML = "US$ "+ valorus.toFixed(2)

            document.getElementById("cotacaousd").innerHTML = "R$ "+ cotacao.USDBRL.bid


        })
        .catch(erro => alert("Nao chama"+ erro));


    //confirm("Chama ou nao chama")
    //let valorbr = document.getElementById("valorbrl").value;
    //let valorus = valorbr / 5.5;
    //document.getElementById("valorusd").innerHTML = "US$ "+valorus.toFixed(2);
}