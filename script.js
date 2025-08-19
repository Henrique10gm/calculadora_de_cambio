function converte(){
    confirm("Chama ou nao chama")
    let valorbr = document.getElementById("valorbrl").value;
    let valorus = valorbr / 5.5;
    document.getElementById("valorusd").innerHTML = "US$ "+valorus.toFixed(2);
}